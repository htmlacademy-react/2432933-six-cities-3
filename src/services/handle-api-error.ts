import { AxiosError } from 'axios';
import { ApiError } from './api-action/api-config';

type ErrorMap = Record<number, ApiError>

const errorMap: ErrorMap = {
  401: { message: 'Не авторизован', type: 'warn'},
  400: { message: 'Введены не корректные данные', type: 'error'},
  404: { message: 'Not Found' , type: 'error'},
  500: { message: 'Ошибка сервера', type: 'error' }
};

const handleApiError = (err: unknown, errorMessage: Record<number, string>) => {
  const error = err as AxiosError<ApiError>;
  const status = error.response?.status ?? 500;
  const defaultError = errorMap[status] ?? { message: error.response?.data?.message, type: 'error' };
  const customMessage = errorMessage[status];

  return {
    message: customMessage ?? defaultError.message,
    code: status,
    type: defaultError.type ?? 'error',
  };
};

export { handleApiError };
