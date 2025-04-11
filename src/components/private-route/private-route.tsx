import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import { ReactNode } from 'react';
import { useAppSelector } from '../../hooks/use-app-redux/use-app-redux';
import PreLoading from '../../pages/pre-loading/pre-loading';

type PrivateRouteProps = {
  children : ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const {isAuth, auth} = useAppSelector((state) => state.authStatus);

  return auth === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />;
};

export default PrivateRoute;

