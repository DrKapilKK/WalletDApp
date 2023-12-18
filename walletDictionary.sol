// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract WalletDictionary {
    address public owner;
    mapping(address => bool) private walletDictionary;

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner");
        _;
    }

    event WalletAddressAdded(address indexed _address);

    constructor() {
        owner = msg.sender;
    }

    // Add/save the wallet address.
    function addWallet(address _address) external onlyOwner {
        require(_address != address(0), "Wallet address must be non-zero.");
        require(!walletDictionary[_address], "Wallet already listed.");

        walletDictionary[_address] = true;
        emit WalletAddressAdded(_address);
    }

    //Check given address is listed or not.
    function iswalletListed(address _address) external view returns (bool) {
        return walletDictionary[_address];
    }
}
