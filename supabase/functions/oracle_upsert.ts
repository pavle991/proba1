import { serve } from 'https://deno.land/std@0.153.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { ethers } from 'https://esm.sh/ethers@6';

serve(async () => {
  const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SERVICE_ROLE_KEY')!);
  // compute revenue_30d, EPS30, k, refPrice
  // UPSERT into daily_finance
  // if drift >1.5%, call ChainOracle.updatePrice
  return new Response('oracle_upsert ok');
});
