import {createAsyncThunk} from '@reduxjs/toolkit';
import { AppDispatch, State } from '../hooks/use-app-redux/use-app-redux';
import { loadOffers } from '../store/offers/offers-reducer';
import { TypePlace } from '../types/place-type/place-type';
import { AxiosInstance } from 'axios';

import { setLoadStatusOffers } from '../store/offers/offers-reducer';
import { saveToken, dropToken} from './token';

type ThunkApiConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

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
} // уберу в отдельный types. пока для удобства

const fetchOffers = createAsyncThunk<void, undefined, ThunkApiConfig >(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoadStatusOffers(true));
    const {data} = await api.get<TypePlace[]>('/offers');
    dispatch(setLoadStatusOffers(false));
    dispatch(loadOffers(data));
  },
);

const checkAuthAction = createAsyncThunk<User, undefined, ThunkApiConfig>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<User>('/login'); /*тут при check, если пользователь не овтаризован то в консоли 401
                                                    GET https://15.design.htmlacademy.pro/six-cities/login 401 (Unauthorized)
                                                    try catch убрал пока не применяю
    */
    return data;
  },
);


const loginAction = createAsyncThunk<User, AuthData, ThunkApiConfig>(
  'user/loginAction',
  async ({email: email, password}, {extra: api}) => {
    const { data } = await api.post<User>('/login', { email, password });

    saveToken(data.token);
    return data ;
  }
);

const logoutAction = createAsyncThunk<void, undefined, ThunkApiConfig>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete('/logout');
    dropToken();
  },
);

export {fetchOffers, checkAuthAction, loginAction, logoutAction};
