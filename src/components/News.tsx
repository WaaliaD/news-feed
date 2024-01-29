import React, {FC, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {THEME_ROUTE} from '../utils/consts';
import classes from './News.module.css';
import ReactPullToRefresh from 'react-pull-to-refresh';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {newsSlice} from '../store/reducers/NewsSlice';
import {INews} from '../models/INews';
import NewsItem from './NewsItem';
import {fetchNews} from '../store/reducers/ActionCreators';

const News: FC = () => {
    const {dispatchCache} = newsSlice.actions
    const dispatch = useAppDispatch();
    const {news, isLoading, error} = useAppSelector(state => state.newsReducer);
    const {theme} = useAppSelector(state => state.themeReducer);
    const cachedData = localStorage.getItem('news');

    async function fetchHandler() {
        dispatch(fetchNews());
    }

    useEffect(() => {
        if (cachedData) {
            dispatch(dispatchCache(JSON.parse(cachedData) as INews[]));
        }
        fetchHandler();
    }, [])

    return (
        <div className={theme}>
            <Link to={THEME_ROUTE} className={classes.themeLink}>Темы</Link>
            <button onClick={fetchHandler}>Загрузить</button>
            <ReactPullToRefresh onRefresh={fetchHandler} className={classes.container}>
                {error && <h2>Произошла ошибка при {cachedData ? 'обновлении' : 'загрузке'}: ${error}</h2>}
                {isLoading && <h2>Идет загрузка...</h2>}
                {news.map(value =>
                    <NewsItem key={value.id} id={value.id} userID={value.userId} title={value.title} body={value.body} />
                )}
            </ReactPullToRefresh>
        </div>
    );
};

export default News;