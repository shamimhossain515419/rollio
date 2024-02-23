import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accountValue: false,
};

export const AccountSlice = createSlice({
  initialState,
  name: "account-toggle",
  reducers: {
    accountToggle: (state) => {
      state.accountValue = !state.accountValue;
    },
  },
});
export const { accountToggle } = AccountSlice.actions;
export default AccountSlice.reducer;
