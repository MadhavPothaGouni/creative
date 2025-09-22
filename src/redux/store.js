// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import { loadFromLocalStorage, saveToLocalStorage } from "../utils/localStorage";

const persistedState = loadFromLocalStorage();

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveToLocalStorage({
    tasks: store.getState().tasks,
  });
});

export default store;
