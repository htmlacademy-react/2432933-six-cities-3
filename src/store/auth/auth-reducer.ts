import { createSlice, } from '@reduxjs/toolkit';
import { checkAuthAction, loginAction, logoutAction } from '../../services/api-action/user-process';
import { AuthorizationStatus } from '../../components/const';

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
    authStatus: AuthorizationStatus;
  };


const initialState: AuthState = {
  user: null,
  isAuth: false,
  isLoading: false,
  authStatus: AuthorizationStatus.Unknown
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthAction.pending, (state) => {
        state.isLoading = true;
        state.authStatus = AuthorizationStatus.Unknown;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuth = true;
        state.isLoading = false;
        state.authStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.isAuth = false;
        state.authStatus = AuthorizationStatus.NoAuth;
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

