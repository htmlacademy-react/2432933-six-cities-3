import FormLogin from '../../components/login/form-login';
import LocationsCurrent from '../../components/login/locations-current';

const MainLogin = () => (
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

export default MainLogin;

