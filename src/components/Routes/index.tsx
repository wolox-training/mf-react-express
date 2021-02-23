import React from 'react';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import SignUp from 'screens/SignUp';
import Login from 'screens/Login';
import Home from 'screens/Home';

function Routes() {
  const token = localStorage.getItem('accessToken');
  const login = token !== null;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/sign_up" component={SignUp} />
        <Route path="/home" render={() => (login ? <Home /> : <Redirect to="/" />)} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
