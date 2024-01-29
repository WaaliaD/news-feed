import {AppDispatch} from '../store';
import axios from 'axios';
import {INews} from '../../models/INews';
import {newsSlice} from './NewsSlice';
import {themeSlice} from './ThemeSlice';

export const fetchNews = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(newsSlice.actions.newsFetching());
        const response = await axios.get<INews[]>('https://jsonplaceholder.typicode.com/posts?_limit=10');
        dispatch(newsSlice.actions.newsFetchingSuccess(response.data));
    } catch (error: unknown) {
        if (error instanceof Error) {
            dispatch(newsSlice.actions.newsFetchingError(error.message))
        } else {
            dispatch(newsSlice.actions.newsFetchingError('unknown error'))
        }
    }
}

export const fetchColorDesign = (color: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(themeSlice.actions.themeFetching());
        const response = await axios.get<string>(`https://jsonplaceholder.typicode.com/albums?_limit=1`); //https://frontappapi.dock7.66bit.ru/api/theme/get?name=${color}
        dispatch(themeSlice.actions.themeFetchingSuccess(response.data));
    } catch (error: unknown) {
        if (error instanceof Error) {
            dispatch(themeSlice.actions.themeFetchingError(error.message))
        } else {
            dispatch(themeSlice.actions.themeFetchingError('unknown error'))
        }
    }
}