import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
const Testing = (props) => {
  const navigate = useNavigate();
  const { message } = useParams();

  const handleClick = () => {
    navigate("/")
  }

  return (
    <div className="flex flex-col space-y-4 max-w-lg">
      {message}
      <button onClick={handleClick}>Back</button>
    </div>
  );
};

export default Testing;
