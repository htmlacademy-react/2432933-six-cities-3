import { createAsyncThunk, } from '@reduxjs/toolkit';
import { ThunkApiConfig } from './api-config';
import { TypePlace } from '../../types/place-type/place-type';
import { routeList } from './route-list';
import { handleApiError } from '../handle-api-error';

const errorMap = {
  OFFERS: 'Ошибка получения списка городов'
};

const getOffers = createAsyncThunk<TypePlace[], undefined, ThunkApiConfig >(
  'data/getOffers',
  async (_arg, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<TypePlace[]>(routeList.OFFERS);
      return data;
    } catch (error) {
      return rejectWithValue(handleApiError(error, errorMap.OFFERS));
    }
  },
);

export { getOffers };
