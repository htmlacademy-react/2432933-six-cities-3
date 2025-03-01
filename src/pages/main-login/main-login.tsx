import FormRegistration from '../../components/login/form-registration';
import LocationsCurrent from '../../components/login/locations-current';

const MainLogin = () => (
  <main className="page__main page__main--login">
    <div className="page__login-container container">
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <FormRegistration />
      </section>
      <LocationsCurrent />
    </div>
  </main>
);

export default MainLogin;

