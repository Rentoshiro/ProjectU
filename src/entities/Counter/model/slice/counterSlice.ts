import { createSlice } from "@reduxjs/toolkit";
import { CounterSchema } from "../types/CounterSchema";

const initialState: CounterSchema = {
  value: 1,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;

