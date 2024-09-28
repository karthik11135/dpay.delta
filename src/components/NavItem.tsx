import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FoodIcon, HomeIcon, MoreIcon, TransactionIcon } from "./ui/Icons";

const NavItem = () => {
  const location = useLocation();


  return (
    <>
      <NavLink to="/" className={` flex flex-col cursor-pointer w-2/6`}>
        <div className="flex mb-1 b">
          <div className="w-fit mx-auto justify-self-center stroke-green-800">
            {/* @ts-ignore */}
            <HomeIcon
              activeProp={location.pathname ? location.pathname === "/" : false}
            />
          </div>
        </div>
        <div
          className={` font-light text-center ${
            location.pathname === "/" ? "text-greenColor" : "text-white"
          }`}
        >
          Home
        </div>
      </NavLink>
      <NavLink to="/stalls" className={` flex flex-col cursor-pointer w-2/6`}>
        <div className="flex mb-1 b">
          <div className="w-fit mx-auto justify-self-center stroke-green-800">
            <FoodIcon activeProp={location.pathname === "/stalls"} />
          </div>
        </div>
        <div
          className={` font-light text-center ${
            location.pathname === "/stalls" ? "text-greenColor" : "text-white"
          }`}
        >
          Stalls
        </div>
      </NavLink>
      <NavLink
        to="/transactions"
        className={` flex flex-col cursor-pointer w-2/6`}
      >
        <div className="flex mb-1 b">
          <div className="w-fit mx-auto justify-self-center stroke-green-800">
            <TransactionIcon
              activeProp={location.pathname === "/transactions"}
            />
          </div>
        </div>
        <div
          className={` font-light text-center  ${
            location.pathname === "/transactions" ? "text-greenColor" : "text-white"
          }`}
        >
          Transactions
        </div>
      </NavLink>
      <NavLink to="/more" className={` flex flex-col cursor-pointer w-2/6`}>
        <div className="flex mb-1 b">
          <div className="w-fit mx-auto justify-self-center stroke-green-800">
            <MoreIcon activeProp={location.pathname === "/more"} />
          </div>
        </div>
        <div
          className={` font-light text-center ${
            location.pathname === "/more" ? "text-greenColor" : "text-white"
          }`}
        >
          More
        </div>
      </NavLink>
    </>
  );
};

export default NavItem;
