import React, { useState } from "react";

const useCounter = (initialState = 10) => {
  const [state, setState] = useState(initialState);

  const increment = () => {
    setState(state + 1);
  };
  const decrement = () => {
    if (state === 1) return alert("page can't be lower than 0");
    setState(state - 1);
  };
  const reset = () => {
    setState(initialState);
  };
  return {
    state,
    increment,
    decrement,
    reset,
  };
};

export default useCounter;
