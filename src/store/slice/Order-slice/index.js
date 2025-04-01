import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  approvalURL: null,
  orderId: null,
  orderList: [],
  orderDetails: null,
};

//create order
export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (orderData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}/order/create`,
        orderData
      );

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//capture payment
export const capturePayment = createAsyncThunk(
  "order/capturePayment",
  async ({ session_id, orderId }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}/order/capture`,
        { session_id, orderId }
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//fetch orders
export const fetchOrders = createAsyncThunk(
  "order/fetchOrders",
  async (userId) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}/order/list/${userId}`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
//fetch order details
export const fetchOrderDetails = createAsyncThunk(
  "order/fetchOrderDetails",
  async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}/order/details/${id}`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const orderSlice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = true;
        console.log(action.payload);
        state.approvalURL = action.payload.url;
        state.orderId = action.payload.orderId;
        sessionStorage.setItem(
          "currentOrderId",
          JSON.stringify(action.payload.orderId)
        );
      })
      .addCase(createOrder.rejected, (state) => {
        state.isLoading = true;
        state.orderList = [];
      })
      .addCase(fetchOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderList = action.payload.data;
      })
      .addCase(fetchOrders.rejected, (state) => {
        state.isLoading = true;
        state.orderList = [];
      })
      .addCase(fetchOrderDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOrderDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderDetails = action.payload.data;
      })
      .addCase(fetchOrderDetails.rejected, (state) => {
        state.isLoading = true;
        state.orderDetails = null;
      });
  },
});

export default orderSlice.reducer;
