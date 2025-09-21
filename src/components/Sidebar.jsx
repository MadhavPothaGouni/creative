// src/components/Sidebar.jsx
import React from "react";
import {
  HomeIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const mainMenu = [
    { name: "Home", icon: HomeIcon },
    { name: "Messages", icon: ChatBubbleLeftRightIcon },
    { name: "Tasks", icon: ClipboardDocumentListIcon },
    { name: "Members", icon: UserGroupIcon },
    { name: "Settings", icon: Cog6ToothIcon },
  ];

  const projects = [
    "Mobile App",
    "Website Redesign",
    "Design System",
    "Wireframes",
  ];

  return (
    <div className="w-64 h-screen bg-white border-r flex flex-col justify-between">
      {/* Top section */}
      <div>
        {/* Project logo + back */}
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <h1 className="text-lg font-semibold text-gray-800">Project M.</h1>
          <button className="text-gray-500 hover:text-gray-800">←</button>
        </div>

        {/* Main Menu */}
        <nav className="mt-6">
          {mainMenu.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-3 px-6 py-2 text-gray-600 hover:bg-purple-50 hover:text-purple-600 cursor-pointer transition-colors"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </div>
          ))}
        </nav>

        {/* My Projects */}
        <div className="mt-8 px-6">
          <h2 className="text-xs font-semibold text-gray-400 uppercase mb-3">
            My Projects
          </h2>
          <div className="space-y-1">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer ${
                  proj === "Mobile App"
                    ? "bg-purple-100 text-purple-700 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span>{proj}</span>
                {proj === "Mobile App" && (
                  <span className="text-purple-600">•••</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Thoughts Time card */}
      <div className="bg-purple-50 rounded-lg mx-6 mb-6 p-4 text-center">
        <div className="w-12 h-12 bg-yellow-200 rounded-full mx-auto mb-3 flex items-center justify-center">
          💡
        </div>
        <h3 className="text-sm font-semibold text-gray-700 mb-1">
          Thoughts Time
        </h3>
        <p className="text-xs text-gray-500 mb-3">
          We don’t have any notice for you, till then you can share your
          thoughts with your peers.
        </p>
        <button className="w-full bg-white text-purple-600 border border-purple-200 rounded-md py-1 text-sm font-medium hover:bg-purple-100">
          Write a message
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
