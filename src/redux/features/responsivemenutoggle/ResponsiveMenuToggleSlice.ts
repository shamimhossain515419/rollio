import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const ResponsiveMenuToggleSlice = createSlice({
  initialState,
  name: "menu-toggle",
  reducers: {
    MenuToggle: (state) => {
      state.value = !state.value;
    },
  },
});
export const { MenuToggle } = ResponsiveMenuToggleSlice.actions;
export default ResponsiveMenuToggleSlice.reducer;
