import React from 'react';
import logo from './logo.svg';
import {Main} from './features/main/main';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Main/>
            </header>
        </div>
    );
}

export default App;
