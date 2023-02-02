import React from "react";
import LaunchPad from "./components/LaunchPad";

const LaunchPadList = () => {
  return (
    <div className=" text-white">
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <LaunchPad />
        <LaunchPad />
        <LaunchPad />
        <LaunchPad />
        <LaunchPad />
        <LaunchPad />
        <LaunchPad />
        <LaunchPad />
        <LaunchPad />
      </div>
    </div>
  );
};

export default LaunchPadList;
