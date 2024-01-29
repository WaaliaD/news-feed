import React, {FC} from 'react';
import {NEWS_ROUTE} from '../utils/consts';
import {Link} from 'react-router-dom';
import classes from './Theme.module.css'
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {fetchColorDesign} from '../store/reducers/ActionCreators';

const Theme: FC = () => {
    const {theme, isLoading, error} = useAppSelector(state => state.themeReducer);
    const dispatch = useAppDispatch();

    return (
        <div className={`${classes.container} ${theme}`}>
            <Link to={NEWS_ROUTE} className={classes.newsLink}>Новости</Link>
            <div className={classes.interactiveBoard}>
                <button
                    className={classes.button}
                    onClick={() => dispatch(fetchColorDesign('dark'))}
                >
                    dark
                </button>
                <button
                    className={classes.button}
                    onClick={() => dispatch(fetchColorDesign('light'))}
                >
                    light
                </button>
                <button
                    className={classes.button}
                    onClick={() => dispatch(fetchColorDesign('blue'))}
                >
                    blue
                </button>
            </div>
            {error && <h2>Произошла ошибка при обновлении темы: ${error}</h2>}
            {isLoading && <h2>Обновление темы...</h2>}
        </div>
    );
};

export default Theme;