import React from "react";
import useFetch from "../../hooks/useFetch";
import useCounter from "../../hooks/useCounter";

const MultipleCustomHooks = () => {
  const { increment, decrement, state } = useCounter(1);
  const { data, loading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );
  const { author, quote } = !!data && data[0];
  // console.log(data);
  // console.log("me renderizo");
  return (
    <div>
      <h1>Breaking bad cuotes</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote d-flex flex-column">
          <p className="align-self-end">{quote}</p>
          <footer className="blockquote-footer align-self-end">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={increment}>
        next quote
      </button>
      <button className="btn btn-primary" onClick={decrement}>
        last quote
      </button>
    </div>
  );
};

export default MultipleCustomHooks;
