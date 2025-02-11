import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-col md:flex-row w-full bg-slate-800 text-white justify-between items-center h-auto md:h-[10vh] p-4 md:p-6 shadow-lg">
      <div className="image mb-4 md:mb-0">
        <img
          className="h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-full"
          src="https://www.notioninsurance.com/images/broker-logo.png"
          alt="Logo"
        />
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex-row justify-evenly items-center gap-2 md:gap-8 font-light text-sm md:text-base w-full md:w-auto`}
      >
        <a href="#" className="hover:text-gray-400 transition duration-300">
          Home
        </a>
        <a href="#" className="hover:text-gray-400 transition duration-300">
          About us
        </a>
        <a href="#" className="hover:text-gray-400 transition duration-300">
          Make a Claim
        </a>
        <a href="#" className="hover:text-gray-400 transition duration-300">
          Contact us
        </a>
      </div>
      <div className="nav-last flex flex-col md:flex-row justify-evenly items-center gap-2 md:gap-4 mt-2 md:mt-0">
        <button className="p-2 rounded-md outline-none border font-bold text-[#1976d2] bg-white hover:bg-gray-100 transition duration-300">
          Log in
        </button>
        <button className="p-2 rounded-md border bg-[#1976d2] text-white font-bold hover:bg-[#155a9a] transition duration-300">
          Become a Posp
        </button>
      </div>
    </nav>
  );
};

export default Nav;