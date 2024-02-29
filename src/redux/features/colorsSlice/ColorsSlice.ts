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
    // ColorRemoved: ({ state, action }: any) => {
    //   const indexToRemove = state.Colors.indexOf(action.payload);

    //   if (indexToRemove !== -1) {
    //     state.Colors.splice(indexToRemove, 1);
    //   }
    // },
  },
});

export const { ColorSelected, ColorRemoved } = ColorsSlice.actions;

export default ColorsSlice.reducer;
