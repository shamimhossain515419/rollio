import { apiSlice } from "../api/apiSlice";

export const ContactApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    contactPost: builder.mutation({
      query: (data) => ({
        url: `contact/${process.env.GROUP_ID}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useContactPostMutation } = ContactApi;
