import React from 'react';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import { HomePage, CartPage } from '../pages';

import './app.css'

const App = () => {
    return (<div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/cart-page">CP</Link>
            </li>
        </ul>
        <Switch>
            <Route
                path="/"
                component={HomePage}
                exact />
            <Route
                path="/cart-page"
                component={CartPage} />
        </Switch>
    </div>)
}

export default App;