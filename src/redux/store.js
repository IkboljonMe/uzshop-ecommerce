import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
