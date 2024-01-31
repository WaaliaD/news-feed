import React, {FC, useEffect} from 'react';
import {THEME_ROUTE} from '../utils/routesConsts';
import ReactPullToRefresh from 'react-pull-to-refresh';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {newsSlice} from '../store/reducers/NewsSlice';
import {INews} from '../models/INews';
import NewsItem from './NewsItem';
import {fetchNews} from '../store/reducers/ActionCreators';
import styled from 'styled-components';
import RouterLink from './UI/RouterLink'
import MainButton from './UI/MainButton';
import {ITheme} from '../models/ITheme';
import {themeSlice} from '../store/reducers/ThemeSlice';

const StyledContainer = styled.div<{backgroundColor: string, color: string}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
`

const News: FC = () => {
    const {dispatchCachedNews} = newsSlice.actions;
    const {dispatchCachedTheme} = themeSlice.actions;
    const dispatch = useAppDispatch();
    const {news, isLoading, error} = useAppSelector(state => state.newsReducer);
    const {theme} = useAppSelector(state => state.themeReducer);
    const cachedNews = localStorage.getItem('news');
    const cachedTheme = localStorage.getItem('theme');

    async function fetchHandler() {
        dispatch(fetchNews());
    }

    useEffect(() => {
        if (cachedNews) {
            dispatch(dispatchCachedNews(JSON.parse(cachedNews) as INews[]));
        }
        if (cachedTheme) {
            dispatch(dispatchCachedTheme(JSON.parse(cachedTheme) as ITheme));
        }
        fetchHandler();
    }, [])

    return (
        <StyledContainer
            backgroundColor={theme.mainColor}
            color={theme.textColor}
        >
            <RouterLink
                color={theme.textColor}
                to={THEME_ROUTE}
            >
                Темы
            </RouterLink>
            <MainButton
                onClick={fetchHandler}
                color={theme.textColor}
                backgroundColor={theme.secondColor}
            >
                Загрузить
            </MainButton>
            <ReactPullToRefresh onRefresh={fetchHandler}>
                {error && <h2>Произошла ошибка при {cachedNews ? 'обновлении' : 'загрузке'}: ${error}</h2>}
                {isLoading && <h2>Идет загрузка...</h2>}
                {news.map(value =>
                    <NewsItem
                        key={value.id}
                        title={value.title}
                        content={value.content}
                        id={value.id}
                        createdAt={value.createdAt}
                        updatedAt={value.updatedAt}
                    />
                )}
            </ReactPullToRefresh>
        </StyledContainer>
    );
};

export default News;