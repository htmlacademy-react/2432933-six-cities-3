import axios, { AxiosInstance,} from 'axios';
import { getToken } from './token';

const BASE_URL = 'https://15.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['X-token'] = token;
    }
    return config;
  });

  return api;
};

export { createAPI, };
