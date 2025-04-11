import { AxiosError } from 'axios';
import { ApiError } from './api-action/api-config';

type ErrorMap = Record<number, ApiError>

const errorMap: ErrorMap = {
  401: { message: 'Не авторизован', type: 'warn'},
  400: { message: 'Введены не корректные данные '},
  404: { message: '' },
  500: { message: 'Ошибка сервера' }
};


const handleApiError = (err: unknown, message: string) => {
  const error = err as AxiosError<ApiError>;
  const status = error.response?.status ?? 500;

  const mappedError = errorMap[status];
  if(status === 404){
    return {...mappedError, message: message };
  }

  return mappedError ?? {
    message: error.response?.data?.message || 'Неизвестная ошибка',
    type: 'error'
  };
};

export { handleApiError };
