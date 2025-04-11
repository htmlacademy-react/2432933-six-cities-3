import { createSlice } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer-type/offer-type';
import { TypePlace } from '../../types/place-type/place-type';
import { Comment } from '../../types/offer-type/comment-type';
import { updateFavoriteStatus } from '../../services/api-action/favorite-action';
import { addOfferComments, getOffer, getOfferComments, getOffersNearby } from '../../services/api-action/offer-action';

type InitialState = {
  offer: Offer | null;
  offersNearby: TypePlace[];
  comments: Comment[];
  userComment: Comment | null;
  isLoading: boolean;
};

const initialState :InitialState = {
  offer: null,
  offersNearby: [],
  comments: [],
  userComment: null,
  isLoading: false,

};

const offerReducer = createSlice({
  name: 'offer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOffer.fulfilled, (state, action) => {
        state.offer = action.payload;
      })
      .addCase(getOffersNearby.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
      })
      .addCase(getOfferComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(addOfferComments.fulfilled, (state, action) => {
        state.userComment = action.payload;
      })
      .addCase(updateFavoriteStatus.fulfilled, (state, action) => {
        if(state.offer){
          state.offer.isFavorite = action.payload.isFavorite;
        }
      });
  }
});

export default offerReducer.reducer;
