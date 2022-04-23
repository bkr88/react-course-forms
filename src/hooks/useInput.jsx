import { useState } from 'react';

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState('');

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => setEnteredValue(event.target.value);
  const valueBlurHandler = () => setIsTouched(true);

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  const inputClasses = `form-control ${hasError ? 'invalid' : ''}`;

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    classes: inputClasses,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useInput;
