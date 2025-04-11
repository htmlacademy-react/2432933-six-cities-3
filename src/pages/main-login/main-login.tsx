import { useEffect } from 'react';
import FormLogin from '../../components/login/form-login';
import LocationsCurrent from '../../components/login/locations-current';
import { useAppSelector, useAppDispatch } from '../../hooks/use-app-redux/use-app-redux';
import { AppRoute } from '../../components/const';
import {redirectToRoute} from '../../services/api-action/user-process';

const MainLogin = () => {
  const isAuth = useAppSelector((state) => state.authStatus.isAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuth) {
      dispatch(redirectToRoute(AppRoute.Main));
    }
  }, [isAuth, dispatch, ]);

  return(
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <FormLogin />
        </section>
        <LocationsCurrent />
      </div>
    </main>
  );
};
export default MainLogin;

