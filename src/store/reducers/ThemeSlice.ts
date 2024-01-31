import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ITheme} from '../../models/ITheme';

interface ThemeState {
    theme: ITheme;
    isLoading: boolean;
    error: string;
}

const initialState: ThemeState = {
    theme: {
        id: 2,
        name: "light",
        mainColor: "rgb(206, 240, 227)",
        secondColor: "rgb(255, 255, 255)",
        title: "Светлая тема",
        textColor: "rgb(10, 10, 10)"
    },
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
        themeFetchingSuccess(state, action: PayloadAction<ITheme>) {
            state.isLoading = false;
            state.error = '';
            state.theme = action.payload;
        },
        themeFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        dispatchCachedTheme(state, action: PayloadAction<ITheme>) {
            state.theme = action.payload;
        }
    }
})

export default themeSlice.reducer;