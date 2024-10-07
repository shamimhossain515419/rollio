import { apiSlice } from "../api/apiSlice";

export const subscriberApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createSubscriber: builder.mutation({
      query: (data) => ({
        url: "subscribe-news-letter",
        method: "POST",
        body: data,
      }),
    }),

    getFounderAndCeo: builder.query({
      query: () => ({
        url: "get-claracasa-founder-and-ceo",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateSubscriberMutation, useGetFounderAndCeoQuery } = subscriberApi;
