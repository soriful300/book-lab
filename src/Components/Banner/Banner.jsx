import React from "react";

const Banner = () => {
  return (
    <div className="hero bg-base-200 mt-4 rounded-2xl">
      <div className="hero-content flex-row-reverse lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>

          <button className="btn bg-[#23BE0A] text-white mt-8">View The List</button>
        </div>
        <img src="/public/pngwing.png" className="max-w-sm rounded-lg " />
      </div>
    </div>
  );
};

export default Banner;
