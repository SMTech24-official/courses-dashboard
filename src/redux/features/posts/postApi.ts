import baseApi from "../api/baseApi";

const postApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    
    allPosts: build.query({
      query: () => ({
        url: `/post`,
        method: "GET",
      }),
    //   invalidatesTags: ["allposts"],
    }),

    postStatusUpdate: build.mutation({
      query: ({ id, data }) => ({
        url: `/post/approval/${id}`,
        method: "put",
        body: data,
      }),
      invalidatesTags: ["allPosts"],
    }),
    
  }),
});

export const {
  useAllPostsQuery,
  usePostStatusUpdateMutation
} = postApi;