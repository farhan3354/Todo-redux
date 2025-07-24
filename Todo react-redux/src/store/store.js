import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoslice";  // Renamed for clarity

export const store = configureStore({
  reducer: {
    todo: todoReducer,  // Use key-based reducer for scalability
  },
});