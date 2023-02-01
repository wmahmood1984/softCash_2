// import { useWeb3React } from "@web3-react/core";
import React from "react";
import { Link } from "react-router-dom";
import { AiFillBell, AiTwotoneSetting } from "react-icons/ai";
import SearchBar from "./components/SearchBar";
import { BiChevronDown } from "react-icons/bi";
const Header = ({ setOpen }) => {
  return (
    <div className=" fixed w-full bg-primary z-10">
      <div className="px-6 py-5 border-b border-b-gray-300 flex items-center justify-between">
        <Link
          to="/"
          className="grid grid-flow-col gap-2 justify-start items-center "
        >
          <img src="/assets/logo.png" className="w-60" alt="" />
        </Link>
        <SearchBar />
        <div className=" grid grid-flow-col gap-2 items-center  text-white">
          <button className="text-white border border-primary-border rounded-full h-7 w-7  bg-transparent grid place-content-center text-sm">
            <AiTwotoneSetting />
          </button>
          <button className="text-white border border-primary-border rounded-full h-7 w-7  bg-transparent grid place-content-center text-sm">
            <AiFillBell />
          </button>
          <button className="bg-[#373632] p-1  grid grid-flow-col gap-2 items-center text-sm">
            <img src="/assets/icons/pane.png" alt="" className="w-4" />
            <p>Audi</p>
            <BiChevronDown className="text-xl" />
          </button>
          <button className="bg-[#373632] p-1  grid grid-flow-col gap-2 items-center text-sm">
            <img src="/assets/icons/bnb.png" alt="" className="w-4" />
            <p>BSC</p>
            <BiChevronDown className="text-xl" />
          </button>
          <button className="bg-[#07A0E3]  text-black text-sm px-3 py-1  ">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

// function CustomLink({ children, to, className, ...props }) {
//   let resolved = useResolvedPath(to);
//   let match = useMatch({ path: resolved.pathname, end: true });

//   return (
//     <>
//       <Link
//         className={` transition-all duration-300 ${
//           match ? " text-primary  " : "text-[#dde3e3]"
//         } ${className}`}
//         to={to}
//         {...props}
//       >
//         {children}
//       </Link>
//     </>
//   );
// }
