import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isLoading: false,
  userData: null,
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/register`,
        formData
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//login user
export const loginUser = createAsyncThunk("auth/login", async (formData) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
      formData,
      { withCredentials: true }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = true;
        state.userData = null;
      })
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = true;
        state.userData = null;
      });
  },
});

export default authSlice.reducer;
