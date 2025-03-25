import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypePlace } from '../../types/place-type/place-type';
import { fetchFavoriteStatus, fetchOffers } from '../../services/api-actions';

const CITY_NAME_DEFAULT = 'Paris';

type InitialState = {
  city: string;
  sorting: string;
  list: TypePlace[];
  loadStatus: boolean;
}

const initialState: InitialState = {
  city: CITY_NAME_DEFAULT,
  sorting: 'Popular',
  list: [],
  loadStatus: false,
};

const offersReducer = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    setSorting(state, action: PayloadAction<string>) {
      state.sorting = action.payload;
    },
    setLoadStatusOffers(state, action: PayloadAction<boolean>) {
      state.loadStatus = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoriteStatus.fulfilled, (state, action) => {
        const updatedOffer = action.payload;
        state.list = state.list.map((offer) => offer.id === updatedOffer.id ? updatedOffer : offer);
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.list = [];
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.list = action.payload;
      });
  }
});

export const { setCity, setSorting, setLoadStatusOffers } = offersReducer.actions;
export default offersReducer.reducer;


