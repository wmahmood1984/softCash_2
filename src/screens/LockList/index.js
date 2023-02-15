import React, { useState } from "react";
import CustomInput2 from "../../components/CustomInput2";
import AllList from "./components/AllList";
import MyList from "./components/MyList";

const LockList = () => {
  const [selected, setSelected] = useState(0);
  const tabs = ["All", "My Locks"];
  return (
    <div className="my-6">
      <p className=" text-lg font-semibold mb-6">Lock List</p>
      <CustomInput2 placeholder={"Search by token address"} />
      <div className="mt-2 grid grid-flow-col gap-3 justify-end items-center mb-6">
        {tabs.map((token, index) => (
          <button
            onClick={() => setSelected(index)}
            key={index}
            className={` border-b  ${
              selected === index
                ? "text-primary-text border-primary-border"
                : " border-transparent"
            }`}
          >
            {token}
          </button>
        ))}
      </div>
      {selected === 0 ? <AllList /> : <MyList />}
    </div>
  );
};

export default LockList;
