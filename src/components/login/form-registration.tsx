import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { loginAction } from '../../services/api-action/user-process';
import { useAppDispatch, } from '../../hooks/use-app-redux/use-app-redux';
import { AppRoute } from '../const';
import ErrorMessage from '../error-message';

type FormValid = {
  password: string;
  email:string;
}

const errorMessage = {
  password: 'Пароль состоит минимум из одной буквы и цифры на Английском языке',
  email: 'Проверьте правильность введной почты',
  required: 'Это обязательное поле',
  minLength: 'Длина строки должна быть не меньше 4 символов',
  server: 'Ошибка при входе. Проверьте email и пароль.'
};


const FormRegistration = () => {
  const { register, setError, clearErrors, handleSubmit, formState: { errors, isValid } } = useForm<FormValid>({mode: 'onBlur', });

  const showError = () => {
    setError('root.serverError', {
      type: 'manual',
      message: errorMessage.server,
    });
    setTimeout(() => clearErrors('root.serverError'), 3000);
  };

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = (data: FormValid) => {

    dispatch(loginAction(data))
      .unwrap()
      .then(() => navigate(AppRoute.Main))
      .catch(() => showError());
  };

  return (
    <form className="login__form form" action="#" method="post" onSubmit={(event) => void handleSubmit(onSubmit)(event)} >
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className="login__input form__input"
          type="email"
          placeholder="Email"
          {...register('email', {
            required: errorMessage.required,
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: errorMessage.email
            },
          }) }
        />
        <ErrorMessage message={errors.email?.message} />
      </div>

      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className="login__input form__input"
          type="password"
          placeholder="Password"
          {...register('password', {
            required: errorMessage.required,
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d).+$/,
              message: errorMessage.password
            },
            minLength: {
              value: 4,
              message: errorMessage.minLength
            }
          })}
        />
        <ErrorMessage message={errors.password?.message} />
      </div>
      <button className="login__submit form__submit button" type="submit" disabled={!isValid}>Sign in</button>
      {errors.root?.serverError && <ErrorMessage message={errors.root.serverError.message} />}
    </form>
  );
};

export default FormRegistration;
