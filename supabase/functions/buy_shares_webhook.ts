import { serve } from 'https://deno.land/std@0.153.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

serve(async (req) => {
  const { txHash, userId, channelId, amount } = await req.json();
  const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SERVICE_ROLE_KEY')!);
  await supabase.from('tx_logs').insert({
    hash: txHash,
    user_id: userId,
    type: 'buy_shares',
    status: 'pending',
    payload: { channelId, amount }
  });
  return new Response('buy_shares_webhook ok');
});
