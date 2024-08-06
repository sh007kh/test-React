import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router-dom";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Navbar />
      <section className="w-[85vw] max-w-[1120px] px-8 py-20 mx-auto my-0">
        {isPageLoading ? <div className="loading" /> : <Outlet />}
      </section>
    </>
  );
};

export default HomeLayout;
