import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productList: [],
  productDetail: null,
};

//add new product thunk
export const addNewProduct = createAsyncThunk(
  "/product/addNewProduct",
  async (formData) => {
    console.log(formData);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}/admin/products/add`,
        formData
      );

      return response.data;
    } catch (error) {
      console.log("Error: Fetch products", error);
    }
  }
);

//delete product thunk
export const deleteProduct = createAsyncThunk(
  "/product/deleteProduct",
  async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_API_URL}/admin/products/${id}`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//get product by id
export const getProductById = createAsyncThunk(
  "/product/getProductById",
  async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}/admin/products/${id}`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// edit prodct

export const updateProductDetails = createAsyncThunk(
  "/product/editProduct",
  async ({ formData, productId }) => {
    try {
      const response = await axios.put(
        `${
          import.meta.env.VITE_BASE_API_URL
        }/admin/products/update/${productId}`,
        formData
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const adminProductSlice = createSlice({
  name: "adminProductSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNewProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload.data;
      })
      .addCase(addNewProduct.rejected, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetail = action.payload.data;
      })
      .addCase(getProductById.rejected, (state) => {
        state.isLoading = true;
        state.productDetail = null;
      })
      .addCase(updateProductDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProductDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetail = action.payload.data;
      })
      .addCase(updateProductDetails.rejected, (state) => {
        state.isLoading = true;
        state.productDetail = null;
      });
  },
});

export default adminProductSlice.reducer;
