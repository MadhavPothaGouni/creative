// src/components/Sidebar.jsx
import React from "react";
import {
  HomeIcon,
  UserIcon,
  ChatBubbleLeftIcon,
  BellIcon,
  Cog6ToothIcon,
  FolderIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: HomeIcon },
    { name: "Teams", icon: UserIcon },
    { name: "Messages", icon: ChatBubbleLeftIcon },
    { name: "Notifications", icon: BellIcon },
    { name: "Projects", icon: FolderIcon },
    { name: "Settings", icon: Cog6ToothIcon },
  ];

  return (
    <div className="w-64 h-screen bg-gray-100 shadow-card p-5 flex flex-col">
      <h1 className="text-2xl font-bold mb-8">Creative Upaay</h1>
      <nav className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-purplePrimary hover:text-white cursor-pointer transition-colors"
          >
            <item.icon className="h-6 w-6" />
            <span className="font-medium">{item.name}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
