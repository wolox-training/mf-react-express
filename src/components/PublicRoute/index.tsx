import React from 'react';
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router';

interface Props extends RouteProps {
  authenticated?: boolean;
  component: React.ComponentType<RouteComponentProps>;
  restricted?: boolean;
}

function PublicRoute({ authenticated, component: Component, restricted = false, ...rest }: Props) {
  return (
    <Route
      {...rest}
      render={props => {
        if (restricted && authenticated) {
          return <Redirect to="/home" />;
        }

        return <Component {...props} />;
      }}
    />
  );
}

export default PublicRoute;
