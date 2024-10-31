import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  liveChatStatus: false,
};

export const liveChatSlice = createSlice({
  initialState,
  name: "liveChatSlice",
  reducers: {
    liveChatToggle: (state) => {
      state.liveChatStatus = !state.liveChatStatus;
    },
  },
});

export const { liveChatToggle } = liveChatSlice.actions;

export default liveChatSlice.reducer;
