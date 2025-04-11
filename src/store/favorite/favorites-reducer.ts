import { TypePlace } from '../../types/place-type/place-type';
import { createSlice, } from '@reduxjs/toolkit';
import { getFavoriteAction, } from '../../services/api-action/favorite-action';

type InitialState = {
  favorites: TypePlace[];
  isLoading: boolean;
}

const initialState: InitialState = {
  favorites: [],
  isLoading: false,
};

const favoritesReducer = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFavoriteAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isLoading = false;
      })
      .addCase(getFavoriteAction.pending, (state) => {
        state.isLoading = true;
      });
  }
});


export default favoritesReducer.reducer;
