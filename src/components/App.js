import React, {Component} from 'react';
import Countdown from './Countdown';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Countdown date="2019-11-08T20:10:00" title="Flight to Japan (11th Nov, at 20:10 UTC time):"/>
                <Countdown date="2019-12-13T21:35:00" title="Flight to Budapest (13th Nov, at 21:35 UTC time):"/>
                <Countdown date="2019-12-22T07:35:00" title="Flight to Madrid (22nd Nov, at 07:35 UTC time):"/>
            </div>
        );
    }
}

export default App;

