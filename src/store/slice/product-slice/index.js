import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productList: [],
  productDetail: null,
};

export const fetchAllProducts = createAsyncThunk(
  "fetchAllProducts",
  async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/admin/products/get`
      );
      return response.data;
    } catch (error) {
      console.log("Error: Fetch products", error);
    }
  }
);

// get product Details by product id
export const getProductDetail = createAsyncThunk(
  "getProductDetail",
  async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/admin/products/${id}`
      );
      return response.data;
    } catch (error) {
      console.log("Error: Fetch products", error);
    }
  }
);

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
      })
      .addCase(getProductDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetail = action.payload.data;
      })
      .addCase(getProductDetail.rejected, (state) => {
        state.isLoading = true;
        state.productDetail = null;
      });
  },
});

export default productSlice.reducer;
