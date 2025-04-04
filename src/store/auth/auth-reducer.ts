import { createSlice, } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../components/const';
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
    authStatus: AuthorizationStatus;
    isAuth: boolean;
  };


const initialState: AuthState = {
  authStatus: AuthorizationStatus.Unknown,
  user: null,
  isAuth : false,
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthAction.rejected, (state,) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.isAuth = false;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
        state.isAuth = true;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.isAuth = false;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
        state.isAuth = true;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.isAuth = false;
      });
  }
});

export default authReducer.reducer;

