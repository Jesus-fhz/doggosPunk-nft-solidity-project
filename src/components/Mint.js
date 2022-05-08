import React, { useState } from "react";
import { ethers, BigNumber } from "ethers";
import doggosPunk from "../DoggosPunkAbi/abi.json";

const contractAddress = "0x5b18a14318fb834c619059a7743f2c64fc80b0f5";
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
                const response = await contract.mint(BigNumber.from(mintAmount));
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
        <div>
            <h1>Doggos Punks</h1>
            <p>Mint DoggosPunk :) </p>
            {isConnected ? (
                <div>
                    <div>
                        <button onClick={decreaseMintAmount}>-</button>
                        <input type='text' value={mintAmount} />
                        <button onClick={increaseMintAmount}>+</button>
                    </div>
                    <button onClick={mintDoggoPunk}>Mint a DoggoPunk</button>
                </div>
            ) : (
                <p>Connect your wallet to min!</p>
            )}
        </div>
    );
};

export default Mint;
