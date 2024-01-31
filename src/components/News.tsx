import React, {FC, useEffect, useState} from 'react';
import ReactPullToRefresh from 'react-pull-to-refresh';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {newsSlice} from '../store/reducers/NewsSlice';
import {INews} from '../models/INews';
import NewsItem from './NewsItem';
import {fetchNews} from '../store/reducers/ActionCreators';
import styled from 'styled-components';
import MainButton from './UI/MainButton';
import {ITheme} from '../models/ITheme';
import {themeSlice} from '../store/reducers/ThemeSlice';
import {useInView} from 'react-intersection-observer';

const StyledContainer = styled.div<{backgroundColor: string, color: string}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 92vh;
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
    const [pageNumber, setPageNumber] = useState(1);
    const {ref, inView} = useInView();

    async function reloadNews() {
        dispatch(fetchNews(1, []));
    }

    useEffect(() => {
        if(inView) {
            dispatch(fetchNews(pageNumber+1, news));
            setPageNumber(prevState => prevState+1);
        }
    }, [inView]);

    useEffect(() => {
        if (cachedNews) {
            dispatch(dispatchCachedNews(JSON.parse(cachedNews) as INews[]));
        }
        if (cachedTheme) {
            dispatch(dispatchCachedTheme(JSON.parse(cachedTheme) as ITheme));
        }
        setPageNumber(1);
    }, [])

    return (
        <StyledContainer
            backgroundColor={theme.mainColor}
            color={theme.textColor}
        >
            <MainButton
                onClick={reloadNews}
                color={theme.textColor}
                backgroundColor={theme.secondColor}
            >
                Загрузить
            </MainButton>
            <ReactPullToRefresh onRefresh={reloadNews}>
                {error && <h2>Произошла ошибка при {cachedNews ? 'обновлении' : 'загрузке'}: ${error}</h2>}
                {isLoading && <h2>Идет загрузка...</h2>}
                {news.map(value =>
                    <NewsItem
                        secondColor={theme.secondColor}
                        color={theme.textColor}
                        key={value.id}
                        title={value.title}
                        content={value.content}
                        id={value.id}
                        createdAt={value.createdAt}
                        updatedAt={value.updatedAt}
                    />
                )}
                <div ref={ref} style={{height: 10}}></div>
            </ReactPullToRefresh>
        </StyledContainer>
    );
};

export default News;