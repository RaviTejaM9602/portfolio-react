import React from "react";
import Logo from "../assets/ravi.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] text-gray-300 flex justify-between items-center px-4 bg-[#0a192f]">
      <div>
        <img src={Logo} style={{ width: "50px" }} alt="Logo Image" />
      </div>
      {/* menu */}
      <div className="">
        <ul  className="flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
     {  /* Hamburger mobile */}
      <div className="hidden">
        <FaBars />
      </div>
      {/* Mobile mobile */}
      <ul className="hidden">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
      {/* Social Icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
