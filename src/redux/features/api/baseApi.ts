// src/features/api/baseApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
export const baseApi = createApi({
    reducerPath: 'baseApi', // The key for this API in the Redux store
    baseQuery: fetchBaseQuery({
        baseUrl: "http://206.162.244.141:6005/api/v1/", // Replace with your API's base URL
        // Replace with your API's base URL
        prepareHeaders: (headers) => {
            const token = Cookies.get("token") // Assuming token is stored in the auth slice
            console.log('admin token',token);

            if (token) {
                headers.set('Authorization', `${token}`);
                
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
    tagTypes: ["approveEvent", "allPosts", "logIn", "transaction", "allUsers", "allCreators", "complains", "allMemories","updateSubscription","SubCategory"]
});

// Export hooks for usage in functional components
export default baseApi;
