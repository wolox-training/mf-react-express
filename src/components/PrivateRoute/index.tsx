import React from 'react';
import { Route, RouteComponentProps, RouteProps } from 'react-router';

import LocalStorageService from 'services/LocalStorageService';
import Login from 'screens/Login';

interface Props extends RouteProps {
  authenticated?: boolean;
  component: React.ComponentType<RouteComponentProps>;
}

function PrivateRoute({ component: Component, ...rest }: Props) {
  const token = LocalStorageService.getValue('accessToken');
  return (
    <Route
      {...rest}
      render={props => {
        if (token) {
          return <Component {...props} />;
        }
        return <Login />;
      }}
    />
  );
}

export default PrivateRoute;
