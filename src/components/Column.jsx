// src/components/Column.jsx
import React from "react";
import TaskCard from "./TaskCard";
import { PlusIcon } from "@heroicons/react/24/outline";

const Column = ({ title, color, tasks, status, onAddTask }) => {
  return (
    <div className="flex-1 bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${color}`}></span>
          <h3 className="text-sm font-semibold text-gray-700">
            {title} <span className="text-gray-400">({tasks.length})</span>
          </h3>
        </div>
        <button
          onClick={() => onAddTask(status)}
          className="p-1 rounded-md hover:bg-gray-200"
        >
          <PlusIcon className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      {/* Task Cards */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;
