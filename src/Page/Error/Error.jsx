import React from "react";
import { Outlet } from "react-router";

const Error = () => {
  return (
    <div>
      <h1>Error Please Check Log</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Error;
