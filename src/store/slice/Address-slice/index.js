import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  addressList: [],
  isLoading: false,
  addressData: null,
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
        `${import.meta.env.VITE_BASE_API_URL}/address/list/${userId}`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//get address by address id
export const getAddressById = createAsyncThunk(
  "address/getAddressById",
  async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}/address/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
//update address
export const updateAddress = createAsyncThunk(
  "address/updateAddress",
  async ({ userId, addressId, formData }) => {
    try {
      const response = await axios.put(
        `${
          import.meta.env.VITE_BASE_API_URL
        }/address/update/${userId}/${addressId}`,
        formData
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//delete address
export const deleteAddress = createAsyncThunk(
  "address/deleteAddress",
  async ({ userId, addressId }) => {
    try {
      const response = await axios.delete(
        `${
          import.meta.env.VITE_BASE_API_URL
        }/address/delete/${userId}/${addressId}`
      );
      console.log(response);
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
      })
      .addCase(getAddressById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAddressById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addressData = action.payload.data;
      })
      .addCase(getAddressById.rejected, (state) => {
        state.isLoading = true;
        state.addressData = [];
      })
      .addCase(updateAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.addressData = action.payload.data;
      })
      .addCase(updateAddress.rejected, (state) => {
        state.isLoading = true;
        state.addressData = [];
      });
  },
});

export default addressSlice.reducer;
