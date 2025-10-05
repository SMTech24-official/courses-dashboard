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

export type CreateSubCategory2Input = {
  name: string;
  categoryId: string;
  subCategoryId: string;
};

// Type for Category API response
export type CategoryWithSubcategories = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  subcategories: SubCategory[];
};

export type CategoryApiResponse = {
  success: boolean;
  message: string;
  meta: {
    page: number;
    limit: number;
    total: number;
  };
  data: CategoryWithSubcategories[];
};

const subCategoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // GET /subCategory
    getAllSubCategories: build.query<SubCategory[], void>({
      query: () => ({
        url: `/subCategory`,
        method: "GET",
      }),
      providesTags: [{ type: "SubCategory", id: "LIST" }],
    }),

    // GET /category/categories - For dropdown in create form
    getAllCategoriesWithSubcategories: build.query<CategoryApiResponse, void>({
      query: () => ({
        url: `/category/categories`,
        method: "GET",
      }),
      providesTags: [{ type: "Category", id: "LIST" }],
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

    // DELETE /subCategory/:id
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

    // PUT /subCategory/:id
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

    // ========== SubCategory2 APIs ==========

    // POST /subCategoryTwo - Create SubCategory2
    createSubCategory2: build.mutation<any, CreateSubCategory2Input>({
      query: (body) => ({
        url: `/subCategoryTwo`,
        method: "POST",
        body,
      }),
      invalidatesTags: [
        { type: "SubCategory", id: "LIST" },
        { type: "Category", id: "LIST" },
      ],
    }),

    // DELETE /subCategoryTwo/:id - Delete SubCategory2
    deleteSubCategory2: build.mutation<{ success?: boolean }, string>({
      query: (id) => ({
        url: `/subCategoryTwo/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [
        { type: "SubCategory", id: "LIST" },
        { type: "Category", id: "LIST" },
      ],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetAllSubCategoriesQuery,
  useGetAllCategoriesWithSubcategoriesQuery,
  useCreateSubCategoryMutation,
  useDeleteSubCategoryMutation,
  useUpdateSubCategoryMutation,
  useCreateSubCategory2Mutation,
  useDeleteSubCategory2Mutation,
} = subCategoryApi;

export default subCategoryApi;