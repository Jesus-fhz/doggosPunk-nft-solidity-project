// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

//STANDART MINTING CONTRACT - RELIABLE AND SECURE
//We will have access to their functionality 
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

//Contract functions where only the owner can use
import '@openzeppelin/contracts/access/ownable.sol';

//Our contract will inherit from ERC721 and Ownable.
contract MintNft is ERC721, Ownable {
    //Storage variables //uint256 => 256 bits which converts to 32 Bytes.
    //Price Minting
    uint256 public mintPrice;
    //Current Supply
    uint256 public totalSupply;
    //Total Supply
    uint256 public maxSupply;
    //Limit of nft for wallets
    uint256 public maxPerWallet;
    //Basic bool variable to check when an user is able to mint
    bool public isPublicMintEnable;
    //IE: if you are using open sea, the uri will determinate where the image is located.
    string internal baseTokenUri; 
    //To withdraw money that goes into the contract
    address payable public withdrawWallet;
    //This will allows to keep track of how many nfts each wallet has minted
    mapping(address => uint256)public walletMints;


    //Constructor Function run at the beginning of the contract creation: everytime you deploy
    constructor() payable ERC721("DogPunks", "DP"){
        //Initializing variables. Doing it here isntead at the top makes it slightly cheaper.
        mintPrice = 0.02 ether;
        totalSupply = 0;
        maxSupply = 1000;
        maxPerWallet = 3;
    }
    //OnlyOwner can call this function(Contract owner)
    //The Calldata is a read-only byte-addressable space where the data parameter of a transaction or call is held. 
    function setIsPublicMintEnabled(bool isPublicMintedEnable_) external onlyOwner{
        isPublicMintEnable = isPublicMintedEnable_;
    }
    
    function setBaseTokenUri(string calldata baseTokenUri_) external onlyOwner{
        baseTokenUri = baseTokenUri_;
    }

    //Since we are setting our setBaseTokenUri, we need to override the tokenURI of the ERC721 contract
    //So it can knows from where get the image.
    function tokenURI(uint256 tokenId_) public view override returns (string memory){
        //We are taking the uri thaat set and adding the token id at the beggining of it
        //And we convert it to .json, so we can grab any single uri of the images to diplay it IE: OpenSea
        require(_exists(tokenId_), 'Token does not exist');
        return string(abi.encodePacked(baseTokenUri, Strings.toString(tokenId_),".json"));
    }

    function withdraw() external onlyOwner {
        //We are withdrawing funds from the current wallet that is miting to the 
        //address previous spcified.
        (bool success, ) = withdrawWallet.call{ value: address(this).balance }('');
        //Fail check in case !success
        require(success, 'withdraw failed');
    }

    function mint(uint256  quantity_) public payable {
        
    }
}