import { createAsyncThunk, } from '@reduxjs/toolkit';
import { ThunkApiConfig } from '../api-config';
import { TypePlace } from '../../../types/place-type/place-type';
import { routeList } from '../route-list';
import { handleApiError} from '../../../utils/handle-api-error';

const errorOffersMap = {
  404: 'Ошибка получения списка городов',
  400: 'Не коректный запрос',
};

const getOffers = createAsyncThunk<TypePlace[], undefined, ThunkApiConfig >(
  'data/getOffers',
  async (_arg, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<TypePlace[]>(routeList.OFFERS);
      return data;
    } catch (error) {
      return rejectWithValue(handleApiError(error, errorOffersMap));
    }
  },
);

export { getOffers };
