import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/product-slice/index";
import authReducer from "./slice/Auth-slice/index";
const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
  },
});

export default store;
