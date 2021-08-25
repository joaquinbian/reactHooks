import React, { useEffect, useState } from "react";

const Message = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const { x, y } = state;
  useEffect(() => {
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.x };
      setState(coords);
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <div>
      <h1>Hola soy joaquin</h1>
      <h3>x: {x}</h3>
      <h3>y: {y}</h3>
    </div>
  );
};

export default Message;
