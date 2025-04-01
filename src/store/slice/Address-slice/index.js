import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  addressList: [],
  isLoading: false,
};

//add address
export const addAddress = createAsyncThunk(
  "address/add",
  async (addressData) => {
    console.log(addressData);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}/address/add`,
        addressData
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//fetch all addresses
export const fetchAllAddresses = createAsyncThunk(
  "address/list",
  async (userId) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}/address/${userId}`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const addressSlice = createSlice({
  name: "addressSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addressList = action.payload.data;
      })
      .addCase(addAddress.rejected, (state) => {
        state.isLoading = true;
        state.addressList = [];
      })
      .addCase(fetchAllAddresses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllAddresses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addressList = action.payload.data;
      })
      .addCase(fetchAllAddresses.rejected, (state) => {
        state.isLoading = true;
        state.addressList = [];
      });
  },
});

export default addressSlice.reducer;
