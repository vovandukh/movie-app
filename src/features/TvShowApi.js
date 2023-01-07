import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";



export const tvShowsApi = createApi({
    reducerPath: 'tvShowsApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
    endpoints: (builder) => ({
        getTopRatedTvShows: builder.query({
            query: (page = '') => `/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
        }),
        getPopularTvShows: builder.query({
            query: (page = '') => `/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
        }),
        getAiringTodayTvShows: builder.query({
            query: (page = '') => `/tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
        }),
        getOnTheAirTvShows: builder.query({
            query: (page = '') => `/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
        }),
        getTvShowsVideo: builder.query({
            query: (id) => `/tv/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`
        }),
        getDetailShows: builder.query({
            query: (id) => `/tv/${id}?api_key=${process.env.REACT_APP_API_KEY}`
        }),
        getSeasonsShows: builder.query({
            query: (arg) => `/tv/${arg.id}/season/${arg.season}?api_key=${process.env.REACT_APP_API_KEY}`
        })
    })
})

export const {
    useGetTopRatedTvShowsQuery,
    useGetPopularTvShowsQuery,
    useGetAiringTodayTvShowsQuery,
    useGetOnTheAirTvShowsQuery,
    useGetTvShowsVideoQuery,
    useGetDetailShowsQuery,
    useGetSeasonsShowsQuery
} = tvShowsApi;