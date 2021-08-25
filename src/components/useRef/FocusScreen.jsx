import React, { useRef } from "react";

const FocusScreen = () => {
  const inputRef = useRef(); //cuando cambiamos el valor del useRef no hacemos
  // que el componente se re-renderice otra vez, solo
  // mantenemos la referencia al mismo
  const handleClick = () => {
    inputRef.current.select();
  };
  return (
    <div>
      <h1>Hola voy a ser el use ref</h1>
      <input className="form-control" placeholder="your name" ref={inputRef} />
      <button className="btn btn-outline-primary mt-2" onClick={handleClick}>
        focus
      </button>
    </div>
  );
};

export default FocusScreen;
