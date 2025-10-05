// src/redux/services/subCategoryApi.ts
import baseApi from "./baseApi";

export type SubCategory2 = { id: string; name: string };
export type Category = { id: string; name: string };

export type SubCategory = {
  id: string;
  name: string;
  categoryId: string;
  country: string | null;
  category?: Category;
  subcategories2?: SubCategory2[];
};

const subCategoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // GET /subCategory
    getAllSubCategories: build.query<SubCategory[], void>({
  query: () => ({
    url: `/subCategory`,
    method: "GET",
  }),
}),

    // POST /subCategory
    createSubCategory: build.mutation<any, Partial<SubCategory>>({
      query: (body) => ({
        url: `/subCategory`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "SubCategory", id: "LIST" }],
    }),

    // DELETE /subCategory/:id  ✅ fixed
    deleteSubCategory: build.mutation<{ success?: boolean }, string>({
      query: (id) => ({
        url: `/subCategory/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (res, err, id) => [
        { type: "SubCategory", id },
        { type: "SubCategory", id: "LIST" },
      ],
    }),

    // PUT /subCategory/:id  (optional)
    updateSubCategory: build.mutation<SubCategory, { id: string; data: Partial<SubCategory> }>({
      query: ({ id, data }) => ({
        url: `/subCategory/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (res, err, { id }) => [
        { type: "SubCategory", id },
        { type: "SubCategory", id: "LIST" },
      ],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetAllSubCategoriesQuery,
  useCreateSubCategoryMutation,
  useDeleteSubCategoryMutation,
  useUpdateSubCategoryMutation,
} = subCategoryApi;

export default subCategoryApi;
