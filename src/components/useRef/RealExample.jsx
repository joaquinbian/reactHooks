import React, { useState } from "react";
import MultipleCustomHooks from "../examples/MultipleCustomHooks";

export const RealExample = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div>
      <h1>Real example ref</h1>
      <hr />
      {show && <MultipleCustomHooks />}
      <button className="btn btn-primary" onClick={handleClick}>
        show/hide
      </button>
    </div>
  );
};
