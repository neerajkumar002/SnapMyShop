import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  ordersList: [],
  orderDetails: null,
};

const adminOrdersSlice = createSlice({
  name: "adminOrdersSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default adminOrdersSlice.reducer;
