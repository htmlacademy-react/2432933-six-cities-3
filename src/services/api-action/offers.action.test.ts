import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import { createAPI } from '../api';
import { State } from '../../types/state';
///////////////
import { ThunkDispatch } from 'redux-thunk';
import { TypePlace } from '../../types/place-type/place-type';
import { routeList } from './route-list';
import { getOffers } from './offers.action';
import { makeFakeOffers } from '../../fake-data/fakeOffers';

type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;
const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

const CITY_NAME_DEFAULT = 'Paris';

type InitialState = {
  city: string;
  sorting: string;
  list: TypePlace[];
  isLoading : boolean;
}

const initialState: InitialState = {
  city: CITY_NAME_DEFAULT,
  sorting: 'Popular',
  list: [],
  isLoading : false,
};

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);

  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({ offers: { ...initialState }});
  });

  describe('getOffers', () => {

    it('should dispatch getOffers with thunk', async () => {
      const mockOffers: TypePlace[] = makeFakeOffers(2);
      mockAxiosAdapter.onGet(routeList.OFFERS).reply(200, mockOffers);

      const result = await store.dispatch(getOffers());
      const actions = store.getActions();

      expect(result.payload).toEqual(mockOffers);
      expect(extractActionsTypes(actions)).toEqual([ getOffers.pending.type, getOffers.fulfilled.type ]);

    });

    it('should handle empty response', async () => {
      mockAxiosAdapter.onGet(routeList.OFFERS).reply(200, []);
      const result = await store.dispatch(getOffers());
      const actions = store.getActions();

      expect(result.payload).toEqual([]);
      expect(extractActionsTypes(actions)).toEqual([ getOffers.pending.type, getOffers.fulfilled.type ]);

    });

    it('should error', async () => {
      mockAxiosAdapter.onGet(routeList.OFFERS).reply(400, []);
      const result = await store.dispatch(getOffers());
      const actions = store.getActions();

      expect(result.meta.requestStatus).toBe('rejected');
      expect(extractActionsTypes(actions)).toEqual([ getOffers.pending.type, getOffers.rejected.type ]);

    });

  });
});
