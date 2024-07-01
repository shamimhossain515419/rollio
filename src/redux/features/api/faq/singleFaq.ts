import { apiSlice } from "../apiSlice";

export const FaqApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFaqs: builder.query({
      query: (id) => `get-accordions/${1}/${id}`,
    }),
  }),
});

export const { useGetFaqsQuery } = FaqApi;
