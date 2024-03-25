import { apiSlice } from "../apiSlice";

export const FaqApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFaqs: builder.query({
      // query: (id) => `get-accordions/${process.env.GROUP_ID}/${id}`,
      query: (id) => `get-accordions/${1}/${id}`,
      keepUnusedDataFor: 100,
    }),
  }),
});

export const { useGetFaqsQuery } = FaqApi;
