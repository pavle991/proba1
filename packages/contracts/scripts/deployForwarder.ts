import { ethers } from 'hardhat';

async function main() {
  const Forwarder = await ethers.getContractFactory('MinimalForwarder');
  const forwarder = await Forwarder.deploy();
  await forwarder.deployed();
  console.log('MinimalForwarder deployed to:', forwarder.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
