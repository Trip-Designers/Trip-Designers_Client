import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from './apiSlice';
import travleReducer from './travleSlice';
import dayReducer from './daySlice';
import positionReducer from './positionSlice';

const store = configureStore({
  reducer: {
    travel: travleReducer,
    day: dayReducer,
    position: positionReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store;