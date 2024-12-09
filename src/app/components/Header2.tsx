"use client"
import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // For Hamburger and Close icons

const Header2: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false); // To manage the menu toggle

  return (
    <header className="bg-white text-black py-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        {/* Left Side: Hamburger Icon and SHOP.CO (Mobile) */}
        <div className="flex items-center space-x-4 md:hidden"> {/* Only visible on mobile */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
          <div className=" text-xl sm:text-3xl font-extrabold flex-shrink-0">
            <a href="#">SHOP.CO</a>
          </div>
        </div>

        {/* Left Side: SHOP.CO (Desktop) */}
        <div className="hidden md:flex text-3xl font-extrabold flex-shrink-0">
          <a href="#">SHOP.CO</a>
        </div>

        {/* Navigation Links (Toggle visibility on mobile) */}
        <div className={`flex flex-wrap items-center space-x-6 md:space-x-8 mt-2 md:mt-0 ${menuOpen ? 'block' : 'hidden'} md:flex`}>
          {/* Shop with Arrow Icon */}
          <div className="flex items-center space-x-1">
            <a href="#" className="hover:text-gray-400">Shop</a>
            <MdOutlineKeyboardArrowDown className="text-black" />
          </div>

          <a href="#" className="hover:text-gray-400">On Sale</a>
          <a href="#" className="hover:text-gray-400">New Arrivals</a>
          <a href="#" className="hover:text-gray-400">Brands</a>
        </div>

        {/* On desktop, add a border around the search icon */}
          <div className="hidden md:flex items-center space-x-2 border-2 border-gray-400 rounded-full px-4 py-2 w-full sm:w-80 md:w-96">
            <FiSearch className="text-gray-400" />
          <input type="text"
          placeholder="Search for Products..."
          className='text-black w-full rounded-md'/>
          </div>

        {/* Right Side: Cart and Profile Icons */}
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          {/* Cart Icon */}
          <div className="cursor-pointer">
            <FiShoppingCart className="text-xl hover:text-gray-400" />
          </div>

          {/* Profile Icon */}
          <div className="cursor-pointer">
            <CgProfile className="text-xl hover:text-gray-400" />
          </div>
        </div>
      </div>

      {/* Mobile Menu (When Hamburger is clicked) */}
      <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-white shadow-md`}>
        <div className="flex flex-col items-center space-y-4 p-4">
          <a href="#" className="text-xl">Shop</a>
          <a href="#" className="text-xl">On Sale</a>
          <a href="#" className="text-xl">New Arrivals</a>
          <a href="#" className="text-xl">Brands</a>
        </div>
      </div>
    </header>
  );
};

export default Header2;
