import { AuthorizationStatus } from '../../components/const';
import { checkAuthAction, loginAction, logoutAction } from '../../services/api-action/user-process-action/user-process.action';
import authReducer from './auth-reducer';


const mockUser = {
  id: '1234',
  email: 'test@gmail.com',
  token: 'token',
  name: 'Oliver',
  avatarUrl: 'test.svg',
  isPro: false,
};

describe('authReducer', () => {
  const initialState = {
    user: null,
    isAuth: false,
    authStatus: AuthorizationStatus.Unknown
  };
  it('should return initial state', () => {
    const result = authReducer(undefined, { type: '' });
    expect(result).toEqual(initialState);
  });

  it('should handle checkAuthAction.fulfilled', () => {
    const result = authReducer(undefined, checkAuthAction.fulfilled(mockUser, '', undefined));

    expect(result.authStatus).toBe(AuthorizationStatus.Auth);
    expect(result.user).toEqual(mockUser);
    expect(result.user).not.toBeNull();
  });

  it('should handle checkAuthAction.rejected', () => {
    const result = authReducer(undefined, checkAuthAction.rejected(null, '', undefined));

    expect(result.authStatus).toBe(AuthorizationStatus.NoAuth);
    expect(result.user).toBeNull();
  });

  it('should handle checkAuthAction.pending', () => {
    const result = authReducer(undefined, checkAuthAction.pending('', undefined));

    expect(result.authStatus).toBe(AuthorizationStatus.Unknown);
  });

  it('should handle loginAction.fulfilled', () => {
    const result = authReducer(initialState, loginAction.fulfilled(mockUser, '', { email: 'test@...com', password: 'qwerty'}));

    expect(result.authStatus).toBe(AuthorizationStatus.Auth);
    expect(result.user).toEqual(mockUser);
  });

  it('should handle loginAction.rejected', () => {
    const result = authReducer(initialState, loginAction.rejected(null, '', { email: 'test@...com', password: 'qwerty'}));

    expect(result.authStatus).toBe(AuthorizationStatus.NoAuth);
    expect(result.user).toBeNull();
  });

  it('should handle logoutAction.fulfilled', () => {
    const result = authReducer(initialState, logoutAction.fulfilled(undefined, '', undefined));

    expect(result.authStatus).toBe(AuthorizationStatus.NoAuth);
    expect(result.user).toBeNull();
  });

});
