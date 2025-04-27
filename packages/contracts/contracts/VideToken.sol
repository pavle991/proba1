// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract VideToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Vide Token", "VIDE") {
        _mint(msg.sender, initialSupply);
    }
}
