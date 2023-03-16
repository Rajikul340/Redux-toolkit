
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cartSlice from "../feature/cart/cartSlice";
import filterSlice from "../feature/filter/filterSlice";
import productsSlice from "../feature/products/productsSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    filter: filterSlice,
    products: productsSlice
  },
  // middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
});
