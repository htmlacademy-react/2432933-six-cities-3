import { createSlice, } from '@reduxjs/toolkit';
import { checkAuthAction, loginAction, logoutAction } from '../../services/api-action/user-process';

type User = {
  id: string;
  email: string;
  token: string;
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

type AuthState = {
    user: User | null;
    isAuth: boolean;
    isLoading: boolean;
  };


const initialState: AuthState = {
  user: null,
  isAuth: false,
  isLoading: false,
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(loginAction.rejected, (state) => {
        state.isAuth = false;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuth = true;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.isAuth = false;
      });
  }
});

export default authReducer.reducer;

