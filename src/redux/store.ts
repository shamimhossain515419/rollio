import { configureStore } from "@reduxjs/toolkit";
import ResponsiveMenuToggleSlice from "./features/responsivemenutoggle/ResponsiveMenuToggleSlice";
import CartToggleSlice from "./features/cart/CartToggleSlice";
import FavoriteSlice from "./features/favoriteToggle/favoriteToggle";
import SiteModalSlice from "./features/sitemodal/SiteModalSlice";
import AccountSlice from "./features/account/AccountSlice";
import CartSlice from "./features/cart/CartSlice";
import favoriteSlice from "./features/favorite/favoriteSlice";

export const store = configureStore({
  reducer: {
    favItems: favoriteSlice,
    menu: ResponsiveMenuToggleSlice,
    cart: CartToggleSlice,
    Cart: CartSlice,
    favorite: FavoriteSlice,
    sitemodal: SiteModalSlice,
    account: AccountSlice,
  },
});
