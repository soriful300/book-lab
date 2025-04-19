import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import Home from "../Page/Home/Home";

const Root = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
