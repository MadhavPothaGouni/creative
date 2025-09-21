// src/redux/tasksSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    // Example tasks
    { id: "1", title: "Design UI", status: "todo", priority: "high" },
    { id: "2", title: "Setup Redux", status: "inprogress", priority: "low" },
    { id: "3", title: "Deploy App", status: "done", priority: "completed" },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    moveTask: (state, action) => {
      const { taskId, fromStatus, toStatus, toIndex } = action.payload;
      const taskIndex = state.tasks.findIndex((t) => t.id === taskId);
      if (taskIndex === -1) return;

      state.tasks[taskIndex].status = toStatus;

      // reorder task within array
      const task = state.tasks.splice(taskIndex, 1)[0];
      const destTasks = state.tasks.filter((t) => t.status === toStatus);
      state.tasks.splice(toIndex, 0, task);
    },
  },
});

export const { addTask, moveTask } = tasksSlice.actions;
export default tasksSlice.reducer;
