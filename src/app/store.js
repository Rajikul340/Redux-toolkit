
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../feature/cart/cartSlice";
import filterSlice from "../feature/filter/filterSlice";
import productsSlice from "../feature/products/productsSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    filter: filterSlice,
    products: productsSlice
  },
});
