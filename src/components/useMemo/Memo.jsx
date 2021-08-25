import React, { useState } from "react";
import useCounter from "../../hooks/useCounter";
import { Small } from "./Small";

export const Memo = () => {
  const { state, increment } = useCounter(1);
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>Memo</h1>
      <hr />
      <h3>
        Counter: <Small val={state} />
      </h3>
      <button className="btn btn-primary mt-2" onClick={increment}>
        Increment
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
