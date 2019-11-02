import React, {} from 'react';
import './App.css';
import Hello from "./hello/hello";

function App() {
    function jsonCopy(src) {
        return JSON.parse(JSON.stringify(src));
    }

    return (
        <div className="App">

            <Hello/>

        </div>
    )
        ;
}

export default App;
