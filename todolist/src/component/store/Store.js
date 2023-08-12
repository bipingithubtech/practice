import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../reducer/Reducer";
export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});
