import { apiSlice } from "../api/apiSlice";

export const returnApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    notifyCreate: builder.mutation({
      query: (data: any) => ({
        url: "notify-about-size",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useNotifyCreateMutation } = returnApi;
