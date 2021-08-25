import React, { useEffect, useState } from "react";
import Message from "./CleanUp";

const UseEffectHook = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });
  const { name, email } = formState;

  //   useEffect(()=>{

  //   })
  //useEffect sin dependencias --> No importa que cambie, vuelve a ejecutarse

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormState({ ...formState, [name]: value });
  };
  return (
    <div>
      <h1>UseEffect</h1>
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

        {name === "123" && <Message />}
      </div>
    </div>
  );
};

export default UseEffectHook;
