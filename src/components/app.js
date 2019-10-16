import React, {Component} from 'react';
import CountdownList from '../containers/countdown_list';
import './app.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <CountdownList/>
            </div>
        );
    }
}

export default App;

