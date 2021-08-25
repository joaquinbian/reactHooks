import React, { useEffect, useReducer, useState } from "react";
import useForm from "../../hooks/useForm";
import { reducer } from "./reducer";
import TodoAdd from "./TodoAdd";
import TodosList from "./TodosList";

import "./todos.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
  //si hay todos retorna los todos, sino, un array vacio, porque si no hay queda null
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(reducer, [], init);
  //la funcion init ayuda a computar el estado inicial para que funcione mas rapido el componente
  //y la funcion no se esté ejecutando

  //la funcion init se llama y lo que sea que retorne va a ser el initial state

  //el dispatch es el mismo de redux, le mandamos una action y el sabe que hacer

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // const handleSubmit = (e) => {
  //   const action = {
  //     type: "add",
  //     payload: todo,
  //   };

  //   dispatch(action);
  // };

  const deleteTodo = (id) => {
    const action = {
      type: "delete",
      payload: id,
    };
    dispatch(action);
  };

  const handleToggle = (id) => {
    const action = {
      type: "toggle",
      payload: id,
    };
    dispatch(action);
  };

  const handleAdd = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  return (
    <div>
      <h1>Todo app({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodosList
            todos={todos}
            handleToggle={handleToggle}
            deleteTodo={deleteTodo}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
