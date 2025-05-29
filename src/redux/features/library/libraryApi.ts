import baseApi from "../api/baseApi";

const libraryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    allLibrary: build.query({
      query: () => ({
        url: `/library`,
        method: "GET",
      }),
      // invalidatesTags: ["allMemories"],
    }),

    allDashboardCount: build.query({
      query: () => ({
        url: `/courses/allDashboardCount`,
        method: "GET",
      }),
      // invalidatesTags: ["allMemories"],
    }),

    createLibrary: build.mutation({
      query: (formData) => ({
        url: `/library`,
        method: "POST",
        body: formData,
      }),
      //   invalidatesTags: ["Blogs"], // Invalidate queries to refetch blogs
    }),
  }),
});

export const { useAllLibraryQuery, useAllDashboardCountQuery , useCreateLibraryMutation} = libraryApi;
