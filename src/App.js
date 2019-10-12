import React, {useState} from 'react';
import './App.css';
import CalcView from "./calcView/calcView";
import Context from './context';

function App() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [operation, setOperation] = useState('+');

    return (
        <div className="App">
            <Context.Provider value={{
                a: a,
                setA: setA,
                b: b,
                setB: setB,
                operation: operation,
                setOperation: setOperation,
            }}>
                <CalcView/>
                <p>Value: {a}</p>
            </Context.Provider>
        </div>
    );
}

export default App;
