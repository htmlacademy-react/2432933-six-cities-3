import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../const';
import { ReactNode } from 'react';

type PrivateRouteProps = {
  authorizationStatus : AuthorizationStatus;
  children : ReactNode;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { authorizationStatus, children } = props;
  return authorizationStatus === AuthorizationStatus.NoAuth ? children : <Navigate to={AppRoute.Login} />;
};

export default PrivateRoute;

