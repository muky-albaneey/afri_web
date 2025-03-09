"use client"
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";
import './navbar.css'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#ffffff] shadow-md px-6 py-4 fixed top-0 left-0 w-full z-50" id={isOpen ? "overlay_bg" : ""}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold">Afrigora</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg">
          <a href="#" className="hover:text-gray-600">Home</a>
          <a href="#" className="hover:text-gray-600">Services</a>
          <a href="#" className="hover:text-gray-600">About Us</a>
          <a href="#" className="hover:text-gray-600">Location</a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="border-1 border-[#8B4513] text-brown-600 px-16 py-2 rounded-md">
            Sign Up
          </button>

          <button className="bg-[#8B4513] text-white px-16 py-2 rounded-md">
            Sign In
          </button>
          <FiSearch className="text-xl cursor-pointer" />

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* <FiSearch className="text-xl cursor-pointer" /> */}
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiMenu className="text-2xl" /> : <HiMenu className="text-2xl" />}
          </button>
          <FiSearch className="text-xl cursor-pointer" />

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="w-[80%]  md:hidden absolute top-16  left-13 bg-white shadow-lg py-2  mx-auto" id="mobile_nav">
          <ul className="w-[100%] m-auto flex flex-col items-center justify-center space-y-4 text-lg">
            <li className="active:bg-[#C5A289] hover:bg-[#C5A289] hover:text-white active:text-white w-full text-center p-2 "><a href="#" className=" ">Home</a></li>
            <li className="active:bg-[#C5A289] hover:bg-[#C5A289] hover:text-white active:text-white w-full text-center p-2 "><a href="#" className="">Services</a></li>
            <li className="active:bg-[#C5A289] hover:bg-[#C5A289] hover:text-white active:text-white w-full text-center p-2 "><a href="#">About Us</a></li>
            <li className="active:bg-[#C5A289] hover:bg-[#C5A289] hover:text-white active:text-white w-full text-center p-2 "><a href="#" className="">Location</a></li>
            <li className="active:bg-[#C5A289] hover:bg-[#C5A289] hover:text-white active:text-white w-full text-center p-2 "><a href="#" className="">Sign up</a></li>
            <li className="active:bg-[#C5A289] hover:bg-[#C5A289] hover:text-white active:text-white w-full text-center p-2 "><a href="#" className="">Sign in</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
