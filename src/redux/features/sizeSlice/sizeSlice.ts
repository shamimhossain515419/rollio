import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  sizes: number[];
}

const initialState: InitialState = {
  sizes: [],
};

const sizeSlice = createSlice({
  initialState,
  name: "sizes",
  reducers: {
    AddSize: (state, action: PayloadAction<number>) => {
      const isExiting = state.sizes.find(
        (item: number) => item === action.payload
      );
      if (isExiting) {
        const newArray = (state.sizes = state.sizes.filter(
          (item: number) => item !== action.payload
        ));
        state.sizes = newArray;
      } else {
        state.sizes.push(action.payload);
      }
    },
  },
});

export const { AddSize } = sizeSlice.actions;
export default sizeSlice.reducer;
