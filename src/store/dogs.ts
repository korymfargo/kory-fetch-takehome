import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dog, DogsSlice } from "@types";

const initialState: DogsSlice = {
  dogIds: new Set(),
  dogs: [],
};

const dogsSlice = createSlice({
  name: "dogs",
  initialState,
  reducers: {
    ActionAddDogs: (state, action: PayloadAction<Array<Dog>>) => {
      for (let i = 0; i < action.payload.length; i++) {
        if (!state.dogIds.has(action.payload[i].id)) {
          state.dogIds.add(action.payload[i].id);
          state.dogs.push(action.payload[i]);
        }
      }
    },
  },
});

export const { ActionAddDogs } = dogsSlice.actions;
export default dogsSlice;
