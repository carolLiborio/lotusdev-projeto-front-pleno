import React, { useState, useEffect } from "react";

const useValidateForm = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        alert(`Authorized, ${values.email}`);
        console.log(`Authorized, ${values.email}, ${values.password}`);
        setSubmitted(false);
      }
    }
  }, [errors]);

  function handleChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  function handleBlur() {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitted(true);
  }

  return {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    isSubmitted
  };
};

export default useValidateForm;
