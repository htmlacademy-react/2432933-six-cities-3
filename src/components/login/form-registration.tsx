import { FormEvent, ChangeEvent, } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useInputValues } from '../../hooks/use-form/use-form';
import { loginAction } from '../../services/api-actions';
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
  const { register, setError, clearErrors, formState: { errors, isValid } } = useForm<FormValid>({mode: 'onBlur', });

  const { values, setFieldValue } = useInputValues({email: '', password: ''});

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const result = await dispatch(loginAction(values));
    if(!loginAction.fulfilled.match(result)){
      setError('root.serverError', {
        type: 'manual',
        message: errorMessage.server,
      });

      setTimeout(() => {
        clearErrors('root.serverError');
      }, 3000);

      return;
    }
    navigate(AppRoute.Main);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'email' || name === 'password') {
      setFieldValue(name, value);
    }
  };

  return (
    <form className="login__form form" action="#" method="post" onSubmit={(e) => void handleSubmit(e)} > {/* костыль ?  */}
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
          onChange={handleChange}
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
          onChange={handleChange}
        />
        <ErrorMessage message={errors.password?.message} />
      </div>
      <button className="login__submit form__submit button" type="submit" disabled={!isValid}>Sign in</button>
      {errors.root?.serverError && <ErrorMessage message={errors.root.serverError.message} />}
    </form>
  );
};

export default FormRegistration;
