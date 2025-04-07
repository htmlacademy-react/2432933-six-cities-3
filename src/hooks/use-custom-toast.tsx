import { useState } from 'react';
import ErrorMessage from '../components/error-message/error-message';
import { ApiError } from '../services/api-action/api-config';


const useCustomToast = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (error: ApiError) => {
    setToastMessage(error.message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const Toast = () => {
    if (!toastMessage) {
      return null;
    }
    return <ErrorMessage message={toastMessage} />;
  };

  return { Toast, showToast };
};

export {useCustomToast};
