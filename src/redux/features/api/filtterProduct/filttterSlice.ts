import { apiSlice } from "../apiSlice";

export const filterApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProductByFilter: builder.mutation({
      query: (data) => ({
        url: "product/get-filtered-product",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetProductByFilterMutation } = filterApi;
