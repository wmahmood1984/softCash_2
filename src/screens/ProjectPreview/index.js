import React from "react";

import Banner from "../../components/Banner";
import Left from "./components/Left";
import Right from "./components/Right";

const ProjectPreview = () => {
  return (
    <div className=" text-[#B3B3B3] grid grid-cols-1">
      <Banner />
      <div className="grid grid-cols-12 gap-6 ">
        <div className=" col-span-8">
          <Left />
        </div>
        <div className="col-span-4">
          <Right />
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
