import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: "" }),
    endpoints(builders) {
        return {
            registerUser: builders.mutation({
                query: (formData) => {
                    return {
                        url: '/register',
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: formData
                    }
                }
            })
        }
    }

})
export const { useRegisterUserMutation } = api;