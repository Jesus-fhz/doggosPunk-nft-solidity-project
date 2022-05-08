import React from "react";

const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean([0]);

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
            {/* Left Side */}
            <div>Facebook</div>
            <div>Facebook</div>
            <div>Facebook</div>
            {/* Right Side */}
            <div>About</div>
            <div>Mint</div>
            <div>Team</div>
            {/* Connect Button */}
            {isConnected ? (
                <p>Connected</p>
            ) : (
                <button onClick=''>Connect</button>
            )}
        </>
    );
};

export default NavBar;
