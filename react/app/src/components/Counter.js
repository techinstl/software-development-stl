import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 2);
  };
  
  return <button onClick={handleClick}>Counter: {counter}</button>;
};
