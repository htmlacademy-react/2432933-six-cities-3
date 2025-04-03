import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from './api-config';
import { Offer } from '../../types/offer-type/offer-type';
import { TypePlace } from '../../types/place-type/place-type';
import { routeList } from './route-list';
import { Comment } from '../../types/offer-type/comment-type';

const getOffer = createAsyncThunk<Offer, string, ThunkApiConfig>(
  'data/getOffer',
  async (offerId, { extra: api, rejectWithValue }) => {
    try {
      const {data} = await api.get<Offer>(routeList.OFFER(offerId));
      return data ;
    } catch (error) {

      return rejectWithValue({
        message: 'Ошибка при загрузке данных Offer!',
      });
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

      return rejectWithValue({
        message: 'Не удалось загрузить предложения неподолеку!',
      });
    }

  }
);

const getOfferComments = createAsyncThunk<Comment[], string, ThunkApiConfig>(
  'data/getOfferComments',
  async (offerId, { extra: api}) => {
    const {data} = await api.get<Comment[]>(routeList.COMMENTS(offerId));
    return data ;
  }
);

type UserComment = {
  comment: string;
  rating: number;
}


const addOfferComments = createAsyncThunk<Comment, { offerId: string; commentData: UserComment }, ThunkApiConfig>(
  'data/addOfferComments',
  async ({offerId, commentData}, {dispatch, extra: api}) => {
    const { data } = await api.post<Comment>(routeList.USER_COMMENTS(offerId), commentData);
    dispatch(getOfferComments(offerId));
    return data ;
  }
);

export { getOffer, getOffersNearby, getOfferComments, addOfferComments };
