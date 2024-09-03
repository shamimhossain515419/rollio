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
  
  }),
});

export const { useCreateSubscriberMutation } = subscriberApi;
