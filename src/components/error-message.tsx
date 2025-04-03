
type ErrorMessageProps = {
  message?: string | null;
  className?: string;
};

const ErrorMessage = ({ message, className = 'error' }: ErrorMessageProps) => {
  if (!message) {
    return null;
  }

  return <p className={ className }> { message } </p>;
};

export default ErrorMessage;
