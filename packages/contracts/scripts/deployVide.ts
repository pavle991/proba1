import { ethers } from 'hardhat';

async function main() {
  const Vide = await ethers.getContractFactory('VideToken');
  const vide = await Vide.deploy(ethers.utils.parseUnits('1000000000', 18));
  await vide.deployed();
  console.log('VideToken deployed to:', vide.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
