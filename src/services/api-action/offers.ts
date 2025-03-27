import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from './api-config';
import { TypePlace } from '../../types/place-type/place-type';
import { routeList } from './route-list';

const getOffers = createAsyncThunk<TypePlace[], undefined, ThunkApiConfig >(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TypePlace[]>(routeList.OFFERS);
    return data;
  },
);

export { getOffers };
