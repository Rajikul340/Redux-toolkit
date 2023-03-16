import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts, postProduct } from "./fetchApi";

const initialState = {
  products: [],
  isLoading: false,
  postSuccess: false,
  isError: false,
  error: "",
};
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const products = fetchProducts();
    return products;
  }
);

export const addProduct = createAsyncThunk(
  "products/appProduct",
  async (data) => {
     const products =  postProduct(data);
     return products
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState,
   reducers: {
   toggleSuccessPost: (state ) =>{
        state.postSuccess= false
   }
   },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.products = [];
        state.isError = true;
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(addProduct.pending, (state) => {
        state.isLoading = true;
        state.postSuccess =false
        state.isError = true;
      })
      .addCase(addProduct.fulfilled, (state) => {
        state.isLoading = false;
        state.postSuccess = true
        state.isError = false;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.products = [];
        state.isError = true;
        state.postSuccess = false 
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});
export const {toggleSuccessPost} = productsSlice.actions
export default productsSlice.reducer;
