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
import { PersistConfig } from "redux-persist/es/types"; // for types
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { persistReducer, persistStore } from "redux-persist";
import recentlyViewSlice from "./features/recentlyView/recentlyViewSlice";
import  liveChatSlice  from "./features/liveChatSlice/liveChatSlice";
const persistConfig: PersistConfig<ReturnType<any>> = {
  key: "root",
  storage,
};

const isClient = typeof window !== "undefined";
const persistedReducer = persistReducer(persistConfig, recentlyViewSlice);
const rootReducer = {
  Colors: ColorsSlice,
  Sizes: sizeSlice,
  addressSlice: addressSlice,
  favItems: favoriteSlice,
  menu: ResponsiveMenuToggleSlice,
  recentlyViewed: persistedReducer,
  cart: CartToggleSlice,
  auth: authSlice,
  Cart: CartSlice,
  favorite: FavoriteSlice,
  sitemodal: SiteModalSlice,
  account: AccountSlice,
  liveChat: liveChatSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
};
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
        ignoredActionPaths: ["register", "rehydrate"],
        ignoredPaths: ["meta.arg.originalArgs"],
      },
    }).concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export const persistor = isClient ? persistStore(store) : null;
