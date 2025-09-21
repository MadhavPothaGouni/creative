// src/components/TaskCard.jsx
import React from "react";

const priorityColors = {
  low: "bg-low text-yellow-800",
  high: "bg-high text-red-800",
  completed: "bg-completed text-green-800",
};

const TaskCard = ({ task }) => {
  return (
    <div className="bg-grayCard rounded-lg p-4 shadow-card flex flex-col gap-2">
      <h3 className="font-semibold text-gray-800">{task.title}</h3>
      {task.description && (
        <p className="text-gray-600 text-sm">{task.description}</p>
      )}
      <div className="flex justify-between items-center mt-2">
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${
            priorityColors[task.priority] || "bg-gray-200 text-gray-700"
          }`}
        >
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
        </span>
        <span className="text-gray-400 text-xs">{task.status}</span>
      </div>
    </div>
  );
};

export default TaskCard;
