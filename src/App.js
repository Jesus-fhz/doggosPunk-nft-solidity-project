import { useState } from "react";
import Mint from "./components/Mint";
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
    const [accounts, setAccouts] = useState([]);

    return (
        <div className='App'>
            <NavBar accounts={accounts} setAccouts={setAccouts} />
            <Mint accounts={accounts} setAccouts={setAccouts} />
        </div>
    );
}

export default App;
