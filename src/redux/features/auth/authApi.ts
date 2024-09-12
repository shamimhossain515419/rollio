import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchUser: builder.query({
      query: () => "profile",
      providesTags:["users"]
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: "change-password",
        method: "POST",
        body: data,
      }),
    }),
    updateAccountDetails: builder.mutation({
      query: (data) => ({
        url: "update-account-details",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useChangePasswordMutation, useFetchUserQuery, useUpdateAccountDetailsMutation } = authApi;
