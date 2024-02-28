import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchUser: builder.query({
      query: () => "profile",
    }),
  }),
});

export const { useFetchUserQuery } = authApi;
