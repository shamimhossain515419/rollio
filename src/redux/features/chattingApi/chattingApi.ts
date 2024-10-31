import { apiSlice } from "../api/apiSlice";

export const chattingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    seneMessage: builder.mutation({
      query: (data) => ({
        url: `chatting/sendMessage`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["chatting"],
    }),
    loadMessage: builder.query({
      query: () => ({
        url: `chatting/load-messages-for-client`,
        method: "GET",
      }),
      providesTags: ["chatting"],
    }),
  }),
});

export const { useSeneMessageMutation, useLoadMessageQuery } = chattingApi;
