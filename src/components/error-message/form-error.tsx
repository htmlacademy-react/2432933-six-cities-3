import './error-message.css';

type FormErrorProps = {
  message?: string;
}

const FormError = ({message}: FormErrorProps) => {
  if(!message){
    return null;
  }
  return <p className='error-message'> { message } </p>;
};


export default FormError;
