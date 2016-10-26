import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import AddUpdate from './components/add_update';
import HomeContainer from './components/home_container';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={HomeContainer} />
        <Route path="addUpdate/:id" component={AddUpdate} />
    </Route>
);