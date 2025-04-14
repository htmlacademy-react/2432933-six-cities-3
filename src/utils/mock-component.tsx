import { MockStore, configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { Action } from 'redux';
import thunk from 'redux-thunk';
import { State } from '../types/state';
import { createAPI } from '../services/api';
import { ThunkDispatch } from 'redux-thunk';
import { Provider } from 'react-redux';

type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

type ComponentWithMockStore = {
  withStoreComponent: JSX.Element;
  mockStore: MockStore;
  mockAxiosAdapter: MockAdapter;
};

const withStore = (component: JSX.Element, initialState: Partial<State>): ComponentWithMockStore => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  const mockStore = mockStoreCreator(initialState);

  return ({
    withStoreComponent: <Provider store={mockStore}>{component}</Provider>,
    mockStore,
    mockAxiosAdapter,
  });
};

export { withStore };
