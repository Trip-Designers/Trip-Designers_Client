import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from './apiSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer
  }
})

export default store;