import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { email: null, code: null },
  reducers: {
    addEmail(sate, { payload }) {
      sate.email = payload;
    },
    addCode(sate, { payload }) {
      sate.code = payload;
    },
    resetEmailAndCode(state) {
      state.email = null;
      state.code = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
