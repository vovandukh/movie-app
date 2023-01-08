import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from '../features/MoviesApi';
import { peopleApi } from '../features/PeopleApi';
import { tvShowsApi } from '../features/TvShowApi';
import backdropSlice from './../features/BackdropSlice';
import { genresApi } from './../features/GenresApi';

export const store = configureStore({
    reducer: {
        backdrop: backdropSlice,
        [moviesApi.reducerPath]: moviesApi.reducer,
        [tvShowsApi.reducerPath]: tvShowsApi.reducer,
        [genresApi.reducerPath]: genresApi.reducer,
        [peopleApi.reducerPath]:peopleApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(
            moviesApi.middleware,
            tvShowsApi.middleware,
            genresApi.middleware,
            peopleApi.middleware
        )
})
