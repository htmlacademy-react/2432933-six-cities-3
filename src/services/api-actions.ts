import {createAsyncThunk} from '@reduxjs/toolkit';
import { AppDispatch, State } from '../hooks/use-app-redux/use-app-redux';
import { TypePlace } from '../types/place-type/place-type';
import { Offer } from '../types/offer-type/offer-type';
import { Comment } from '../types/offer-type/comment-type';
import { AxiosInstance } from 'axios';
import { setLoadStatusOffers } from '../store/offers/offers-reducer';
import { saveToken, dropToken} from './token';

const routeList = {
  OFFERS: '/offers',
  LOGIN: '/login',
  LOG_OUT: '/logout',
  FAVORITES: '/favorite',
  OFFER: (offerId :string) => `/offers/${offerId}`,
  OFFERS_NEARBY: (offerId :string) => `/offers/${offerId}/nearby`,
  COMMENTS: (offerId :string) => `/comments/${offerId}`,
  FAVORITE_STATUS: (offerId :string, isFavorite: boolean) => `/favorite/${offerId}/${isFavorite ? 1 : 0}`,
};

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

const fetchOffers = createAsyncThunk<TypePlace[], undefined, ThunkApiConfig >(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoadStatusOffers(true));
    const {data} = await api.get<TypePlace[]>(routeList.OFFERS);
    dispatch(setLoadStatusOffers(false));
    return data;
  },
);

const getFavoriteAction = createAsyncThunk<TypePlace[], undefined, ThunkApiConfig>(
  'data/getFavorite',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TypePlace[]>(routeList.FAVORITES);
    return data;
  }
);

const checkAuthAction = createAsyncThunk<User, undefined, ThunkApiConfig>(
  'user/checkAuth',
  async (_arg, {dispatch ,extra: api}) => {
    const {data} = await api.get<User>(routeList.LOGIN);
    dispatch(getFavoriteAction());
    return data;
  },
);


const loginAction = createAsyncThunk<User, AuthData, ThunkApiConfig>(
  'user/loginAction',
  async ({email: email, password}, {extra: api}) => {
    const { data } = await api.post<User>(routeList.LOGIN, { email, password });

    saveToken(data.token);
    return data ;
  }
);

const logoutAction = createAsyncThunk<void, undefined, ThunkApiConfig>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(routeList.LOG_OUT);
    dropToken();
  },
);

const getOffer = createAsyncThunk<Offer, string, ThunkApiConfig>(
  'user/getOffer',
  async (offerId, { extra: api}) => {
    const {data} = await api.get<Offer>(routeList.OFFER(offerId));
    return data ;
  }
);

const getOffersNearby = createAsyncThunk<TypePlace[], string, ThunkApiConfig>(
  'user/getOffersNearby',
  async (offerId, { extra: api}) => {
    const {data} = await api.get<TypePlace[]>(routeList.OFFERS_NEARBY(offerId));
    return data ;
  }
);

const getOfferComments = createAsyncThunk<Comment[], string, ThunkApiConfig>(
  'user/getOfferComments',
  async (offerId, { extra: api}) => {
    const {data} = await api.get<Comment[]>(routeList.COMMENTS(offerId));
    return data ;
  }
);

type OfferComments = {
  offerId: string;
  isFavorite: boolean;
}


const fetchFavoriteStatus = createAsyncThunk<TypePlace, OfferComments, ThunkApiConfig>(
  'user/getOfferComments',
  async ({offerId, isFavorite}, {dispatch, extra: api}) => {
    const {data} = await api.post<TypePlace>(routeList.FAVORITE_STATUS(offerId, isFavorite));
    dispatch(getFavoriteAction());
    return data ;
  }
);

export {fetchOffers, checkAuthAction, loginAction, logoutAction, getFavoriteAction, getOffer, getOffersNearby, getOfferComments, fetchFavoriteStatus};
