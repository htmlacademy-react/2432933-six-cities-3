import { createAsyncThunk } from '@reduxjs/toolkit';
import { saveToken, dropToken } from '../token';
import { routeList } from './route-list';
import { ThunkApiConfig } from './api-config';
import { getFavoriteAction } from './favorite-action';
import { handleApiError } from '../handle-api-error';


import {createAction} from '@reduxjs/toolkit';
import { AppRoute } from '../../components/const';

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

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

const errorMessage = {
  404: 'Ошибка Запроса. Попробуйте позже'
};

const checkAuthAction = createAsyncThunk<User, undefined, ThunkApiConfig>(
  'user/checkAuth',
  async (_arg, {dispatch ,extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<User>(routeList.LOGIN);
      dispatch(getFavoriteAction());
      return data;
    } catch (error) {
      return rejectWithValue(handleApiError(error, errorMessage[404]));
    }
  },
);


const loginAction = createAsyncThunk<User, AuthData, ThunkApiConfig>(
  'user/loginAction',
  async ({email, password}, {dispatch, extra: api, rejectWithValue}) => {
    try {
      const { data } = await api.post<User>(routeList.LOGIN, { email, password });
      saveToken(data.token);
      dispatch(redirectToRoute(AppRoute.Main));
      return data ;
    } catch (error) {
      return rejectWithValue(handleApiError(error, errorMessage[404]));
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

