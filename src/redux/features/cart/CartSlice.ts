"use client";
import { ProductInterface } from "@/utility/productInterface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const getCookie = (name: string, defaultValue: any) => {
  const cookieValue = Cookies.get(name);
  return cookieValue !== undefined ? JSON.parse(cookieValue) : defaultValue;
};

const setCookie = (key: string, value: any) => {
  Cookies.set(key, JSON.stringify(value), { expires: 7 }); // Expires in 7 days
};

//

interface InitialState {
  cartItems: ProductInterface[];
  totalQuantity: number;
  totalAmount: number;
}

const items: ProductInterface[] =
  getCookie("cartItems", []) !== null ? getCookie("cartItems", [])! : [];

const totalAmount: number =
  getCookie("totalAmount", 0) !== null ? getCookie("totalAmount", 0)! : 0;

const totalQuantity: number =
  getCookie("totalQuantity", 0) !== null ? getCookie("totalQuantity", 0)! : 0;

const setItemFunc = (
  item: ProductInterface[],
  totalAmount: number,
  totalQuantity: number
) => {
  setCookie("cartItems", item);
  setCookie("totalAmount", totalAmount);
  setCookie("totalQuantity", totalQuantity);
};

const initialState: InitialState = {
  cartItems: items,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ProductInterface>) {
      const newItem = action.payload;
      const id = newItem.id;
      const extraIngredients = newItem.extraIngredients;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === id
      );

      if (existingItemIndex === -1) {
        // If the item doesn't exist in the cart, add it with quantity 1 and calculate total price
        state.cartItems.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.sale_price,
          extraIngredients: extraIngredients, // Include extraIngredients in the new item
        });
        state.totalQuantity++;
      } else {
        const existingItem = state.cartItems[existingItemIndex];
        if (
          JSON.stringify(existingItem.extraIngredients) ===
          JSON.stringify(extraIngredients)
        ) {
          // If the existing item in the cart has the same extraIngredients, increase its quantity
          existingItem.quantity++;
          existingItem.totalPrice =
            existingItem.sale_price * existingItem.quantity; // Update totalPrice
          state.totalQuantity++;
        } else {
          // If extraIngredients differ, treat it as a new item and update existing item or create a new one
          existingItem.quantity--;
          if (existingItem.quantity === 0) {
            state.cartItems.splice(existingItemIndex, 1);
            state.totalQuantity--;
          }

          // Create a new item with updated extraIngredients
          const newCartItem = {
            ...newItem,
            quantity: 1,
            totalPrice: newItem.sale_price,
            extraIngredients: extraIngredients,
          };
          state.cartItems.push(newCartItem);
          state.totalQuantity++;
        }
      }

      // Calculate total amount after adding the item
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.totalPrice), // Use totalPrice instead of sale_price * quantity
        0
      );

      // Update storage or perform other side effects
      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },
    removeItem(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === id
      );

      if (existingItemIndex !== -1) {
        const existingItem = state.cartItems[existingItemIndex];

        state.totalQuantity--;

        if (existingItem.quantity === 1) {
          state.cartItems.splice(existingItemIndex, 1);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.sale_price;
        }
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) =>
          total + Number(item.sale_price) * Number(item.quantity),
        0
      );

      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },
    deleteItem(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity -= existingItem.quantity;
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) =>
          total + Number(item.sale_price) * Number(item.quantity),
        0
      );
      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },

    clearCart(state) {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },
  },
});

export const { addItem, deleteItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
