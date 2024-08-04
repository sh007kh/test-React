import React from "react";
import { useRouteError } from "react-router-dom";

const SingleError = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h3>{error.response.status}</h3>
      <p>{error.message}</p>
    </div>
  );
};

export default SingleError;
