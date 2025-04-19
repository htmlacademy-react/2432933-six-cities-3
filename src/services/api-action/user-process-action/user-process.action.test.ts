import { routeList } from '../route-list';
import { checkAuthAction, loginAction, logoutAction} from './user-process.action';
import { redirectToRoute } from '../../../store/redirect-to-route';
import { getFavoriteAction } from '../favorites-action/favorite-action';
import * as tokenStorage from '../../token';
import { setupMockStore, extractActionsTypes } from '../../test-helpers';


describe('Async actions', () => {
  const { mockStoreCreator, mockAxiosAdapter} = setupMockStore();
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator();
  });

  describe('Async actions Offer', () => {
    it('should dispatch checkAuthAction with thunk', async () => {
      mockAxiosAdapter.onGet(routeList.LOGIN).reply(200);

      await store.dispatch(checkAuthAction());
      const actions = store.getActions();

      expect(extractActionsTypes(actions)).toEqual([
        checkAuthAction.pending.type,
        getFavoriteAction.pending.type,
        checkAuthAction.fulfilled.type
      ]);
    });

    it('should dispatch checkAuthAction rejected', async () => {
      mockAxiosAdapter.onGet(routeList.LOGIN).reply(401);

      await store.dispatch(checkAuthAction());
      const actions = store.getActions();

      expect(extractActionsTypes(actions)).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.rejected.type
      ]);
    });

    it('should dispatch loginAction with thunk', async () => {
      const returnedData = { token: 'token' };
      const userData = {email: 'qwerty@.com', password: 'qwerty'};
      mockAxiosAdapter.onPost(routeList.LOGIN).reply(200, returnedData);

      await store.dispatch(loginAction(userData));
      const actions = store.getActions();

      expect(actions.some((action) => action.type === getFavoriteAction.pending.type)).toBe(true);
      expect(extractActionsTypes(actions)).toEqual([
        loginAction.pending.type,
        getFavoriteAction.pending.type,
        redirectToRoute.type,
        loginAction.fulfilled.type
      ]);
    });

    it('should dispatch loginAction rejected', async () => {
      const userData = {email: 'qwerty@.com', password: 'qwerty'};
      mockAxiosAdapter.onPost(routeList.LOGIN).reply(400);

      await store.dispatch(loginAction(userData));
      const actions = store.getActions();

      expect(actions.some((action) => action.type === getFavoriteAction.pending.type)).toBe(false);
      expect(extractActionsTypes(actions)).toEqual([
        loginAction.pending.type,
        loginAction.rejected.type
      ]);
    });

    it('should dispatch logoutAction with thunk', async () => {
      mockAxiosAdapter.onDelete(routeList.LOG_OUT).reply(204);

      await store.dispatch(logoutAction());
      const actions = store.getActions();

      expect(extractActionsTypes(actions)).toEqual([ logoutAction.pending.type, logoutAction.fulfilled.type ]);
    });

    it('should dispatch logoutAction rejected', async () => {
      mockAxiosAdapter.onDelete(routeList.LOG_OUT).reply(400);

      await store.dispatch(logoutAction());
      const actions = store.getActions();

      expect(extractActionsTypes(actions)).toEqual([ logoutAction.pending.type, logoutAction.rejected.type ]);
    });

    it('should call dropToken one time with thunk logoutAction', async () => {
      mockAxiosAdapter.onDelete(routeList.LOG_OUT).reply(204);
      const mockDropToken = vi.spyOn(tokenStorage, 'dropToken');
      await store.dispatch(logoutAction());

      expect(mockDropToken).toBeCalledTimes(1);
    });

    it('should call saveToken one time with thunk logoutAction', async () => {
      const returnedData = { token: 'token' };
      const userData = {email: 'qwerty@.com', password: 'qwerty'};
      mockAxiosAdapter.onPost(routeList.LOGIN).reply(200, returnedData);
      const mockSaveToken = vi.spyOn(tokenStorage, 'saveToken');
      await store.dispatch(loginAction(userData));

      expect(mockSaveToken).toBeCalledTimes(1);
    });
  });

});
