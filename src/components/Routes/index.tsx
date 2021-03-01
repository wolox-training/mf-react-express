import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import SignUp from 'screens/SignUp';
import Login from 'screens/Login';
import Home from 'screens/Home';
import LocalStorageService from 'services/LocalStorageService';
import withProvider from 'components/ProviderWrapper';
import { Context, reducer, INITIAL_STATE, useSelector } from 'contexts/reducer';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

function Routes() {
  const token = useSelector(state => state.accessToken) || LocalStorageService.getValue('accessToken');

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute restricted component={Login} authenticated={token} path="/" exact />
        <PublicRoute component={SignUp} authenticated={token} path="/sign_up" exact />
        <PrivateRoute component={Home} authenticated={token} path="/home" exact />
      </Switch>
    </BrowserRouter>
  );
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export default withProvider({ Context, reducer, initialState: INITIAL_STATE })(Routes);
