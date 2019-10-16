import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import App from './components/app.js';
import history from './history';

const Routes = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Switch>
                        <Route path="/" exact component={App} />
                        <Route path="/countdown" exact component={App} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default Routes;

