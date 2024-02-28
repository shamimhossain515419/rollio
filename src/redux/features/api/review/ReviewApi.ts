import { apiSlice } from "../apiSlice";

export const ReviewApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: (data) => ({
        url: "review",
        method: "POST",
        body: data,
      }),
    }),
    getReview: builder.query({
      query: (id) => `get-review/${process.env.GROUP_ID}/${id}`,
      keepUnusedDataFor: 100,
    }),
  }),
});

export const { useCreateReviewMutation, useGetReviewQuery } = ReviewApi;
