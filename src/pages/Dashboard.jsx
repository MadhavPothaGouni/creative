// src/pages/Dashboard.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Column from "../components/Column";
import AddTaskModal from "../components/AddTaskModal";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import { nanoid } from "nanoid";

const Dashboard = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState("todo");

  const columns = [
    { id: "todo", title: "To Do", color: "bg-purple-500" },
    { id: "inprogress", title: "On Progress", color: "bg-orange-400" },
    { id: "done", title: "Done", color: "bg-green-500" },
  ];

  const tasksByStatus = (status) => tasks.filter((t) => t.status === status);

  const handleAddTask = (task) => {
    dispatch(addTask({ ...task, id: nanoid() }));
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />

        {/* Header Section */}
        <div className="flex items-center justify-between px-6 py-4 border-b bg-white">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Mobile App</h2>
            <div className="flex gap-3 mt-2">
              <button className="px-3 py-1 border rounded-md text-sm text-gray-600 hover:bg-gray-100">
                Filter
              </button>
              <button className="px-3 py-1 border rounded-md text-sm text-gray-600 hover:bg-gray-100">
                Today
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Invite Avatars */}
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((n) => (
                <img
                  key={n}
                  src={`https://i.pravatar.cc/40?img=${n}`}
                  alt="user"
                  className="h-8 w-8 rounded-full border-2 border-white"
                />
              ))}
              <div className="h-8 w-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-medium border-2 border-white">
                +2
              </div>
            </div>
            <button className="text-purple-600 text-sm font-medium">Invite</button>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-md bg-purple-100 text-purple-600">
                ⬛
              </button>
              <button className="p-2 rounded-md hover:bg-gray-100">⋮</button>
            </div>
          </div>
        </div>

        {/* Columns */}
        <main className="p-6 flex-1 overflow-y-auto">
          <div className="flex gap-6">
            {columns.map((col) => (
              <Column
                key={col.id}
                title={col.title}
                color={col.color}
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

      {/* Add Task Modal */}
      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onAdd={handleAddTask}
        initialStatus={modalStatus}
      />
    </div>
  );
};

export default Dashboard;
