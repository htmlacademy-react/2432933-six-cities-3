import { Action } from 'redux';
import { createAPI } from './api';
import { State } from '../types/state';

import { ThunkDispatch } from 'redux-thunk';

import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';


type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;
const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);


function setupMockStore() {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);


  return {
    mockStoreCreator,
    mockAxiosAdapter,
  };
}

export { extractActionsTypes, setupMockStore };
export type { AppThunkDispatch };
