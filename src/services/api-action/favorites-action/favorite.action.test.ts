import { extractActionsTypes, setupMockStore } from '../../test-helpers';
import { makeFakeOffers } from '../../../fake-data/fakeOffers';
import { routeList } from '../route-list';
import { getFavoriteAction } from './favorite-action';


describe('Async actions', () => {
  const { mockStoreCreator, mockAxiosAdapter} = setupMockStore();
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({ offer: {}});
  });

  describe('Async actions Offer', () => {
    it('should dispatch getFavoriteAction with thunk', async () => {
      const mockOffers = makeFakeOffers(1);
      mockAxiosAdapter.onGet(routeList.FAVORITES).reply(200, mockOffers);

      const result = await store.dispatch(getFavoriteAction());
      const actions = store.getActions();

      expect(result.payload).toEqual(mockOffers);
      expect(extractActionsTypes(actions)).toEqual([ getFavoriteAction.pending.type, getFavoriteAction.fulfilled.type ]);

    });

    it('should getOffer error', async () => {
      mockAxiosAdapter.onGet(routeList.FAVORITES).reply(400, []);

      const result = await store.dispatch(getFavoriteAction());
      const actions = store.getActions();

      expect(result.meta.requestStatus).toBe('rejected');
      expect(extractActionsTypes(actions)).toEqual([ getFavoriteAction.pending.type, getFavoriteAction.rejected.type ]);
    });
  });
});
