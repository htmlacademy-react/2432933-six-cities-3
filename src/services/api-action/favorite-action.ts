import { createAsyncThunk } from '@reduxjs/toolkit';
import { routeList } from './route-list';
import { ThunkApiConfig } from './api-config';
import { TypePlace } from '../../types/place-type/place-type';
import { handleApiError } from '../../utils/handle-api-error';

const errorMessage = {
  getFavoriteAction: {
    404: 'Не удалось загрузить список избранных',
    401: 'Пожалуйста, войдите в систему',
  },
  updateFavoriteStatus: {
    404: 'Не удалось обновить статус выбранного Offer',
  },
};

const getFavoriteAction = createAsyncThunk<TypePlace[], undefined, ThunkApiConfig>(
  'data/getFavorite',
  async (_arg, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<TypePlace[]>(routeList.FAVORITES);
      return data;
    } catch (error) {
      return rejectWithValue(handleApiError(error, errorMessage.getFavoriteAction));
    }
  }
);

type FavoriteStatus = {
  offerId: string;
  isFavorite: boolean;
}

const updateFavoriteStatus = createAsyncThunk<TypePlace, FavoriteStatus, ThunkApiConfig>(
  'user/fetchFavoriteStatus',
  async ({offerId, isFavorite}, {dispatch, extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.post<TypePlace>(routeList.FAVORITE_STATUS(offerId, isFavorite));
      dispatch(getFavoriteAction());
      return data ;
    } catch (error) {
      return rejectWithValue(handleApiError(error, errorMessage.updateFavoriteStatus));
    }

  }
);

export {getFavoriteAction, updateFavoriteStatus};

