import { useState, } from 'react';

const useInputValues = <T extends Record<string, string | number>>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues);

  const setFieldValue = (name: keyof T, value: T[keyof T]) => {
    setValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  return { values, setFieldValue };
};

export {useInputValues};

