import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "auth",
  initialState: {
    loggedIn: false,
  },
  reducers: {
    loggin: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { loggin } = loginSlice.actions;
export default loginSlice.reducer;
