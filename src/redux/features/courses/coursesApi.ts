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


    recommendCourse: build.mutation({
      query: (courseId: string) => ({
        url: `/courses/recommend/${courseId}`,
        method: "POST",
      }),
      // Optionally refetch courses list after recommending
      // invalidatesTags: ["allCourses"],
    }),

  }),
});

export const {
  useAllCoursesQuery,
  useAllDashboardCountQuery,
  useRecommendCourseMutation,
} = courseApi;
