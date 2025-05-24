import baseApi from "../api/baseApi";

const courseApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    allCourses: build.query({
      query: () => ({
        url: `/courses`,
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
  }),
});

export const {
  useAllCoursesQuery,
  useAllDashboardCountQuery,
} = courseApi;
