import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  colors: number[];
}

const initialState: InitialState = {
  colors: [],
};

const colorSlice = createSlice({
  initialState,
  name: "colors",
  reducers: {
    AddColor: (state, action: PayloadAction<number>) => {
      const isExiting = state.colors.find(
        (item: number) => item === action.payload
      );
      if (isExiting) {
        const newArray = (state.colors = state.colors.filter(
          (item: number) => item !== action.payload
        ));
        state.colors = newArray;
      } else {
        state.colors.push(action.payload);
      }
    },
  },
});

export const { AddColor } = colorSlice.actions;
export default colorSlice.reducer;
