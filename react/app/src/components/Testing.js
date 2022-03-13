import React, { useEffect, useState } from "react";

const Testing = (props) => {
  return (
    <div className="flex flex-col space-y-6">
      <h1 className="text-3xl">{props.title}</h1>
      <p className="text-lg">{props.children}</p>
    </div>
  );
};

export default Testing;
