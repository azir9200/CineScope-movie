import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),

  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => ({
        url: "/movies",
        method: "GET",
      }),
    }),
    addRating: builder.mutation({
      query: ({ data, slug }) => ({
        url: `/movies/${slug}/review`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetMoviesQuery, useAddRatingMutation } = baseApi;
