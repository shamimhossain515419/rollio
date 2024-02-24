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
  favItems: ProductInterface[];
}

const getData: ProductInterface[] =
  getCookie("favItems", []) !== null ? getCookie("favItems", [])! : [];

const setItemFunc = (item: ProductInterface[]) => {
  setCookie("favItems", item);
};

const initialState: InitialState = {
  favItems: getData,
};

const favSlice = createSlice({
  name: "favItems",
  initialState,
  reducers: {
    addFavItem(state, action: PayloadAction<ProductInterface>) {
      const product = action.payload;
      const exiting = state.favItems.find(
        (item: ProductInterface) => item?.id === product?.id
      );
      if (exiting) {
        const finalItems = state.favItems.filter(
          (item: ProductInterface) => item?.id !== product?.id
        );
        state.favItems = finalItems;
      } else {
        state.favItems.push(product);
      }
      setItemFunc(state.favItems);
    },
  },
});

export const { addFavItem } = favSlice.actions;
export default favSlice.reducer;
