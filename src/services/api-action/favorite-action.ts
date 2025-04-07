import { createAsyncThunk } from '@reduxjs/toolkit';
import { routeList } from './route-list';
import { ThunkApiConfig } from './api-config';
import { TypePlace } from '../../types/place-type/place-type';

const getFavoriteAction = createAsyncThunk<TypePlace[], undefined, ThunkApiConfig>(
  'data/getFavorite',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TypePlace[]>(routeList.FAVORITES);
    return data;
  }
);

type FavoriteStatus = {
  offerId: string;
  isFavorite: boolean;
}

const updateFavoriteStatus = createAsyncThunk<TypePlace, FavoriteStatus, ThunkApiConfig>(
  'user/fetchFavoriteStatus',
  async ({offerId, isFavorite}, {dispatch, extra: api}) => {
    const {data} = await api.post<TypePlace>(routeList.FAVORITE_STATUS(offerId, isFavorite));
    dispatch(getFavoriteAction());
    return data ;
  }
);

export {getFavoriteAction, updateFavoriteStatus};

