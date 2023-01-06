import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from '../features/MoviesApi';
import { tvShowsApi } from '../features/TvShowApi';
import backdropSlice from './../features/BackdropSlice';
import { genresApi } from './../features/GenresApi';

export const store = configureStore({
    reducer: {
        backdrop: backdropSlice,
        [moviesApi.reducerPath]: moviesApi.reducer,
        [tvShowsApi.reducerPath]: tvShowsApi.reducer,
        [genresApi.reducerPath]: genresApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(
            moviesApi.middleware,
            tvShowsApi.middleware,
            genresApi.middleware
        )
})
