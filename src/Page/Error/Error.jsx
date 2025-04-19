import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className=" w-11/12 mx-auto mt-100 space-y-4 text-center">
      <h1 className="text-2xl font-bold">Not found (404)</h1>
      <p>
        If you expected to see a file here you may not have permission to access <br />
        it. Please ask the owner to update the file permissions and try again.
      </p>
      <Link to={"/"}>
        <button className="btn">Close Tab</button>
      </Link>

      <Outlet></Outlet>
    </div>
  );
};

export default Error;
