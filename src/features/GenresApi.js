import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const genresApi = createApi({
    reducerPath: 'genresApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
    endpoints: (builder) => ({
        getGenresMovie: builder.query({
            query: () => `/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
        }),
        getGenresTvShows: builder.query({
            query: () => `/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}`
        })
    })
})


export const { useGetGenresMovieQuery, useGetGenresTvShowsQuery } = genresApi;

