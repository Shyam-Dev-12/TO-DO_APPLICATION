import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000',
        credentials: 'include'   //sent cookies with requests
    }),
    tagTypes: ['Todos', 'Users'],
    endpoints: () => ({}),
});