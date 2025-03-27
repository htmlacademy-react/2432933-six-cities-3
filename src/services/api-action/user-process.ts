import { createAsyncThunk } from '@reduxjs/toolkit';
import { saveToken, dropToken } from '../token';
import { routeList } from './route-list';
import { ThunkApiConfig } from './api-config';
import { getFavoriteAction } from './favorite-action';


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

const checkAuthAction = createAsyncThunk<User, undefined, ThunkApiConfig>(
  'user/checkAuth',
  async (_arg, {dispatch ,extra: api}) => {
    const {data} = await api.get<User>(routeList.LOGIN);
    dispatch(getFavoriteAction());
    return data;
  },
);


const loginAction = createAsyncThunk<User, AuthData, ThunkApiConfig>(
  'user/loginAction',
  async ({email, password}, {extra: api}) => {
    const { data } = await api.post<User>(routeList.LOGIN, { email, password });

    saveToken(data.token);
    return data ;
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

