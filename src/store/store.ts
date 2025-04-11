import { configureStore, } from '@reduxjs/toolkit';
import { errorMiddleware } from './middleware/error-middleware';
import rootReducers from './reducer';
import { createAPI } from '../services/api';
import { redirectMiddleware } from './middleware/redirect-middleware';

const api = createAPI();

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    })
  ).concat(errorMiddleware, redirectMiddleware),
});

export {store};
