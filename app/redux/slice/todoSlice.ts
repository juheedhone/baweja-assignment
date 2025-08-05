import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ITodoState } from "../state/todoState";
import type { RootState } from "../store";

const initialState: ITodoState = {
  items: [
    { name: "task 1", id: 1 },
    { name: "task 2", id: 2 },
    { name: "task 3", id: 3 },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      const newItem = { name: action.payload, id: state.items.length + 1 };
      state.items.push(newItem);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = todoSlice.actions;
export const todoState = (state: RootState) => state.todoSlice;
export default todoSlice.reducer;
