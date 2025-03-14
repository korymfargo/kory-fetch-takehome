import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserSlice } from "@types";

const initialState: UserSlice = {
  loggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    ActionLogin: (
      state,
      action: PayloadAction<{
        name: string;
        email: string;
      }>
    ) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.loggedIn = true;
    },
    ActionLogout: (state) => {
      state.name = undefined;
      state.email = undefined;
      state.loggedIn = false;
    },
  },
});

export const { ActionLogin, ActionLogout } = userSlice.actions;
export default userSlice;
