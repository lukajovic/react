import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter, Route, Switch} from "react-router-dom";
import {About} from './app/About';

ReactDOM.render(

    <HashRouter>
        <Switch>
            <Route exact path="/about" component={About}/>>
            <Route path='/' component={App} />
        </Switch>
    </HashRouter>, document.getElementById('root')
);
registerServiceWorker();
