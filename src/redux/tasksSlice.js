// src/redux/tasksSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: "1",
      title: "Brainstorming",
      description: "Brainstorming brings team members’ diverse experience into play.",
      status: "todo",
      priority: "Low",
      assignees: [
        "https://i.pravatar.cc/40?img=1",
        "https://i.pravatar.cc/40?img=2",
        "https://i.pravatar.cc/40?img=3",
      ],
      comments: 12,
      files: 0,
    },
    {
      id: "2",
      title: "Research",
      description: "User research helps you to create an optimal product for users.",
      status: "todo",
      priority: "High",
      assignees: [
        "https://i.pravatar.cc/40?img=4",
        "https://i.pravatar.cc/40?img=5",
      ],
      comments: 10,
      files: 3,
    },
    {
      id: "3",
      title: "Wireframes",
      description: "Low fidelity wireframes include the most basic content and visuals.",
      status: "todo",
      priority: "High",
      assignees: [
        "https://i.pravatar.cc/40?img=6",
        "https://i.pravatar.cc/40?img=7",
      ],
      comments: 8,
      files: 1,
    },
    {
      id: "4",
      title: "Brainstorming",
      description: "Brainstorming brings team members’ diverse experience into play.",
      status: "inprogress",
      priority: "Low",
      assignees: [
        "https://i.pravatar.cc/40?img=8",
        "https://i.pravatar.cc/40?img=9",
      ],
      comments: 12,
      files: 0,
    },
    {
      id: "5",
      title: "Brainstorming",
      description: "Brainstorming brings team members’ diverse experience into play.",
      status: "inprogress",
      priority: "Low",
      assignees: [
        "https://i.pravatar.cc/40?img=10",
        "https://i.pravatar.cc/40?img=11",
      ],
      comments: 12,
      files: 0,
    },
    {
      id: "6",
      title: "Design System",
      description: "It just needs to adapt the UI from what you did before.",
      status: "done",
      priority: "Completed",
      assignees: [
        "https://i.pravatar.cc/40?img=12",
        "https://i.pravatar.cc/40?img=13",
      ],
      comments: 12,
      files: 15,
    },
    {
      id: "7",
      title: "Brainstorming",
      description: "Brainstorming brings team members’ diverse experience into play.",
      status: "done",
      priority: "Low",
      assignees: [
        "https://i.pravatar.cc/40?img=14",
        "https://i.pravatar.cc/40?img=15",
      ],
      comments: 12,
      files: 0,
    },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
  },
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
