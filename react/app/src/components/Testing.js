import React, { useEffect, useState } from "react";
import axios from "axios";

const Testing = (props) => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    axios.get("https://api.quotable.io/random").then((response) => {
      console.log(response.data);
      setQuote(response.data);
    });
  }, []);

  return (
    <div className="flex flex-col space-y-4 max-w-lg">
      {quote ? (
        <>
          <h1 className="text-xl">{quote.author}</h1>
          <p className="text-md">{quote.content}</p>
        </>
      ) : (
        "fetching..."
      )}
    </div>
  );
};

export default Testing;
