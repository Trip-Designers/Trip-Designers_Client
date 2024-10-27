import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from './apiSlice';
import travleReducer from './travleSlice';
import dayReducer from './daySlice';

const store = configureStore({
  reducer: {
    travel: travleReducer,
    day: dayReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store;