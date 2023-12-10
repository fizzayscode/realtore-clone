import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const pathname = useLocation();
  return (
    <div className="bg-white shadow-lg sticky left-0 top-0 z-55">
      <header className="flex justify-between max-w-5xl mx-auto  items-center">
        <img
          className="max-w-[140px]"
          src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
          alt=""
        />
        <ul className="flex gap-4 text-sm text-gray-500  font-semibold ">
          <Link
            className={` py-3 ${
              pathname.pathname == "/" &&
              "border-b-2  border-red-600 text-gray-900  "
            }`}
            to={"/"}
          >
            Home
          </Link>

          <Link
            className={` py-3 ${
              pathname.pathname == "/offers" &&
              "border-b-2 text-gray-900  border-red-600"
            }`}
            to={"/offers"}
          >
            Offers
          </Link>

          <Link
            className={` py-3 ${
              pathname.pathname == "/login" &&
              "border-b-2 text-gray-900 border-red-600"
            }`}
            to={"/login"}
          >
            Sign in
          </Link>
        </ul>
      </header>
    </div>
  );
};

export default Header;
