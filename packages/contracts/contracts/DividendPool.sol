// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DividendPool is Ownable {
    IERC20 public usdc;
    IERC20 public vide;

    mapping(address => uint256) public balances;

    constructor(address _usdc, address _vide) {
        usdc = IERC20(_usdc);
        vide = IERC20(_vide);
    }

    function deposit(uint256 amount) external onlyOwner {
        require(usdc.transferFrom(msg.sender, address(this), amount), "Transfer failed");
        balances[address(this)] += amount;
    }

    function claim(address to, uint256 amount) external onlyOwner {
        require(balances[address(this)] >= amount, "Insufficient funds");
        balances[address(this)] -= amount;
        usdc.approve(address(vide), amount);
        // swap logic off-chain via edge functions
        // here just transfer USDC
        require(usdc.transfer(to, amount), "Transfer failed");
    }
}
