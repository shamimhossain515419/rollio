import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const CartToggleSlice = createSlice({
  initialState,
  name: "cart-toggle",
  reducers: {
    CartToggle: (state) => {
      state.value = !state.value;
    },
  },
});
export const { CartToggle } = CartToggleSlice.actions;
export default CartToggleSlice.reducer;
