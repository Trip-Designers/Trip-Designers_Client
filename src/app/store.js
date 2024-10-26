import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from './apiSlice';
import travleReducer from './travleSlice';

const store = configureStore({
  reducer: {
    travel: travleReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store;