import React from "react";
import {Router, Route} from "react-router";

import App from './components/app/index';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App}/>
    </Router>
);

export default Routes;