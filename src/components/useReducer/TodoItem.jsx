import React from "react";

const TodoItem = ({
  todo: { todo, done, id },
  index,
  handleToggle,
  deleteTodo,
}) => {
  console.log(todo);
  return (
    <li className="list-group-item d-flex justify-content-evenly align-items-center">
      <p className={done ? `complete text-center m-0` : `text-center m-0`}>
        {index + 1}) {todo}
      </p>
      <div className="w-25 d-flex justify-content-around ">
        <button
          onClick={() => handleToggle(id)}
          className={done ? `btn btn-danger` : `btn btn-success`}
        >
          {done ? "to do" : "done"}
        </button>
        <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
          x
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
