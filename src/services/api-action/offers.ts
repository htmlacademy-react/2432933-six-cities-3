import { createAsyncThunk, } from '@reduxjs/toolkit';
import { ApiError, ThunkApiConfig } from './api-config';
import { TypePlace } from '../../types/place-type/place-type';
import { routeList } from './route-list';
import { AxiosError } from 'axios';


const errorMap: Record<number, ApiError> = {
  401: { message: 'Не авторизован'},
  404: { message: 'Ошибка Запроса. Попробуйте позже', },
  500: { message: 'Ошибка сервера' }
};

const loginErrorAction = (err: unknown) => {
  const error = err as AxiosError<ApiError>;
  const status = error.response?.status ?? 500;

  return errorMap[status];
};

const getOffers = createAsyncThunk<TypePlace[], undefined, ThunkApiConfig >(
  'data/fetchOffers',
  async (_arg, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<TypePlace[]>(routeList.OFFERS);
      return data;
    } catch (error) {
      return rejectWithValue(loginErrorAction(error));
    }

  },
);

export { getOffers };
