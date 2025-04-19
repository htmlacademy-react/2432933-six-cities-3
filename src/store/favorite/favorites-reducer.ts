import { TypePlace } from '../../types/place-type/place-type';
import { createSlice, } from '@reduxjs/toolkit';
import { getFavoriteAction } from '../../services/api-action/favorites-action/favorite-action';
import { NameSpace } from '../const';

type InitialState = {
  favorites: TypePlace[];
  isLoading: boolean;
}

const initialState: InitialState = {
  favorites: [],
  isLoading: false,
};

const favoritesReducer = createSlice({
  name: NameSpace.Favorites,
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
