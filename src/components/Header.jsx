import React from 'react';
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';

const Header = () => {
  const wishlistCount = 4;

  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-black">Exclusive</h1>


        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">
          <a href="#" className="hover:text-black transition-colors">Home</a>
          <a href="#" className="hover:text-black transition-colors">Contact</a>
          <a href="#" className="hover:text-black transition-colors">About</a>
          <a href="#" className="hover:text-black transition-colors">Sign Up</a>
        </nav>

        <div className="flex items-center gap-6">

          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-gray-100 text-sm rounded-md px-4 py-2 pl-10 w-64 outline-none focus:ring-2 focus:ring-gray-300"
            />
            <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
          </div>

          <div className="relative">
            <FiHeart className="text-2xl cursor-pointer hover:text-red-500 transition-colors" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {wishlistCount}
            </span>
          </div>


          <FiShoppingCart className="text-2xl cursor-pointer hover:text-gray-700 transition-colors" />


          <FiUser className="text-2xl cursor-pointer hover:text-gray-700 transition-colors" />
        </div>
      </div>
    </header>

    
  );
};

export default Header;
