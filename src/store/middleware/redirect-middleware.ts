import {PayloadAction} from '@reduxjs/toolkit';
import {Middleware} from 'redux';
import { browserHistory } from '../browser-history';
import rootReducers from '../reducer';

type Reducer = ReturnType<typeof rootReducers>;

const redirectMiddleware: Middleware<unknown, Reducer> = () => (next) =>(action: PayloadAction<string>) => {
  if (action.type === 'app/redirectToRoute') {
    browserHistory.push(action.payload);
  }

  return next(action);
};

export {redirectMiddleware};
