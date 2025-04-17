import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-redux/use-app-redux';
import './error-message.css';
import { removeError } from '../../store/toast.reducer';

const Toast = () => {
  const { message, type } = useAppSelector((state) => state.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() =>dispatch(removeError()), 3000);
    return () => clearTimeout(timer);
  },[message, dispatch]);

  if (!message) {
    return null;
  }

  return <p className={`error-message error-message-${type}`}> { message } </p>;
};

export default Toast;
