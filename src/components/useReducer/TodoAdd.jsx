import React from "react";
import useForm from "../../hooks/useForm";

const TodoAdd = ({ handleAdd }) => {
  const [values, handleInputValues, cleanForm] = useForm({
    description: "",
  });
  const { description } = values;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim() < 1) {
      return alert("escribe algo antes de agregar");
    }

    const todo = {
      id: Math.random() * 1000,
      todo: description,
      done: false,
    };

    handleAdd(todo);
    cleanForm();
  };
  return (
    <>
      <h4>agregar todo</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          id="input"
          type="text"
          name="description"
          placeholder="aprender..."
          autoComplete="off"
          value={description}
          onChange={handleInputValues}
        />
        <button className="btn btn-success ml-3" type="submit">
          agregar
        </button>
      </form>
    </>
  );
};

export default TodoAdd;
