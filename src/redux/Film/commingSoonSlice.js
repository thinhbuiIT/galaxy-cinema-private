import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [],
    loading: false,
    error: null
}

const commingSoonSlice = createSlice({
    name: 'filmCommingSoon',
    initialState,
    reducers: {
        fetchFilmCommingSoonStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchFilmCommingSoonSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchFilmCommingSoonError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const { fetchFilmCommingSoonStart, fetchFilmCommingSoonSuccess, fetchFilmCommingSoonError } = commingSoonSlice.actions
export default commingSoonSlice.reducer