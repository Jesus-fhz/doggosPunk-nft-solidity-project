import { useState } from "react";
import Mint from "./components/Mint";
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
    const [accounts, setAccounts] = useState([]);

    return (
        <>
            <div className='overlay'>
                <div className='App'>
                    <NavBar accounts={accounts} setAccounts={setAccounts} />
                    <Mint accounts={accounts} setAccounts={setAccounts} />
                </div>
            </div>
            <div className='background'></div>
        </>
    );
}

export default App;
