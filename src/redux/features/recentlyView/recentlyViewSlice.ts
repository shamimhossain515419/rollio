import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state type
interface RecentlyViewedState {
  recentlyViewedProducts: number[]; // Array of product IDs
}

// Define the initial state
const initialState: RecentlyViewedState = {
  recentlyViewedProducts: [],
};

export const recentlyViewSlice = createSlice({
  name: "recentlyView",
  initialState,
  reducers: {
    addRecentlyViewedProduct: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const productExists = state.recentlyViewedProducts.some(
        (id) => id === productId
      );
      if (!productExists) {
        state.recentlyViewedProducts.push(productId);
      }
    },
    removeRecentlyViewedProduct: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.recentlyViewedProducts = state.recentlyViewedProducts.filter(
        (id) => id !== productId
      );
    },
  },
});

// Export actions and reducer
export const { addRecentlyViewedProduct, removeRecentlyViewedProduct } = recentlyViewSlice.actions;
export default recentlyViewSlice.reducer;
