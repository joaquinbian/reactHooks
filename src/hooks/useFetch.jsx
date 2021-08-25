import React, { useState, useEffect, useRef } from "react";

const useFetch = (url) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      console.log("sali");
      isMounted.current = false;
    };
  }, []);
  useEffect(() => {
    console.log("entre");
    fetch(url)
      .then((data) => data.json())
      .then((res) => {
        if (isMounted.current) {
          console.log("entre aquí");
          setTimeout(() => {
            if (isMounted.current) {
              setState({ ...state, data: res, loading: false });
            } else {
              console.log("el componente esta desmontado ahora");
            }
          }, 4000);
        } else {
          console.log("a ver que pasa");
        }
      });
  }, [url]);
  return state;
};

export default useFetch;
