// src/components/Navbar.jsx
import React from "react";
import {
  MagnifyingGlassIcon,
  BellIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-white border-b flex items-center justify-between px-6">
      {/* Search Bar */}
      <div className="flex items-center gap-3 w-1/3">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search for anything..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
          />
          <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-2.5 text-gray-400" />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        {/* Notifications + Settings */}
        <BellIcon className="h-6 w-6 text-gray-600 hover:text-purple-600 cursor-pointer" />
        <Cog6ToothIcon className="h-6 w-6 text-gray-600 hover:text-purple-600 cursor-pointer" />

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <h4 className="text-sm font-semibold text-gray-700">Palak Jain</h4>
            <p className="text-xs text-gray-400">Rajasthan, India</p>
          </div>
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="h-10 w-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
