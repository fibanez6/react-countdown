import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import App from './components/app.js';
import Weather from './components/weather.js';
import history from './history';

const Routes = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Switch>
                        <Route path="/" exact component={Weather} />
                        <Route path="/countdown" exact component={App} />
                        <Route path="/weather" exact component={Weather} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default Routes;

