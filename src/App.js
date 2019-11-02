import React, {} from 'react';
import './App.css';
import store from './store/store';
import {Provider} from 'react-redux';
import Header from "./components/header/header";
import Body from './components/userForm/userForm';

function App() {
    return (
        <div className="App">
            <Provider store={store}>

                <Header />
                <Body />
            </Provider>
        </div>
    )
}

export default App;
