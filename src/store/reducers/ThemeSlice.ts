import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ThemeState {
    theme: string;
    isLoading: boolean;
    error: string;
}

const initialState: ThemeState = {
    theme: 'light',
    isLoading: false,
    error: '',
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        themeFetching(state) {
            state.isLoading = true;
        },
        themeFetchingSuccess(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = '';
            state.theme = action.payload;
        },
        themeFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default themeSlice.reducer;