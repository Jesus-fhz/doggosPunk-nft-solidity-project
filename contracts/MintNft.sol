// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

//STANDART MINTING CONTRACT - RELIABLE AND SECURE
//We will have access to their functionality 
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

//Contract functions where only the owner can use
import '@openzeppelin/contracts/access/ownable.sol';

//Our contract will inherit from ERC721 and Ownable.
contract MintNft is ERC721, Ownable{

    //Storage variables //uint256 => 32 Bytes
    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
}