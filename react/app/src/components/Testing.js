import React, { useEffect, useState } from "react";

const Testing = (props) => {

  if(props.loading){
    return <h1>Loading...</h1>
  }

  return (
    <div className="flex flex-col space-y-6 border-2 px-4 py-2">
      <p className="text-lg">{props.children}</p>
      {props.completed ? "Completed!" : "Not Completed!"}
    </div>
  );
};

export default Testing;
