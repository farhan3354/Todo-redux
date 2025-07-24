import { createSlice, nanoid } from "@reduxjs/toolkit";

// Corrected: `initialState` (not `firststate`)
const initialState = {
  todos: [{ id: "1", text: "Hello world" }], // Use string ID for consistency with nanoid()
};

export const todoslice = createSlice({
  name: "todo",
  initialState, // Fixed property name
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // Optional: Add updateTodo reducer
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) todo.text = newText;
    },
  },
});

// Export actions
export const { addTodo, removeTodo, updateTodo } = todoslice.actions;

// Export reducer
export default todoslice.reducer;
