import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from './api-config';
import { Offer } from '../../types/offer-type/offer-type';
import { TypePlace } from '../../types/place-type/place-type';
import { routeList } from './route-list';
import { Comment } from '../../types/offer-type/comment-type';
import { handleApiError } from '../handle-api-error';

const errorMessage = {
  OFFER: 'Ошибка при загрузке данных Offer!',
  NEARBY: 'Не удалось загрузить предложения неподолеку!',
  COMMENTS: 'Не удалось загрузить список комментариев!',
  ADD_COMMENTS: 'Не удалось отправить сообщение',
};


const getOffer = createAsyncThunk<Offer, string, ThunkApiConfig>(
  'data/getOffer',
  async (offerId, { extra: api, rejectWithValue }) => {
    try {
      const {data} = await api.get<Offer>(routeList.OFFER(offerId));
      return data ;
    } catch (error) {
      return rejectWithValue(handleApiError(error, errorMessage.OFFER));
    }
  }
);

const getOffersNearby = createAsyncThunk<TypePlace[], string, ThunkApiConfig>(
  'data/getOffersNearby',
  async (offerId, { extra: api, rejectWithValue }) => {
    try{
      const {data} = await api.get<TypePlace[]>(routeList.OFFERS_NEARBY(offerId));
      return data ;
    }catch (error) {
      return rejectWithValue(handleApiError(error, errorMessage.NEARBY));
    }

  }
);


const getOfferComments = createAsyncThunk<Comment[], string, ThunkApiConfig>(
  'data/getOfferComments',
  async (offerId, { extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<Comment[]>(routeList.COMMENTS(offerId));
      return data ;
    } catch (error) {
      return rejectWithValue(handleApiError(error, errorMessage.COMMENTS));
    }
  }
);

type UserComment = {
  comment: string;
  rating: number;
}

const addOfferComments = createAsyncThunk<Comment, { offerId: string; commentData: UserComment }, ThunkApiConfig>(
  'data/addOfferComments',
  async ({offerId, commentData}, {dispatch, extra: api, rejectWithValue}) => {

    try{
      const { data } = await api.post<Comment>(routeList.USER_COMMENTS(offerId), commentData);
      await dispatch(getOfferComments(offerId));
      return data ;
    }catch (error) {
      return rejectWithValue(handleApiError(error, errorMessage.ADD_COMMENTS));
    }
  }
);

export { getOffer, getOffersNearby, getOfferComments, addOfferComments };
