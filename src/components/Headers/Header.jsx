import React from "react";
import logo from "@/assets/images/logo.png";
import Rfb from "../buttons/rfb";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-16 z-40">
      <nav className="shadow bg-white">
        <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white md:text-3xl">
              <Link to={"/"}>
                <img src={logo} alt="DWJOBS" width="120px" />
              </Link>
            </div>
            <div className="md:hidden">
              <button
                type="button"
                className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path
                    className="hidden"
                    d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
                  />
                  <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="md:flex flex-col md:flex-row -mx-2 hidden">
            <Link to={"/jobs"}>
              <Rfb title="Jobs" color="bg-white" textColor={"text-primary"} />
            </Link>
            <Link to={"/recruit"}>
              <Rfb
                title="Recruit"
                color="bg-white"
                textColor={"text-primary"}
              />
            </Link>
            <Link to={"/login"}>
              <Rfb title="Login" color="bg-white" textColor={"text-primary"} />
            </Link>
            <Link to={"/join"}>
              <Rfb title="Join" color="bg-primary" textColor={"text-white"} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
