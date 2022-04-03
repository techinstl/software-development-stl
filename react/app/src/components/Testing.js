import React, { useEffect, useState } from "react";
import axios from 'axios'

const Testing = (props) => {

  const [quote, setQuote] = useState(null);

  useEffect(() => {
    axios.get("https://www.api.quotable.io/random").then(response => {
      console.log(response.data);
      setQuote(response.data);
    })
  }, []);

  return (
    <>
      <h1>Quote:</h1>
    </>
  );
};

export default Testing;
