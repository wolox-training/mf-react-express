import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import SignUp from 'screens/SignUp';
import Login from 'screens/Login';
import Home from 'screens/Home';

import paths from './paths';

function Routes() {
  const token = localStorage.getItem('accessToken');

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={paths.login} component={Login} />
        <Route path={paths.signUp} component={SignUp} />
        <Route path={paths.home} render={() => (token ? <Home /> : <Redirect to={paths.login} />)} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
