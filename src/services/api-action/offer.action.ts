import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from './api-config';
import { Offer } from '../../types/offer-type/offer-type';
import { TypePlace } from '../../types/place-type/place-type';
import { routeList } from './route-list';
import { Comment } from '../../types/offer-type/comment-type';
import { handleApiError } from '../handle-api-error';
import { redirectToRoute } from '../../store/redirect-to-route';
import { AppRoute } from '../../components/const';

const errorMessage = {
  getOffer: {
    404: 'Предложение не найдено',
    401: 'Пожалуйста, войдите в систему',
  },
  getOffersNearby: {
    404: 'Соседние предложения не найдены',
    500: 'Ошибка сервера. Не удалось загрузить Соседние предложения '
  },
  getOfferComments: {
    404: 'Не удалось загурзить комменатрии ',
    500: 'Ошибка сервера. Не удалось загрузить комменатрии '
  },
  addOfferComments: {
    404: 'Не удалось отправить комменатрии ',
  }
};


const getOffer = createAsyncThunk<Offer, string, ThunkApiConfig>(
  'data/getOffer',
  async (offerId, { extra: api, rejectWithValue, dispatch }) => {
    try {
      const {data} = await api.get<Offer>(routeList.OFFER(offerId));
      return data ;
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.NotFound));
      return rejectWithValue(handleApiError(error, errorMessage.getOffer));
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
      return rejectWithValue(handleApiError(error, errorMessage.getOffersNearby));
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
      return rejectWithValue(handleApiError(error, errorMessage.getOfferComments));
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
      return rejectWithValue(handleApiError(error, errorMessage.addOfferComments));
    }
  }
);

export { getOffer, getOffersNearby, getOfferComments, addOfferComments };
