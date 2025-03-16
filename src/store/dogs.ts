import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dog, DogsSlice } from "@types";

const initialState: DogsSlice = {
  dogs: {},
};

const dogsSlice = createSlice({
  name: "dogs",
  initialState,
  reducers: {
    ActionAddDogs: (state, action: PayloadAction<Array<Dog>>) => {
      for (let i = 0; i < action.payload.length; i++) {
        if (state.dogs[action.payload[i].id] === undefined) {
          state.dogs[action.payload[i].id] = action.payload[i];
        }
      }
    },
  },
});

export const { ActionAddDogs } = dogsSlice.actions;
export default dogsSlice;
