import { serve } from 'https://deno.land/std@0.153.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { ThirdwebSDK } from 'https://esm.sh/@thirdweb-dev/sdk@3';

serve(async (req) => {
  const { userId, channelName, coverUrl, wallet } = await req.json();
  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const supabaseKey = Deno.env.get('SERVICE_ROLE_KEY')!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data: user } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();
  if (!user || user.role !== 'viewer') return new Response('Forbidden', { status: 403 });

  const sdk = new ThirdwebSDK(Deno.env.get('RPC_URL')!);
  const token = await sdk.deployer.deployToken({
    name: channelName,
    symbol: 'CANAL',
    primary_sale_recipient: wallet,
    supply: 100_000
  });

  await token.mintTo(wallet, 10_000);

  await supabase.from('channels').insert({
    owner_user_id: userId,
    token_address: token.getAddress(),
    name: channelName,
    cover_url: coverUrl
  });

  // vesting insert omitted for brevity
  await supabase.from('users').update({ role: 'creator' }).eq('id', userId);

  return new Response(JSON.stringify({ token_address: token.getAddress() }), {
    headers: { 'Content-Type': 'application/json' }
  });
});
