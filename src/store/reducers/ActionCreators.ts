import {AppDispatch} from '../store';
import axios from 'axios';
import {INews} from '../../models/INews';
import {newsSlice} from './NewsSlice';
import {themeSlice} from './ThemeSlice';
import {ITheme} from '../../models/ITheme';
import {colorsType} from '../../utils/colorsConsts';

export const fetchNews = (page: number, news: INews[]) => async (dispatch: AppDispatch) => {
    try {
        dispatch(newsSlice.actions.newsFetching());
        const response = await axios.get<INews[]>(`https://frontappapi.dock7.66bit.ru/api/news/get?page=${page}&count=10`);
        dispatch(newsSlice.actions.newsFetchingSuccess(news.concat(response.data)));
        localStorage.setItem('news', JSON.stringify(news.concat(response.data)));
    } catch (error: unknown) {
        if (error instanceof Error) {
            dispatch(newsSlice.actions.newsFetchingError(error.message))
        } else {
            dispatch(newsSlice.actions.newsFetchingError('unknown error'))
        }
    }
}

export const fetchColorDesign = (color: colorsType) => async (dispatch: AppDispatch) => {
    try {
        dispatch(themeSlice.actions.themeFetching());
        const response = await axios.get<ITheme>(`https://frontappapi.dock7.66bit.ru/api/theme/get?name=${color}`);
        dispatch(themeSlice.actions.themeFetchingSuccess(response.data));
        localStorage.setItem('theme', JSON.stringify(response.data));
    } catch (error: unknown) {
        if (error instanceof Error) {
            dispatch(themeSlice.actions.themeFetchingError(error.message))
        } else {
            dispatch(themeSlice.actions.themeFetchingError('unknown error'))
        }
    }
}