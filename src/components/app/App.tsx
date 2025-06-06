import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/layout';
import MainPage from '../../pages/main-page/main-page';
import MainLogin from '../../pages/main-login/main-login';
import NotFound from '../../pages/no-main-page/no-main-page';
import PrivateRoute from '../private-route/private-route';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer-page';
import { AppRoute, AuthorizationStatus, } from '../const';
import { checkAuthAction } from '../../services/api-action/user-process-action/user-process.action';
import { useAppDispatch, useAppSelector, } from '../../hooks/use-app-redux/use-app-redux';
import { useEffect } from 'react';
import PreLoading from '../../pages/pre-loading/pre-loading';
import { getOffers } from '../../services/api-action/offers-action/offers.action';

const App = () => {
  const dispatch = useAppDispatch();
  const { authStatus } = useAppSelector((state) => state.authStatus);

  useEffect(() => {
    dispatch(getOffers());
    dispatch(checkAuthAction());
  }, [dispatch]);

  if(authStatus === AuthorizationStatus.Unknown){
    return <PreLoading />;
  }

  return (
    <Routes>
      <Route path={AppRoute.Main} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={AppRoute.Login} element={<MainLogin />} />
        <Route path={AppRoute.Favorites} element={ <PrivateRoute> <Favorites /> </PrivateRoute> } />
        <Route path={AppRoute.Offer} element={<Offer />} />
      </Route>
      <Route path={AppRoute.NotFound} element={<NotFound />} />
    </Routes>
  );
};

export default App;
