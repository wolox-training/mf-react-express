import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CustomSuspense from 'components/Suspense';
import SignUp from 'screens/SignUp';
import Login from 'screens/Login';

function Routes() {
  return (
    <BrowserRouter>
      <CustomSuspense>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/sign_up" component={SignUp} />
        </Switch>
      </CustomSuspense>
    </BrowserRouter>
  );
}

export default Routes;
