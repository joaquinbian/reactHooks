import React from "react";
import useCounter from "../../hooks/useCounter";

const CounterCustomHook = () => {
  const { increment, decrement, reset, state } = useCounter(100);

  return (
    <div>
      <h2>Counter hook: {state}</h2>
      <hr />
      <button className="btn btn-primary " onClick={() => increment()}>
        +1
      </button>
      <button className="btn btn-dark " onClick={reset}>
        reset
      </button>
      <button className="btn btn-danger " onClick={() => decrement()}>
        -1
      </button>
    </div>
  );
};

export default CounterCustomHook;
