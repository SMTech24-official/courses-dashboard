import baseApi from "../api/baseApi";

const blogApi = baseApi.injectEndpoints({
    endpoints: (build) => ({

        allBlogsCount: build.query({
            query: () => ({
                url: `/blogs/allBlogsCount`,
                method: "GET",
            }),
            // invalidatesTags: ["allMemories"],
        }),

        allBlogs: build.query({
            query: () => ({
                url: `/blogs`,
                method: "GET",
            }),
            // invalidatesTags: ["allMemories"],
        }),


    }),
});

export const {
    useAllBlogsCountQuery,
    useAllBlogsQuery,
} = blogApi;
