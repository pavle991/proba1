import { ethers } from 'hardhat';
import { expect } from 'chai';

describe('VideToken', function () {
  it('should deploy and mint total supply', async function () {
    const Vide = await ethers.getContractFactory('VideToken');
    const totalSupply = ethers.utils.parseUnits('1000000000', 18);
    const vide = await Vide.deploy(totalSupply);
    await vide.deployed();
    const supply = await vide.totalSupply();
    expect(supply).to.equal(totalSupply);
  });
});
