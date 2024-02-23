import { configureStore } from "@reduxjs/toolkit";
import ResponsiveMenuToggleSlice from "./features/responsivemenutoggle/ResponsiveMenuToggleSlice";
import CartToggleSlice from "./features/cart/CartToggleSlice";
import FavoriteSlice from "./features/favorites/FavoriteSlice";
import SiteModalSlice from "./features/sitemodal/SiteModalSlice";
import AccountSlice from "./features/account/AccountSlice";
import CartSlice from "./features/cart/CartSlice";

export const store = configureStore({
  reducer: {
    menu: ResponsiveMenuToggleSlice,
    cart: CartToggleSlice,
    Cart: CartSlice,
    favorite: FavoriteSlice,
    sitemodal: SiteModalSlice,
    account: AccountSlice,
  },
});
