import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from '../components/Home/HomePage';
import AboutPage from '../components/About/AboutPage';

const Router = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/about' component={AboutPage} />
        </Switch>
    </main>
);

export default Router;
