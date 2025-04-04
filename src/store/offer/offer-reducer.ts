import { createSlice } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer-type/offer-type';
import { TypePlace } from '../../types/place-type/place-type';
import { Comment } from '../../types/offer-type/comment-type';
import { fetchFavoriteStatus } from '../../services/api-action/favorite-action';
import { addOfferComments, getOffer, getOfferComments, getOffersNearby } from '../../services/api-action/offer-action';
import { ApiError } from '../../services/api-action/api-config';

type InitialState = {
  offer: Offer | null;
  offersNearby: TypePlace[];
  comments: Comment[];
  userComment: Comment | null;
  error: ApiError | null ;
  isLoading: boolean;
  errorStatus: boolean;
};

const initialState :InitialState = {
  offer: null,
  offersNearby: [],
  comments: [],
  userComment: null,
  error: null,
  isLoading: false,
  errorStatus: false,
};

const offerReducer = createSlice({
  name: 'offer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOffer.rejected, (state, action) => {
        state.error = action.payload ?? null;
      })
      .addCase(getOffer.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.error = null;
      })
      .addCase(getOffersNearby.rejected, (state, action) => {
        state.error = action.payload ?? null;
      })
      .addCase(getOffersNearby.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
        state.error = null;
      })
      /* .addCase(getOfferComments.rejected, (state,) => {
        state.error = 'Ошибка при загрузке данных Comments';
      }) */
      .addCase(getOfferComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(addOfferComments.rejected, (state,) => {
        state.errorStatus = true;
      })
      .addCase(addOfferComments.fulfilled, (state, action) => {
        state.userComment = action.payload;
        state.errorStatus = false;
      })
      .addCase(fetchFavoriteStatus.fulfilled, (state, action) => {
        if(state.offer){
          state.offer.isFavorite = action.payload.isFavorite;
        }
      });
  }
});

export default offerReducer.reducer;
