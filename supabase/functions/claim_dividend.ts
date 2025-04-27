import { serve } from 'https://deno.land/std@0.153.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { ThirdwebSDK } from 'https://esm.sh/@thirdweb-dev/sdk@3';

serve(async () => {
  const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SERVICE_ROLE_KEY')!);
  // compute claimable USDC via RPC or Supabase RPC
  // swap USDC to VIDE via Uniswap SDK or ethers.js
  // send meta-tx via MinimalForwarder
  return new Response('claim_dividend ok');
});
