import React, {FC, useEffect} from 'react';
import {NEWS_ROUTE} from '../utils/routesConsts';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {fetchColorDesign} from '../store/reducers/ActionCreators';
import styled from 'styled-components';
import RouterLink from './UI/RouterLink';
import {BLUE_COLOR, DARK_COLOR, LIGHT_COLOR} from '../utils/colorsConsts';
import {themeSlice} from '../store/reducers/ThemeSlice';
import {ITheme} from '../models/ITheme';
import MainButton from './UI/MainButton';

const StyledContainer = styled.div<{backgroundColor: string, color: string}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
`

const InteractiveBoard = styled.div`
    display: flex;
    width: 50vw;
    justify-content: space-around;
`

const Theme: FC = () => {
    const {dispatchCachedTheme} = themeSlice.actions
    const {theme, isLoading, error} = useAppSelector(state => state.themeReducer);
    const dispatch = useAppDispatch();
    const cachedTheme = localStorage.getItem('theme');

    useEffect(() => {
        if (cachedTheme) {
            dispatch(dispatchCachedTheme(JSON.parse(cachedTheme) as ITheme));
        }
    }, [])

    return (
        <StyledContainer
            backgroundColor={theme.mainColor}
            color={theme.textColor}
        >
            <RouterLink
                color={theme.textColor}
                to={NEWS_ROUTE}
            >
                Новости
            </RouterLink>
            <h2>Текущая тема:</h2>
            <h3>{theme.title}</h3>
            <InteractiveBoard>
                <MainButton
                    onClick={() => dispatch(fetchColorDesign(DARK_COLOR))}
                    color={theme.textColor}
                    backgroundColor={theme.secondColor}
                >
                    dark
                </MainButton>
                <MainButton
                    onClick={() => dispatch(fetchColorDesign(LIGHT_COLOR))}
                    color={theme.textColor}
                    backgroundColor={theme.secondColor}
                >
                    light
                </MainButton>
                <MainButton
                    onClick={() => dispatch(fetchColorDesign(BLUE_COLOR))}
                    color={theme.textColor}
                    backgroundColor={theme.secondColor}
                >
                    blue
                </MainButton>
            </InteractiveBoard>
            {error && <h2>Произошла ошибка при обновлении темы: ${error}</h2>}
            {isLoading && <h2>Обновление темы...</h2>}
        </StyledContainer>
    );
};

export default Theme;