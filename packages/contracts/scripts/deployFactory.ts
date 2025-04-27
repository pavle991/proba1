import { ThirdwebSDK } from '@thirdweb-dev/sdk';

async function main() {
  const sdk = new ThirdwebSDK(process.env.RPC_URL || '');
  const factory = await sdk.deployer.deployContract({
    name: 'ChannelFactory',
    abi: [ /* factory ABI here */ ],
    bytecode: '0x...' // compile and insert bytecode
  });
  console.log('ChannelFactory deployed to:', factory.getAddress());
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
