import React, { useCallback, useState } from "react";
import ShowIncrement from "./ShowIncrement";

const CallBackHook = () => {
  const [counter, setCounter] = useState(0);

  // el componente showIncrement se va a volver a pintar cada vez que apretemos el boton
  // incluso si le ponemos el memo, porque cada vez que apretamos, este componente se vuevle
  // a ejecutar y se crea un nuevo espacio en memoria de la funcion que le mandamos al componente
  // y como la funcion es un objeto que apunta a un lugar diferente, ni el react memo funciona porque
  // realmente es una nueva funcion

  const increment = useCallback(() => {
    setCounter((c) => c + 1);
    // c hace referencia al estado anterior
    // nos ahorramos poner el estado en la dependencia
    // del useCallBack  haciendo que sea siempre una nueva
    // funcion y que no funcione lo que queriamos hacer
  }, [setCounter]);

  // con el useCallback usamos una version memorizada de la funcion que sirve para mandarla como arg
  // y react sabe que la funcion no cambio si la dependencia que le pasamos al useCallBack no cambia
  //

  return (
    <div>
      <h1>UseCallback hook</h1>
      <hr />
      <h3>Counter: {counter}</h3>
      <ShowIncrement increment={increment} />
    </div>
  );
};

export default CallBackHook;
