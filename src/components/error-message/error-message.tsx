import './error-message.css';

type ErrorMessageProps = {
  message?: string | null;
  className?: string;
};

const ErrorMessage = ({ message, className = 'error-message' }: ErrorMessageProps) => {
  if (!message) {
    return null;
  }

  return <p className={ className }> { message } </p>;
};

export default ErrorMessage;
