import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  ordersList: [],
  orderDetails: null,
};

export const fetchAllOrdersForAdmin = createAsyncThunk(
  "/order/fetchAllOrdersForAdmin",
  async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}/admin/orders/list`
      );

     
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const fetchOrderDetailsForAdmin = createAsyncThunk(
  "/order/fetchOrderDetailsForAdmin",
  async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}/admin/orders/details/${id}`
      );

    
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const adminOrdersSlice = createSlice({
  name: "adminOrdersSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllOrdersForAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllOrdersForAdmin.fulfilled, (state, action) => {
        state.isLoading = false;

        state.ordersList = action.payload.data;
      })
      .addCase(fetchAllOrdersForAdmin.rejected, (state) => {
        state.isLoading = true;
        state.ordersList = [];
      })
      .addCase(fetchOrderDetailsForAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOrderDetailsForAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderDetails = action.payload.data;
      })
      .addCase(fetchOrderDetailsForAdmin.rejected, (state) => {
        state.isLoading = true;
        state.orderDetails = [];
      });
  },
});

export default adminOrdersSlice.reducer;
