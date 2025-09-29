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

    deleteCourse: build.mutation({
      query: (courseId: string) => ({
        url: `/courses/${courseId}`,
        method: "DELETE",
      }),
      // Optionally refetch courses list after deleting
      // invalidatesTags: ["allCourses"],
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
  useDeleteCourseMutation,
  useRecommendCourseMutation,
} = courseApi;
