import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import { ReactNode } from 'react';
import { useAppSelector } from '../../hooks/use-app-redux/use-app-redux';

type PrivateRouteProps = {
  children : ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { authStatus } = useAppSelector((state) => state.authStatus);
  return authStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />;
};

export default PrivateRoute;

