import { apiSlice } from "../api/apiSlice";

export const contactApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    contactMessage: builder.mutation({
      query: (data) => ({
        url: `contact/${process.env.GROUP_ID}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {  useContactMessageMutation } = contactApi;