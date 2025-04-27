// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract MinimalForwarder {
    struct ForwardRequest {
        address from;
        address to;
        uint256 value;
        uint256 gas;
        uint256 nonce;
        bytes data;
    }

    mapping(address => uint256) public nonces;

    function getNonce(address from) public view returns (uint256) {
        return nonces[from];
    }

    function execute(ForwardRequest calldata req, bytes calldata signature) public payable returns (bool, bytes memory) {
        // TODO: implement EIP-2771 verification
        (bool success, bytes memory returndata) = req.to.call{gas: req.gas, value: req.value}(req.data);
        require(success, 'MinimalForwarder: call failed');
        nonces[req.from]++;
        return (success, returndata);
    }
}
