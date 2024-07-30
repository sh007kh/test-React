import React from "react";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";
const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div className="error-page">
        <img src={img} alt="not-found" />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">Back Home</Link>
      </div>
    );
  }
  return (
    <div>
      <h3>Something went wrong</h3>
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default Error;
