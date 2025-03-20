import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './reducer';
import { createAPI } from '../services/api';

const api = createAPI();

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    })
  )
});

export {store};
