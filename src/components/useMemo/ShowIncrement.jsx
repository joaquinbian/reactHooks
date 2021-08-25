import React, { memo } from "react";

const ShowIncrement = memo(({ increment }) => {
  //increment es una funcion
  console.log("me volvi a renderizar");
  return (
    <div>
      <button className="btn btn-primary" onClick={increment}>
        Increment
      </button>
    </div>
  );
});

export default ShowIncrement;
