const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  Colors: [],
};

const ColorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    ColorSelected: ({ state, action }: any) => {
      state.Colors.push(action.payload);
    },
  },
});

export const { ColorSelected } = ColorsSlice.actions;

export default ColorsSlice.reducer;
