import {createApi ,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const peopleApi = createApi({
    reducerPath:'peopleApi',
    baseQuery:fetchBaseQuery({baseUrl:process.env.REACT_APP_API_URL}),
    endpoints:(builder)=>({
        getPopularPeople: builder.query({
            query: (page= '')=> `/person/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
        }),
    })
})

export const {useGetPopularPeopleQuery} = peopleApi