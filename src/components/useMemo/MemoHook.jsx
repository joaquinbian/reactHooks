import React, { useMemo, useState } from "react";
import useCounter from "../../hooks/useCounter";
// import { Small } from "./Small";

export const MemoHook = () => {
  const { state, increment } = useCounter(100);
  const [show, setShow] = useState(true);

  const procesoPesado = (iteraciones) => {
    for (let i = 0; i < iteraciones; i++) {
      console.log("ahí vamos");
    }
    return `${iteraciones} iteraciones realizadas`;
  };

  const memoProcesoPesado = useMemo(() => procesoPesado(state), [state]);
  // lo que hacemos con el useMemo, es pasarle la funcion cb, y le pasamos una dependencia
  // y siempre que el valor de la dependencia cambie, vamos a memorizar el nuevo valor de
  // la funcion cb, sino, va a quedar el valor memorizado anteriormente

  //el valor se almacena en memoProcesoPesado

  return (
    <div>
      <h1>MemoHook</h1>
      <hr />
      <h3>
        Counter: <small>{state}</small>
      </h3>
      <p>{memoProcesoPesado}</p>
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
