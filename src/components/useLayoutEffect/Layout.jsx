import React from "react";
import useFetch from "../../hooks/useFetch";
import useCounter from "../../hooks/useCounter";

const Layout = () => {
  const { increment, decrement, state } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );
  const { quote } = !!data && data[0];

  return (
    <div>
      <h1>useLayoutEffect</h1>
      <h3>Breaking bad cuotes</h3>
      <hr />

      <blockquote className="blockquote d-flex flex-column">
        <p className="align-self-end">{quote}</p>
      </blockquote>

      <button className="btn btn-primary" onClick={increment}>
        next quote
      </button>
      <button className="btn btn-primary" onClick={decrement}>
        last quote
      </button>
    </div>
  );
};

export default Layout;
