import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchUser: builder.query({
      query: () => "profile",
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: "change-password",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useChangePasswordMutation, useFetchUserQuery } = authApi;
