import React from 'react';
import useValidateForm from "./useValidateForm";
import validateAuth from "./validateAuth";

import "../styles/styles.css";

const LoginNow = () => {
  const INITIAL_STATE = {
    email: "",
    password: ""
  };

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    isSubmitted
  } = useValidateForm(INITIAL_STATE, validateAuth);

  return (
    <div className="container">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          placeholder="user email"
          name="email"
          className={errors.email && "error-input"}
          autoComplete="off"
          value={values.email}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
        <input
          onChange={handleChange}
          type="password"
          onBlur={handleBlur}
          className={errors.password && "error-input"}
          placeholder="password"
          name="password"
          autoComplete="off"
          value={values.password}
        />
        {errors.password && <p className="error-text">{errors.password}</p>}
        <button disabled={isSubmitted} type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};
export default LoginNow;
