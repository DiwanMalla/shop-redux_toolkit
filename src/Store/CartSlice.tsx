/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(state, action) {
      //@ts-expect-error
      state.push(action.payload);
    },
    remove(state, action) {
      //@ts-expect-error
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, remove } = cartSlice.actions;
export default cartSlice.reducer;
