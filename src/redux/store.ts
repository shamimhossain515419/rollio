import { configureStore } from "@reduxjs/toolkit";
import ResponsiveMenuToggleSlice from "./features/responsivemenutoggle/ResponsiveMenuToggleSlice";
import CartToggleSlice from "./features/cart/CartToggleSlice";
import FavoriteSlice from "./features/favoriteToggle/favoriteToggle";
import SiteModalSlice from "./features/sitemodal/SiteModalSlice";
import AccountSlice from "./features/account/AccountSlice";
import CartSlice from "./features/cart/CartSlice";
import authSlice from "./features/auth/authSlice";
import { apiSlice } from "./features/api/apiSlice";
import addressSlice from "./features/address/addressSlice";
import favoriteSlice from "./features/favorite/favoriteSlice";
import ColorsSlice from "./features/colorsSlice/ColorsSlice";
import sizeSlice from "./features/sizeSlice/sizeSlice";

export const store = configureStore({
  reducer: {
    Colors: ColorsSlice,
    Sizes: sizeSlice,
    addressSlice: addressSlice,
    favItems: favoriteSlice,
    menu: ResponsiveMenuToggleSlice,
    cart: CartToggleSlice,
    auth: authSlice,
    Cart: CartSlice,
    favorite: FavoriteSlice,
    sitemodal: SiteModalSlice,
    account: AccountSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
