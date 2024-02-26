import { apiSlice } from "../api/apiSlice";
export const addressApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createAddress: builder.mutation({
      query: (data) => ({
        url: "address/create",
        method: "POST",
        body: data,
      }),
    }),
    RemoveAddress: builder.mutation({
      query: (data) => ({
        url: "address/remove-address",
        method: "POST",
        body: data,
      }),
    }),
    fetchAddress: builder.query({
      query: () => "address/get-address-by-user",
    }),
  }),
});

export const {
  useFetchAddressQuery,
  useRemoveAddressMutation,
  useCreateAddressMutation,
} = addressApi;
