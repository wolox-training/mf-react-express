import React from 'react';
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router';

interface Props extends RouteProps {
  authenticated?: boolean;
  component: React.ComponentType<RouteComponentProps>;
}

function PrivateRoute({ authenticated, component: Component, ...rest }: Props) {
  return (
    <Route
      {...rest}
      render={props => {
        if (authenticated) {
          return <Component {...props} />;
        }
        return <Redirect to="/" />;
      }}
    />
  );
}

export default PrivateRoute;
