import { createSlice, } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer-type/offer-type';
import { TypePlace } from '../../types/place-type/place-type';
import { Comment } from '../../types/offer-type/comment-type';
import { fetchFavoriteStatus } from '../../services/api-action/favorite-action';
import { addOfferComments, getOffer, getOfferComments, getOffersNearby } from '../../services/api-action/offer';

type InitialState = {
  offer: Offer | null;
  offersNearby: TypePlace[];
  comments: Comment[];
  userComment: Comment | null;
  error: string | null;
};

const initialState :InitialState = {
  offer: null,
  offersNearby: [],
  comments: [],
  userComment: null,
  error: null,
};

const offerReducer = createSlice({
  name: 'offer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOffer.rejected, (state,) => {
        state.error = 'Ошибка при загрузке данных Offer';
      })
      .addCase(getOffer.fulfilled, (state, action) => {
        state.error = null;
        state.offer = action.payload;
      })
      .addCase(getOffersNearby.rejected, (state,) => {
        state.offersNearby = [];
      })
      .addCase(getOffersNearby.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
      })
      .addCase(getOfferComments.rejected, (state,) => {
        state.error = 'Ошибка при загрузке данных Comments';
      })
      .addCase(getOfferComments.fulfilled, (state, action) => {
        state.error = null;
        state.comments = action.payload;
      })
      .addCase(addOfferComments.rejected, (state,) => {
        state.error = 'Ошибка при добавление данных Comments';
        state.userComment = null;
      })
      .addCase(addOfferComments.fulfilled, (state, action) => {
        state.error = null;
        state.userComment = action.payload;
      })

    /* .addCase(fetchFavoriteStatus.fulfilled, (state, action) => {
        if(state.offer){
          state.offer.isFavorite = action.payload.isFavorite;
        }
      }); */

  }
});

export default offerReducer.reducer;
