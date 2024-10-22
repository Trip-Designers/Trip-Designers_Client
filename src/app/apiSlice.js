import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducePath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER_URL
  }),
  endpoints: builder => ({
    // /destination GET 요청
    getDestination: builder.query({
      query: () => `/destination`,
    }),
    // /destination POST 요청
    addDestination: builder.mutation({
      query: (newDestination) => ({
        url: `/destination`,
        method: 'POST',
        body: newDestination,
      })
    }),
    // /destination/{name} GET 요청
    getDestinationByName: builder.query({
      query: (name) => `/destination/${name}`,
    }),
    // /destination/detailed POST 요청
    addDetailedDestination: builder.mutation({
      query: (detailedDestination) => ({
        url: `/destination/detailed`,
        method: 'POST',
        body: detailedDestination
      })
    })
  })
})

export const {
  useGetDestinationQuery,
  useAddDestinationMutation,
  useGetDestinationByNameQuery,
  useAddDetailedDestinationMutation,
} = apiSlice;