// navigaton //
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';


import Home from './pages/Home';
import UserRegister from './pages/UserRegister';
import Login from './pages/Login';
import Products from './pages/Products';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={UserRegister} path="/userRegister"/>
            <Route component={Login} path="/login"/>
            <Route component={Products} path="/Products"/>
        </BrowserRouter>
    );
}


export default Routes;