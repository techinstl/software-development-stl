import React, { useEffect, useState } from "react";

const Testing = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {

  }, []);

  const handleClick = () => {
    setCounter((currentValue) => currentValue + 1);
  };

  return <button onClick={handleClick}>{counter}</button>;
};

export default Testing;
