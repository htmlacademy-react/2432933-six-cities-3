import { FormEvent, ChangeEvent } from 'react';
import { useForm } from '../../hooks/use-form/use-form';
import { loginAction } from '../../services/api-actions';
import { useAppDispatch } from '../../hooks/use-app-redux/use-app-redux';


const FormRegistration = () => {
  const { values, setFieldValue } = useForm({email: '', password: ''});

  const dispatch = useAppDispatch();

  const handlesSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(loginAction(values));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'email' || name === 'password') {
      setFieldValue(name, value);
    }
  };

  return (
    <form className="login__form form" action="#" method="post" onSubmit={handlesSubmit} >
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className="login__input form__input"
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />
      </div>

      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
};

export default FormRegistration;
