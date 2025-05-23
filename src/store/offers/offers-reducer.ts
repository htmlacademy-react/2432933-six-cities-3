import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypePlace } from '../../types/place-type/place-type';
import { updateFavoriteStatus } from '../../services/api-action/favorites-action/favorite-action';
import { getOffers } from '../../services/api-action/offers-action/offers.action';
import { NameSpace } from '../const';

const CITY_NAME_DEFAULT = 'Paris';

type InitialState = {
  city: string;
  sorting: string;
  list: TypePlace[];
  isLoading : boolean;
}

const initialState: InitialState = {
  city: CITY_NAME_DEFAULT,
  sorting: 'Popular',
  list: [],
  isLoading : false,
};

const offersReducer = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    setSorting(state, action: PayloadAction<string>) {
      state.sorting = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateFavoriteStatus.fulfilled, (state, action) => {
        const updatedOffer = action.payload;
        const index = state.list.findIndex((offer) => offer.id === updatedOffer.id);
        if (index !== -1) {
          state.list[index].isFavorite = updatedOffer.isFavorite;
        }
      })
      .addCase(getOffers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOffers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(getOffers.rejected, (state) => {
        state.isLoading = false;
      });
  }
});

export const { setCity, setSorting, } = offersReducer.actions;
export default offersReducer.reducer;


