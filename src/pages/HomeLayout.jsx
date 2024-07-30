import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <section className="w-[85vw] max-w-[1120px] px-8 py-20 mx-auto my-0">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
