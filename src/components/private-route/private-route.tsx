import { Navigate } from 'react-router-dom';
import { AppRoute } from '../const';
import { ReactNode } from 'react';
import { useAppSelector } from '../../hooks/use-app-redux/use-app-redux';

type PrivateRouteProps = {
  children : ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuth = useAppSelector((state) => state.authStatus.isAuth);
  return isAuth ? children : <Navigate to={AppRoute.Login} />;
};

export default PrivateRoute;

