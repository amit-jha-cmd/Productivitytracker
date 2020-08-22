import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './core/Home'
import Login from './user/Login'
import Signup from './user/Signup'
import Log from './user/Log'
import LogEntries from './user/LogEntries'
import { AuthProvider } from './Auth';
import userHome from './user/userHome';
import PrivateRoute from "./PrivateRoute";
const Routes = () => {
    return (
        <AuthProvider>
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/log" component={Log} />
            <Route exact path="/logentries" component={LogEntries} />
            <PrivateRoute exact path="/userhome" component={userHome} />
            </Switch>
        </BrowserRouter>
        </AuthProvider>
    );
};
export default Routes;