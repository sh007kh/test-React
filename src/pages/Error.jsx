import React from "react";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";
const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div className="error-page w-[85vw] max-w-[1120px] px-8 py-20 mx-auto my-0 flex flex-col justify-center items-center ">
        <img src={img} alt="not-found" className="pt-20" />
        <h3 className="pt-8 pb-4 text-center">Ohh! Page Not Found</h3>
        <p className="text-center">
          We can't seem to find the page you're looking for
        </p>
        <Link
          to="/"
          className="self-start text-xl mt-8 text-cyan-500 transition-all duration-300 ease-in-out hover:text-cyan-700"
        >
          Back Home
        </Link>
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
