import { createAsyncThunk } from '@reduxjs/toolkit';
import { saveToken, dropToken } from '../token';
import { routeList } from './route-list';
import { ThunkApiConfig } from './api-config';
import { getFavoriteAction } from './favorite-action';
import { AxiosError } from 'axios';
import { ApiError } from './api-config';


type AuthData = {
  email: string;
  password: string;
}

type User = {
  id: string;
  email: string;
  token: string;
  name: string;
  avatarUrl: string;
  isPro: boolean;
}


const loginErrorAction = (err: unknown) => {
  const error = err as AxiosError<ApiError>;
  const status = error.response?.status ?? 500;

  const errorMap: Record<number, ApiError> = {
    401: { message: 'Не авторизован'},
    404: { message: 'Ошибка Запроса. Попробуйте позже', },
    500: { message: 'Ошибка сервера' }
  };
  return errorMap[status];
};

const checkAuthAction = createAsyncThunk<User, undefined, ThunkApiConfig>(
  'user/checkAuth',
  async (_arg, {dispatch ,extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<User>(routeList.LOGIN);
      dispatch(getFavoriteAction());
      return data;
    } catch (error) {
      return rejectWithValue(loginErrorAction(error));
    }

  },
);


const loginAction = createAsyncThunk<User, AuthData, ThunkApiConfig>(
  'user/loginAction',
  async ({email, password}, {extra: api, rejectWithValue}) => {
    try {
      const { data } = await api.post<User>(routeList.LOGIN, { email, password });
      saveToken(data.token);
      return data ;
    } catch (error) {
      return rejectWithValue(loginErrorAction(error));
    }
  }
);

const logoutAction = createAsyncThunk<void, undefined, ThunkApiConfig>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(routeList.LOG_OUT);
    dropToken();
  },
);

export { checkAuthAction, loginAction, logoutAction};

