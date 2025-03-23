import { createSlice, } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../components/const';
import { checkAuthAction, loginAction, logoutAction} from '../../services/api-actions';

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
  };


const initialState: AuthState = {
  authStatus: AuthorizationStatus.Unknown,
  user: null,
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthAction.rejected, (state,) => {
        state.authStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
      });
  }
});

export default authReducer.reducer;

