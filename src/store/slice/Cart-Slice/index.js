import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isLoading: false,
  cart: [],
};

//add to cart
export const addToCart = createAsyncThunk(
  "/cart/add",
  async ({ userId, productId, quantity }) => {
    try { 
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}/cart/add`,
        { userId, productId, quantity }
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//fetch cart items
export const getCart = createAsyncThunk("cart/get", async (userId) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_API_URL}/cart/${userId}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
});

// update cart item quantity
export const updateCartItemQuantity = createAsyncThunk(
  "cart/update",
  async ({ userId, productId, quantity }) => {
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_BASE_API_URL}/cart/updateCartItemQuantity`,
        { userId, productId, quantity }
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//delete cart item
export const deleteCartItem = createAsyncThunk(
  "cart/delete",
  async ({ userId, productId }) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_API_URL}/cart/${userId}/${productId}`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart = action.payload;
      })
      .addCase(addToCart.rejected, (state) => {
        state.isLoading = false;
        state.cart = [];
      })
      .addCase(getCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart = action.payload.data;
      })
      .addCase(getCart.rejected, (state) => {
        state.isLoading = false;
        state.cart = [];
      })
      .addCase(updateCartItemQuantity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart = action.payload.data;
      })
      .addCase(updateCartItemQuantity.rejected, (state) => {
        state.isLoading = false;
        state.cart = [];
      })
      .addCase(deleteCartItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart = action.payload.data;
      })
      .addCase(deleteCartItem.rejected, (state) => {
        state.isLoading = false;
        state.cart = [];
      });
  },
});

export default cartSlice.reducer;
