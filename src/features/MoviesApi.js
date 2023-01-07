import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
    endpoints: (builder) => ({
        getPopularMovies: builder.query({
            query: (page = '') => `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}${page ? `&page=${page}` : ''}`,
        }),
        getUpcomingMovies: builder.query({
            query: (page = '') => `/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}${page ? `&page=${page}` : ''}`,
        }),
        getTopRatedMovies: builder.query({
            query: (page = '') => `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}${page ? `&page=${page}` : ''}`,
        }),
        getNowPlayingMovies: builder.query({
            query: (page = '') => `/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}${page ? `&page=${page}` : ''}`,
        }),
        getMovieVideo: builder.query({
            query: (id) => `/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`
        })

    })
})

export const {
    useGetPopularMoviesQuery,
    useGetUpcomingMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetMovieVideoQuery,
    useGetNowPlayingMoviesQuery
} = moviesApi
