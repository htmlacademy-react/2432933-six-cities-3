import { TypePlace } from '../types/place-type/place-type';
import { createSlice, } from '@reduxjs/toolkit';
import { getFavoriteAction, } from '../services/api-actions';

type InitialState = {
  favorites: TypePlace[];
}

const initialState: InitialState = {
  favorites: [],
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
      });
  }
});


export default favoritesReducer.reducer;
