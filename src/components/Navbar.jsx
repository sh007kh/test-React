import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="flex flex-col px-8 py-6 w-[85vw] max-w-[1120px] mx-auto my-0 lg:flex-row lg:justify-between lg:items-center">
        <h1 className="text-cyan-500 mb-6">sh master</h1>
        <div className="nav-header flex flex-col gap-4 lg:flex-row">
          <NavLink to="/" className="nav-link">
            home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            about
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            news letter
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
