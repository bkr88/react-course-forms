import React from 'react';

import useInput from '../hooks/useInput';

const isNotEmpty = (value) => value !== '';
const includesAtSign = value => value.includes('@');

const BasicForm = (props) => {
  const {
    value: firstName,
    hasError: firstNameHasError,
    isValid: firstNameIsValid,
    classes: firstNameClasses,
    reset: firstNameReset,
    valueBlurHandler: firstNameBlurHandler,
    valueChangeHandler: firstNameChangeHandler,
  } = useInput(isNotEmpty);

  const {
    value: lastName,
    hasError: lastNameHasError,
    isValid: lastNameIsValid,
    classes: lastNameClasses,
    reset: lastNameReset,
    valueBlurHandler: lastNameBlurHandler,
    valueChangeHandler: lastNameChangeHandler,
  } = useInput(isNotEmpty);

  const {
    value: email,
    hasError: emailHasError,
    isValid: emailIsValid,
    classes: emailClasses,
    reset: emailReset,
    valueBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
  } = useInput(includesAtSign);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    firstNameReset();
    lastNameReset();
    emailReset();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='firstName'>First Name</label>

          <input
            type='text'
            id='firstName'
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />

          {firstNameHasError && (
            <p className='error-text'>First name must not be empty.</p>
          )}
        </div>

        <div className={lastNameClasses}>
          <label htmlFor='lastName'>Last Name</label>

          <input type='text'
            id='lastName'
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}/>

          {lastNameHasError && (
            <p className='error-text'>Last name must not be empty.</p>
          )}
        </div>
      </div>

      <div className={emailClasses}>
        <label htmlFor='email'>E-Mail Address</label>

        <input type='email'
          id='email'
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}/>

        {emailHasError && (
          <p className='error-text'>email must contain @.</p>
        )}
      </div>

      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
