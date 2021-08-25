import React, { useState } from "react";

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const cleanForm = () => {
    setValues(initialState);
  };

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };
  return [values, handleInputChange, cleanForm];
};

export default useForm;
