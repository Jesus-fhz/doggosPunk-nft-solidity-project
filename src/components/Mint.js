import React, { useState } from "react";
import { ethers, BigNumber } from "ethers";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import doggosPunk from "../DoggosPunkAbi/abi.json";

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
const Mint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    //Handling mint
    async function mintDoggoPunk() {
        if (window.ethereum) {
            //Connecting to the BC
            //Initial Set up
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            //Run Contract
            const contract = new ethers.Contract(contractAddress, doggosPunk.abi, signer);
            try {
                //Await contract
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.001 * mintAmount).toString()),
                });
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    }

    const decreaseMintAmount = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };
    const increaseMintAmount = () => {
        if (mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    };

    return (
        <Flex justify='center' align='center' height='calc(100vh - 250px)' paddingBottom='50px'>
            <Box width='100%' maxWidth='650px'>
                <div>
                    <Text fontSize='45px' textShadow='0 5px #000'>
                        Doggos Punks{" "}
                    </Text>
                    <Text
                        fontSize='30px'
                        letterSpacing='-1px'
                        textShadow='0 2px 2px #000'
                        fontFamily='VT323'>
                        A simple website to mint a NFT in the Ethereum rinkeby test network. I used
                        Ethers.js to interact with Ethereum Blockchain and Solidity to build the
                        smart-contract.
                    </Text>
                    {isConnected ? (
                        <div>
                            <div>
                                <Button
                                    onClick={decreaseMintAmount}
                                    backgroundColor='rgba(213, 36, 94, 0.56)'
                                    borderRadius='5px'
                                    boxShadow='0px 2px 2px 1px #0F0F0f'
                                    color='#FFFFFF'
                                    fontFamily='inherit'
                                    cursor='pointer'
                                    margin='0 15px'
                                    padding='15px'
                                    textShadow='0 3px #000'>
                                    -
                                </Button>
                                <Input
                                    value={mintAmount}
                                    readOnly
                                    fontFamily='inherit'
                                    padding='15px'
                                    outline='none'
                                    borderRadius='5px'
                                    textAlign='center'
                                    width='200px'
                                />
                                <Button
                                    onClick={increaseMintAmount}
                                    backgroundColor='rgba(213, 36, 94, 0.56)'
                                    borderRadius='5px'
                                    boxShadow='0px 2px 2px 1px #0F0F0f'
                                    color='#FFFFFF'
                                    fontFamily='inherit'
                                    cursor='pointer'
                                    margin='0 15px'
                                    padding='15px'
                                    textShadow='0 3px #000'>
                                    +
                                </Button>
                            </div>
                            <Button
                                onClick={mintDoggoPunk}
                                backgroundColor='rgba(102, 6, 51, 1);'
                                borderRadius='5px'
                                boxShadow='0px 2px 2px 1px #0F0F0f'
                                color='#FFFFFF'
                                fontFamily='inherit'
                                cursor='pointer'
                                margin='15px 15px'
                                padding='15px'
                                textShadow='0 3px #000'>
                                Mint a DoggoPunk
                            </Button>
                        </div>
                    ) : (
                        <Text fontSize='45px' textShadow='0 2px 2px #000' fontFamily='VT323'>
                            Connect your wallet to mint!
                        </Text>
                    )}
                </div>
            </Box>
        </Flex>
    );
};

export default Mint;
