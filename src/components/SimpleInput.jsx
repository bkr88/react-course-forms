import React, { useState } from 'react';

const SimpleInput = (props) => {
  const [formValues, setFormValues] = useState({
    enteredName: '',
    enteredNameTouched: false,
    enteredEmail: '',
    enteredEmailTouched: false,
  });

  const enteredNameIsValid = formValues.enteredName.trim() !== '';
  const inputNameIsInvalid =
    !enteredNameIsValid && formValues.enteredNameTouched;

  const enteredEmailIsValid = formValues.enteredEmail.trim() !== '';
  const inputEmailIsInvalid =
    !enteredEmailIsValid && formValues.enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const inputHandler = (input, value) => {
    setFormValues((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setFormValues((prevState) => ({
      ...prevState,
      enteredNameTouched: true,
      enteredEmailTouched: true,
    }));

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    setFormValues((prevState) => ({
      ...prevState,
      enteredName: '',
      enteredEmail: '',
      enteredNameTouched: false,
      enteredEmailTouched: false,
    }));
  };

  const inputNameClasses = `form-control ${
    inputNameIsInvalid ? 'form-control invalid' : ''
  }`;

  const inputEmailClasses = `form-control ${
    inputEmailIsInvalid ? 'form-control invalid' : ''
  }`;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={formValues.enteredName}
          onChange={(event) => inputHandler('enteredName', event.target.value)}
          onBlur={() => inputHandler('enteredNameTouched', true)}
        />
        {inputNameIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>

      <div className={inputEmailClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={formValues.enteredEmail}
          onChange={(event) => inputHandler('enteredEmail', event.target.value)}
          onBlur={() => inputHandler('enteredEmailTouched', true)}
        />
        {inputEmailIsInvalid && (
          <p className="error-text">Email must not be empty.</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
