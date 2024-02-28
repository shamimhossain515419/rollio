import { apiSlice } from "../api/apiSlice";

export const ordersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    orderProduct: builder.mutation({
      query: (data) => ({
        url: "order/place-order",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useOrderProductMutation } = ordersApi;
