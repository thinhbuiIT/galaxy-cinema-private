import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [],
    loading: false,
    error: null
}

const showingSlice = createSlice({
    name: 'filmShowing',
    initialState: initialState,
    reducers: {
        fetchFilmShowingStart: (state) => {
            state.loading = true
            state.error = null
        },
        fetchFilmShowingSuccess: (state, action) => {
            state.loading = false
            state.data = action.payload
        },
        fetchFilmShowingError: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export const { fetchFilmShowingStart, fetchFilmShowingSuccess, fetchFilmShowingError } = showingSlice.actions
export default showingSlice.reducer