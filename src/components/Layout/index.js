// import { ClickAwayListener } from "@mui/material";
import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex bg-primary">
      <div className="min-h-screen bg-gray flex flex-col flex-1">
        <Header setOpen={setOpen} />
        <div className="flex ">
          <div className="w-[260px]">
            <Sidebar />
          </div>
          <div className="  flex-1 max-w-full px-6 py-4 mt-24">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
