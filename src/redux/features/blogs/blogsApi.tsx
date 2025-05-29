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

        createBlog: build.mutation({
            query: (formData) => ({
                url: `/blogs`,
                method: "POST",
                body: formData,
            }),
            //   invalidatesTags: ["Blogs"], // Invalidate queries to refetch blogs
        }),


    }),
});

export const {
    useAllBlogsCountQuery,
    useAllBlogsQuery,
    useCreateBlogMutation,
} = blogApi;
