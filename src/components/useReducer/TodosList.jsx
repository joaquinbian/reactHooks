import React from "react";
import TodoItem from "./TodoItem";

const TodosList = ({ todos, handleToggle, deleteTodo }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((t, i) => (
        <TodoItem
          todo={t}
          index={i}
          key={t.id}
          handleToggle={handleToggle}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodosList;
