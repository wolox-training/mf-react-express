import React from 'react';
import { Route, RouteComponentProps, RouteProps } from 'react-router';

import { useSelector } from 'contexts/reducer';
import Home from 'screens/Home';
import LocalStorageService from 'services/LocalStorageService';

interface Props extends RouteProps {
  component: React.ComponentType<RouteComponentProps>;
  restricted?: boolean;
}

function PublicRoute({ component: Component, restricted = false, ...rest }: Props) {
  const token = useSelector(state => state.accessToken) || LocalStorageService.getValue('accessToken');

  return (
    <Route
      {...rest}
      render={props => {
        if (restricted && token) {
          return <Home />;
        }

        return <Component {...props} />;
      }}
    />
  );
}

export default PublicRoute;
