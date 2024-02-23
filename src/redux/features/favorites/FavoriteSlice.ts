import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const FavoriteSlice = createSlice({
  initialState,
  name: "favorite-toggle",
  reducers: {
    FavoriteToggle: (state) => {
      state.value = !state.value;
    },
  },
});
export const { FavoriteToggle } = FavoriteSlice.actions;
export default FavoriteSlice.reducer;
