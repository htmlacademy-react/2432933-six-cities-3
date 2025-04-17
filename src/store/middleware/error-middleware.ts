import { Middleware } from 'redux';
import { PayloadAction, isRejectedWithValue} from '@reduxjs/toolkit';
import { setError,} from '../toast.reducer';
import { ApiError } from '../../services/api-action/api-config';

const errorMiddleware: Middleware = ({dispatch}) => (next) => (action: PayloadAction<ApiError>) => {
  if (isRejectedWithValue(action)) {
    const error = action.payload;
    dispatch(setError({ message : error.message, type : error.type ?? 'error'}));
  }
  return next(action);
};

export { errorMiddleware };
