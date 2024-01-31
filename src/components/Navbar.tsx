import React from 'react';
import RouterLink from './UI/RouterLink';
import {NEWS_ROUTE, THEME_ROUTE} from '../utils/routesConsts';
import {useAppSelector} from '../hooks/redux';
import styled from 'styled-components';

const StyledNavbar = styled.div<{background: string}>`
    position: fixed;
    bottom: 0;
    background-color: ${props => props.background};
    height: 8vh;
    width: 100vw;
`

const Navbar = () => {
    const {theme} = useAppSelector(state => state.themeReducer);
    return (
        <StyledNavbar
            background={theme.secondColor}
        >
            <RouterLink
                right={'25vw'}
                color={theme.textColor}
                to={NEWS_ROUTE}
            >
                Новости
            </RouterLink>
            <RouterLink
                left={'25vw'}
                color={theme.textColor}
                to={THEME_ROUTE}
            >
                Темы
            </RouterLink>
        </StyledNavbar>
    );
};

export default Navbar;