import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: false,
    movieId: ''
}

export const BackdropSlice = createSlice({
    name: 'showBackdrop',
    initialState,
    reducers: {
        setShowBackdrop: (state, action) => {
            state.show = action.payload
        },
        setMovieId: (state, action) => {
            state.movieId = action.payload
        }
    }
})

export const { setShowBackdrop, setMovieId } = BackdropSlice.actions;
export default BackdropSlice.reducer;