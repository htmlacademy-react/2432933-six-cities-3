import { createSlice } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer-type/offer-type';
import { TypePlace } from '../../types/place-type/place-type';
import { Comment } from '../../types/offer-type/comment-type';
import { updateFavoriteStatus } from '../../services/api-action/favorite-action';
import { addOfferComments, getOffer, getOfferComments, getOffersNearby } from '../../services/api-action/offer.action';
import { RequestStatus } from '../const';

type InitialState = {
  offer: Offer | null;
  offersNearby: TypePlace[];
  comments: Comment[];
  userComment: Comment | null;
  isLoading: boolean;
  status: string;
};

const initialState :InitialState = {
  offer: null,
  offersNearby: [],
  comments: [],
  userComment: null,
  isLoading: false,
  status: RequestStatus.INITIAL,
};

const offerReducer = createSlice({
  name: 'offer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOffer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOffer.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isLoading = false;
      })
      .addCase(getOffer.rejected, (state) => {
        state.isLoading = false;
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
          state.status = RequestStatus.SUCCESS;
        }
      })
      .addCase(updateFavoriteStatus.pending, (state) => {
        state.status = RequestStatus.LOADING;
      });
  }
});

export default offerReducer.reducer;
