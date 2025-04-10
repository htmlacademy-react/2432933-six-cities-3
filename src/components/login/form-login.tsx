import { useForm } from 'react-hook-form';
import { loginAction } from '../../services/api-action/user-process';
import { useAppDispatch, } from '../../hooks/use-app-redux/use-app-redux';


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

type ErrorMessageProps = {
  message?: string | null;
};

const FormError = ({message}: ErrorMessageProps) => {
  if(!message){
    return;
  }
  return <p className='error-message'> { message } </p>;
};

const FormLogin = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormValid>({mode: 'onBlur', });
  const dispatch = useAppDispatch();

  const onSubmit = (data: FormValid) => {
    dispatch(loginAction(data));
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
        <FormError message={errors.email?.message} />
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
              value: /^(?=.*)(?=.*\d).+$/,
              message: errorMessage.password
            },
            minLength: {
              value: 4,
              message: errorMessage.minLength
            }
          })}
        />
        <FormError message={errors.password?.message} />
      </div>
      <button className="login__submit form__submit button" type="submit" disabled={!isValid}>Sign in</button>
    </form>
  );
};

export default FormLogin;
