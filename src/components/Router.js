import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../App';
import Home from './Home';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/recipe/search" exact component={App} />
        </Switch>
    </BrowserRouter>
);

export default Router;