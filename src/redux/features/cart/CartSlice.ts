"use client";
import { CartInitialStateInterface } from "@/types/CartInitialStateInterface";
import { ProductInterface } from "@/types/Productinterface";
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

const initialState: CartInitialStateInterface = {
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
        (item) =>
          item.id === id &&
          JSON.stringify(item.extraIngredients) ===
            JSON.stringify(extraIngredients)
      );

      if (existingItemIndex === -1) {
        state.cartItems.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.sale_price,
          extraIngredients: extraIngredients,
        });
        state.totalQuantity++;
      } else {
        const existingItem = state.cartItems[existingItemIndex];
        existingItem.quantity++;
        existingItem.totalPrice += newItem.sale_price;
        state.totalQuantity++;
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.totalPrice),
        0
      );
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

    deleteItem(state, action) {
      const { id, extraIngredients } = action.payload;

      // Find the index of the item to delete
      const itemIndexToDelete = state.cartItems.findIndex(
        (item) =>
          item.id === id &&
          JSON.stringify(item.extraIngredients) ===
            JSON.stringify(extraIngredients)
      );

      if (itemIndexToDelete !== -1) {
        const deletedItem = state.cartItems[itemIndexToDelete];
        state.totalQuantity -= deletedItem.quantity;
        state.cartItems.splice(itemIndexToDelete, 1);
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
export const { addItem, clearCart, deleteItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
