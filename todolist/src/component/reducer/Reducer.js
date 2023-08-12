import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  value: [
    { id: 123, text: "hey bipin" },
    { id: 124, text: "hello joshi" },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    addTodtos: (state, action) => {
      const todos = {
        id: nanoid(),
        text: action.payload,
      };
      state.value.push(todos);
    },
    removeTodos: (state, action) => {
      state.value.filter((todos) => todos.id !== action.payload);
    },
  },
});

export const { addTodtos, removeTodos } = todoSlice.actions;

export default todoSlice.reducer;
