import baseApi from "./baseApi";

const subCatagory = baseApi.injectEndpoints({
    endpoints: (build) => ({
       getAllCatagories: build.query({
           query: () => ({
               url: `/subCategory`,
               method: 'GET'
           }),
           providesTags: ["subCatagories"]
       }),
       createCatagory: build.mutation({
           query: (newCatagory) => {
               return {
                   url: `/catagories`,
                   method: 'POST',
                   body: newCatagory
               }
           },
           invalidatesTags: ["subCatagories"]
       }),
         deleteCatagory: build.mutation({
              query: (id) => {
                return {
                     url: `/catagories/${id}`,
                     method: 'DELETE'
                }
              },
              invalidatesTags: ["subCatagories"]
         }),
            updateCatagory: build.mutation({
                query: ({id, updatedCatagory}) => {
                    return {
                        url: `/catagories/${id}`,
                        method: 'PUT',
                        body: updatedCatagory
                    }
                },
                invalidatesTags: ["subCatagories"]
            })
       

    }
    )
})

export const { useGetAllCatagoriesQuery, useCreateCatagoryMutation, useDeleteCatagoryMutation, useUpdateCatagoryMutation } = subCatagory