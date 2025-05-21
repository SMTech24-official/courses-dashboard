import baseApi from "../api/baseApi";

const memoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // loginUser: build.mutation({
    //   query: (data: any) => {
    //     return {
    //       url: "/auth/login",
    //       method: "POST",
    //       body: data,
    //     };
    //   },
    //   invalidatesTags: ["logIn"],
    // }),

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

    memoryDetails: build.query({
      query: (id) => ({
        url: `/courses/${id}`,
        method: "GET",
      }),
      //   providesTags: ["allUsers"],
    }),
    //memory status update
    // : build.mutation({
    //   query: (id, data) => {
    //     return {
    //       url: `/memory/memory-status/${id}`,
    //       method: "PUT",
    //       body: data,
    //     };
    //   },
    //   invalidatesTags: ["allMemories"],
    // }),

    memoryStatusUpdate: build.mutation({
      query: ({ id, data }) => ({
        url: `/memory/memory-status/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["allMemories"],
    }),

    


    // userStatusUpdate: build.mutation({
    //   query: (data) => {
    //     return {
    //       url: `/user/toggle-user_status/${data?.id}`,
    //       method: "PUT",
    //     };
    //   },
    //   invalidatesTags: ["allCreators", "allUsers"],
    // }),

    // getMe: build.query({
    //   query: () => ({
    //     url: "/users/me",
    //     method: "GET",
    //   }),
    // }),

    // updateUser: build.mutation({
    //   query: (data) => ({
    //     url: "/users/profile",
    //     method: "PUT",
    //     body: data,
    //   }),
    // }),
  }),
});

export const {
  useAllCoursesQuery,
  useAllDashboardCountQuery,
  useMemoryDetailsQuery,
  useMemoryStatusUpdateMutation,
} = memoryApi;
