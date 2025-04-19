import { createSlice } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer-type/offer-type';
import { TypePlace } from '../../types/place-type/place-type';
import { Comment } from '../../types/offer-type/comment-type';
import { updateFavoriteStatus } from '../../services/api-action/favorites-action/favorite-action';
import { addOfferComments, getOffer, getOfferComments, getOffersNearby } from '../../services/api-action/offer-action/offer.action';
import { NameSpace, RequestStatus } from '../const';

type InitialState = {
  offer: Offer | null;
  offersNearby: TypePlace[];
  comments: Comment[];
  userComment: Comment | null;
  isLoading: boolean;
  commentStatus: string;
  status: string;
};

const initialState :InitialState = {
  offer: null,
  offersNearby: [],
  comments: [],
  userComment: null,
  isLoading: false,
  status: RequestStatus.Initial,
  commentStatus: RequestStatus.Initial
};

const offerReducer = createSlice({
  name: NameSpace.Offer,
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
        state.commentStatus = RequestStatus.Success;
      })
      .addCase(addOfferComments.pending, (state) => {
        state.commentStatus = RequestStatus.Loading;
      })
      .addCase(addOfferComments.rejected, (state) => {
        state.commentStatus = RequestStatus.Initial;
      })

      .addCase(updateFavoriteStatus.fulfilled, (state, action) => {
        if(state.offer){
          state.offer.isFavorite = action.payload.isFavorite;
          state.status = RequestStatus.Success;
        }
      })
      .addCase(updateFavoriteStatus.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(updateFavoriteStatus.rejected, (state) => {
        state.status = RequestStatus.Initial;
      });
  }
});

export default offerReducer.reducer;
