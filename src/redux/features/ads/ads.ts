import baseApi from "../api/baseApi";

const adsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({

        allAdsCount: build.query({
            query: () => ({
                url: `/ads/allAdsCount`,
                method: "GET",
            }),
            // invalidatesTags: ["allMemories"],
        }),

        allAds: build.query({
            query: () => ({
                url: `/ads`,
                method: "GET",
            }),
            // invalidatesTags: ["allMemories"],
        }),

        createAds: build.mutation({
            query: (formData) => ({
                url: `/ads`,
                method: "POST",
                body: formData,
            }),
            //   invalidatesTags: ["Blogs"], // Invalidate queries to refetch blogs
        }),

        deleteAds: build.mutation({
            query: (id) => ({
                url: `/ads/${id}`,
                method: "DELETE",
            }),
            // invalidatesTags: ["Ads"],
        }),


    }),
});

export const {
    useAllAdsCountQuery,
    useAllAdsQuery,
    useCreateAdsMutation,
    useDeleteAdsMutation,
} = adsApi;
