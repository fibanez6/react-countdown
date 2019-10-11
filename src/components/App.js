import React, { Component } from 'react';
import Countdown from './Countdown.js';
import './App.css';

class App extends Component {
    render() {
        const date = "2019-11-08T20:10:00"
        return (
            <div className="App">
                <div className="ui container" style={{ marginTop: '10px' }}>
                    <h3 className="title">Flight to Japan (11th Nov, at 20:10 UTC time):</h3>
                    <Countdown date={date} />
                </div>
            </div>
        );
    }
}

export default App;

