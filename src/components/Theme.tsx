import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {fetchColorDesign} from '../store/reducers/ActionCreators';
import styled from 'styled-components';
import {BLUE_COLOR, colorsType, DARK_COLOR, LIGHT_COLOR} from '../utils/colorsConsts';
import {themeSlice} from '../store/reducers/ThemeSlice';
import {ITheme} from '../models/ITheme';
import MainButton from './UI/MainButton';

const StyledContainer = styled.div<{backgroundColor: string, color: string}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 92vh;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
`

const InteractiveBoard = styled.div`
    display: flex;
    flex-direction: column;
    width: 35vw;
    height: 25vh;
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

    function changeTheme (color: colorsType) {
        if(theme.name !== color) {
            dispatch(fetchColorDesign(color));
        }
    }

    return (
        <StyledContainer
            backgroundColor={theme.mainColor}
            color={theme.textColor}
        >
            <h2>Текущая тема:</h2>
            <h3>{theme.title}</h3>
            <InteractiveBoard>
                <MainButton
                    onClick={() => changeTheme(DARK_COLOR)}
                    color={theme.textColor}
                    backgroundColor={theme.secondColor}
                >
                    Темная тема
                </MainButton>
                <MainButton
                    onClick={() => changeTheme(LIGHT_COLOR)}
                    color={theme.textColor}
                    backgroundColor={theme.secondColor}
                >
                    Светлая тема
                </MainButton>
                <MainButton
                    onClick={() => changeTheme(BLUE_COLOR)}
                    color={theme.textColor}
                    backgroundColor={theme.secondColor}
                >
                    Синяя тема
                </MainButton>
            </InteractiveBoard>
            {error && <h2>Произошла ошибка при обновлении темы: ${error}</h2>}
            {isLoading && <h2>Обновление темы...</h2>}
        </StyledContainer>
    );
};

export default Theme;