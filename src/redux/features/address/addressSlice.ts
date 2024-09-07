import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const addressSlice = createSlice({
  initialState,
  name: "address-toggle",
  reducers: {
    addressToggle: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
});
export const { addressToggle } = addressSlice.actions;
export default addressSlice.reducer;
