import { TypePlace } from '../types/place-type/place-type';
import { createSlice, } from '@reduxjs/toolkit';
import { getFavoriteAction } from '../services/api-actions';

type InitialState = {
  favorites: TypePlace[];
  favoritesCount: number;
}

const initialState: InitialState = {
  favorites: [],
  favoritesCount: 0,
};

const favoritesReducer = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFavoriteAction.rejected, (state) => {
        state.favorites = [];
      })
      .addCase(getFavoriteAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.favoritesCount = action.payload.length;
      });
  }
});


export default favoritesReducer.reducer;
