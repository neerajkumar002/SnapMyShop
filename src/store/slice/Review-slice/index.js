import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  reviews: [],
};

//fetch all reviews by product id
export const fetchAllReviews = createAsyncThunk(
  "reviews/fetchAllReviews",
  async (productId) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}/reviews/${productId}`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//add review
export const addReview = createAsyncThunk(
  "reviews/addReview",
  async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}/reviews/add`,
        formData
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const reviewSlice = createSlice({
  name: "reviewSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload.data;
      })
      .addCase(fetchAllReviews.rejected, (state) => {
        state.isLoading = true;
        state.reviews = [];
      })
      .addCase(addReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload.data;
      })
      .addCase(addReview.rejected, (state) => {
        state.isLoading = true;
        state.reviews = [];
      });
  },
});

export default reviewSlice.reducer;
