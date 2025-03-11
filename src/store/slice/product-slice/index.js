import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productList: [],
};

export const fetchAllProducts = createAsyncThunk("", async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/admin/products/get`
    );
    return response.data;
  } catch (error) {
    console.log("Error: Fetch products", error);
  }
});

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload.data;
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.isLoading = true;
      });
  },
});

export default productSlice.reducer;
