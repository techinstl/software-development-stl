import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
const Testing = (props) => {
  const navigate = useNavigate();
  const { message } = useParams();

  return (
    <div className="flex flex-col space-y-4 max-w-lg">
      {message}
    </div>
  );
};

export default Testing;
