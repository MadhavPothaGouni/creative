// src/components/Column.jsx
import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";

const Column = ({ title, tasks, status, onAddTask }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg w-80 flex flex-col gap-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold text-gray-800">{title}</h2>
        <button
          onClick={() => onAddTask(status)}
          className="text-purplePrimary font-bold text-sm hover:underline"
        >
          + Add
        </button>
      </div>

      <Droppable droppableId={status}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`flex flex-col gap-3 min-h-[50px] ${
              snapshot.isDraggingOver ? "bg-purple-50" : ""
            } p-2 rounded-lg transition-colors`}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`transition-transform ${
                      snapshot.isDragging ? "scale-105" : ""
                    }`}
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
