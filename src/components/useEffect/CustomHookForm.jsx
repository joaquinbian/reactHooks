import React, { useEffect, useState } from "react";
import useForm from "../../hooks/useForm";

const CustomHookForm = () => {
  const [form, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = form;
  return (
    <div>
      <h1>Custom hook form</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          value={name}
          autoComplete="off"
          className="form-control"
          placeholder="your name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          value={email}
          autoComplete="off"
          className="form-control mt-3"
          placeholder="your email"
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          className="form-control mt-3"
          placeholder="****"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default CustomHookForm;
