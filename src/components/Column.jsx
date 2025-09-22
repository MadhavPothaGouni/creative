// src/components/Column.jsx
import React from "react";
import TaskCard from "./TaskCard";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Droppable, Draggable } from "react-beautiful-dnd";

const Column = ({ title, color, tasks, status, onAddTask }) => {
  return (
    <div className="flex-1 bg-gray-50 rounded-lg p-4">
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
      <Droppable droppableId={status}>
        {(provided) => (
          <div
            className="space-y-4 min-h-[50px]"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TaskCard task={task} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
