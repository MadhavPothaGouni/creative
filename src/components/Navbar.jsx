// src/components/Navbar.jsx
import React from "react";
import {
  MagnifyingGlassIcon,
  BellIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-white shadow-card flex items-center justify-between px-6">
      {/* Search Bar */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search tasks..."
            className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purplePrimary"
          />
          <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-2.5 text-gray-400" />
        </div>
      </div>

      {/* Right-side icons */}
      <div className="flex items-center gap-6">
        <BellIcon className="h-6 w-6 text-gray-600 hover:text-purplePrimary cursor-pointer" />
        <Cog6ToothIcon className="h-6 w-6 text-gray-600 hover:text-purplePrimary cursor-pointer" />
        <UserCircleIcon className="h-8 w-8 text-gray-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
