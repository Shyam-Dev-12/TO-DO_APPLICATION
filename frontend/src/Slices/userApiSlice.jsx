import { apiSlice } from "./apiSlice";

const userApiSlice = apiSlice.injectEndpoints({
    endpoints : (build) => ({
        registerUser: build.mutation({
            query: (data) => ({
                url: "/api/user",
                method: "POST",
                body: data,
            }),
        }),

        login: build.mutation({
            query: (data) => ({
                url: "/api/user/auth",
                method: "POST",
                body: data,
            })
        }),

        logout: build.mutation({
            query: (data) => ({
                url: "/api/user/logout",
                method: "POST",
                body: data,
            })
        })

    }),
})

export const { useRegisterUserMutation, useLoginMutation, useLogoutMutation } = userApiSlice;