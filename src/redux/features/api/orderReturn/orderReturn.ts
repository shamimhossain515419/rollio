import { apiSlice } from "../apiSlice";

export const returnApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createReturn: builder.mutation({
      query: (data) => ({
        url: "return/product-return",
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

export const { useCreateReturnMutation } = returnApi;
