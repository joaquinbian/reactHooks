import React, { memo } from "react";

export const Small = memo(({ val }) => {
  //el memo renderiza este componente solo si cambia realmente, porque
  //si no lo pondemos así, cada vez que se renderize el componente que
  //sea el padre de este, este se va a renderizar sin importar si sigue todo
  // igual y no hace falta, y si estamos haciendo un http request, podría
  // empeorar el rendimiento, por eso con memo, nos aseguramos de que se renderice
  // solo cuando cambie algo

  console.log("me volví a rendereizar");
  return <small>{val}</small>;
});
