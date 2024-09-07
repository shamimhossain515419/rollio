import { apiSlice } from "../api/apiSlice";

export const recentlyViewApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRecentlyViewProducts: builder.query({
      query: (data) => {
        // Convert the data array to a comma-separated string
        const recentlyViewParam = data.join(",");

        return {
          url: `product/get-recently-view-products`,
          method: "GET",
          params: { recentlyView: recentlyViewParam }, // Pass as query parameters
        };
      },
      providesTags: ["products"],
    }),
  }),
});

export const { useGetRecentlyViewProductsQuery } = recentlyViewApi;
