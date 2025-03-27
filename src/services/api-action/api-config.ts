import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../hooks/use-app-redux/use-app-redux';

type ThunkApiConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}

export type { ThunkApiConfig };
