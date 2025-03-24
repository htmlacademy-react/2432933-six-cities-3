import { createSlice, } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer-type/offer-type';
import { getOffer, getOfferComments, getOffersNearby } from '../../services/api-actions';
import { TypePlace } from '../../types/place-type/place-type';
import { Comment } from '../../types/offer-type/comment-type';

type InitialState = {
  offer: Offer | null;
  offersNearby: TypePlace[];
  comments: Comment[];
};

const initialState :InitialState = {
  offer: null,
  offersNearby: [],
  comments: [],
};

const offerReducer = createSlice({
  name: 'offer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOffer.rejected, (state,) => {
        state.offer = null;
      })
      .addCase(getOffer.fulfilled, (state, action) => {
        state.offer = action.payload;
      })
      .addCase(getOffersNearby.rejected, (state,) => {
        state.offersNearby = [];
      })
      .addCase(getOffersNearby.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
      })
      .addCase(getOfferComments.rejected, (state,) => {
        state.comments = [];
      })
      .addCase(getOfferComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  }
});

export default offerReducer.reducer;
