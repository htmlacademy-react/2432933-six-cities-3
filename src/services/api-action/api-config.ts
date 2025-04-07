import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../hooks/use-app-redux/use-app-redux';

type ApiError = {
  message: string;
  code?: number;
};

type ThunkApiConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  rejectValue: ApiError;
}

export type { ThunkApiConfig, ApiError };
