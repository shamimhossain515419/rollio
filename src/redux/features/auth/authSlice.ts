import { createSlice } from "@reduxjs/toolkit";
export interface InitialState {
  accessToken: any;
  user: any;
}
const initialState: InitialState = {
  accessToken: undefined,
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
  },
});

export const { userLoggedIn } = authSlice.actions;
export default authSlice.reducer;
