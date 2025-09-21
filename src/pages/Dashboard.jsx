// src/pages/Dashboard.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Column from "../components/Column";
import AddTaskModal from "../components/AddTaskModal";
import { useSelector, useDispatch } from "react-redux";
import { addTask, moveTask } from "../redux/tasksSlice";
import { nanoid } from "nanoid";
import { DragDropContext } from "react-beautiful-dnd";

const Dashboard = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState("todo");

  const columns = [
    { id: "todo", title: "To Do" },
    { id: "inprogress", title: "In Progress" },
    { id: "done", title: "Done" },
  ];

  const tasksByStatus = (status) => tasks.filter((t) => t.status === status);

  const handleAddTask = (task) => {
    dispatch(addTask({ ...task, id: nanoid() }));
  };

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    dispatch(
      moveTask({
        taskId: draggableId,
        fromStatus: source.droppableId,
        toStatus: destination.droppableId,
        toIndex: destination.index,
      })
    );
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex h-screen bg-grayBg">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="p-6 flex-1 overflow-y-auto">
            <div className="flex gap-6">
              {columns.map((col) => (
                <Column
                  key={col.id}
                  title={col.title}
                  tasks={tasksByStatus(col.id)}
                  status={col.id}
                  onAddTask={(status) => {
                    setModalStatus(status);
                    setModalOpen(true);
                  }}
                />
              ))}
            </div>
          </main>
        </div>

        <AddTaskModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onAdd={handleAddTask}
          initialStatus={modalStatus}
        />
      </div>
    </DragDropContext>
  );
};

export default Dashboard;
