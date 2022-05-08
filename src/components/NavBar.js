import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import doggoPunk from "../assets/doggoPunk.gif";

const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);
    console.log(window.screen);
    async function connectAccount() {
        if (window.ethereum) {
            //Access all accounts from MM Wallet
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
        <>
            <Flex justify='space-between' align='center' padding='30px'>
                <Flex justify='space-between' align='center' width='40%' padding='0 50px'>
                    <Image
                        src={doggoPunk}
                        boxSize='100px'
                        borderRadius='50%'
                        boxShadow='rgba(50, 50, 93, 0.5) 0px 13px 27px -5px, rgba(0, 0, 0, 0.8) 0px 8px 16px -8px;'
                    />
                </Flex>
                <Flex justify='space-around' align='center' width='20%' padding='30px'>
                    <Box margin='0 15px'>
                        <Text fontSize='25px' textShadow='0 5px #000'>
                            Mint
                        </Text>
                    </Box>
                    {isConnected ? (
                        <Box margin='0 15px'>Connected</Box>
                    ) : (
                        <Button
                            onClick={connectAccount}
                            backgroundColor='rgba(213, 36, 94, 0.56)'
                            borderRadius='5px'
                            boxShadow='0px 2px 2px 1px #0F0F0f'
                            color='#FFFFFF'
                            fontFamily='inherit'
                            cursor='pointer'
                            margin='0 15px'
                            padding='15px'
                            textShadow='0 3px #000'>
                            Connect
                        </Button>
                        // <button onClick={connectAccount}>Connect</button>
                    )}
                </Flex>
            </Flex>
        </>
    );
};

export default NavBar;
