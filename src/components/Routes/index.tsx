import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignUp from 'screens/SignUp';
import Login from 'screens/Login';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/sign_up" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
