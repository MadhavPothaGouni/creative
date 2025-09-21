// src/components/TaskCard.jsx
import React from "react";
import { ChatBubbleLeftEllipsisIcon, PaperClipIcon } from "@heroicons/react/24/outline";

const TaskCard = ({ task }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      {/* Priority + menu */}
      <div className="flex items-center justify-between mb-2">
        <span
          className={`text-xs font-medium px-2 py-1 rounded ${
            task.priority === "High"
              ? "bg-red-100 text-red-600"
              : task.priority === "Low"
              ? "bg-orange-100 text-orange-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {task.priority}
        </span>
        <button className="text-gray-400 hover:text-gray-600">⋮</button>
      </div>

      {/* Title + Description */}
      <h4 className="font-semibold text-gray-800 mb-1">{task.title}</h4>
      <p className="text-sm text-gray-500 mb-3">{task.description}</p>

      {/* Avatars + Stats */}
      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {task.assignees?.map((a, idx) => (
            <img
              key={idx}
              src={a}
              alt="assignee"
              className="h-6 w-6 rounded-full border-2 border-white"
            />
          ))}
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <ChatBubbleLeftEllipsisIcon className="h-4 w-4" />{" "}
            {task.comments || 0}
          </span>
          <span className="flex items-center gap-1">
            <PaperClipIcon className="h-4 w-4" /> {task.files || 0}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
