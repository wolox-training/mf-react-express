import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import SignUp from 'screens/SignUp';
import Login from 'screens/Login';
import Home from 'screens/Home';
import withProvider from 'components/ProviderWrapper';
import { Context, reducer, INITIAL_STATE } from 'contexts/reducer';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

import paths from './paths';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute restricted component={Login} path={paths.login} exact />
        <PublicRoute component={SignUp} path={paths.signUp} exact />
        <PrivateRoute path={paths.home} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export default withProvider({ Context, reducer, initialState: INITIAL_STATE })(Routes);
