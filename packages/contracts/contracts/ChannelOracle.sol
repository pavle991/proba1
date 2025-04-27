// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract ChannelOracle {
    mapping(address => uint256) public price;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function updatePrice(address channel, uint256 newPrice) external {
        require(msg.sender == owner, "Not authorized");
        price[channel] = newPrice;
    }
}
