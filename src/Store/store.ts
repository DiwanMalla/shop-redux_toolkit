import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./ProductApi/ProductApi";
import CartSlice from "./CartSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    cart: CartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
