import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

interface RouterLinkProps {
    to: string;
    children: string;
    color: string;
    secondColor: string;
}

const StyledRouterLink = styled(Link)<{secondColor: string, color: string}>`
        position: absolute;
        top: 50px;
        right: 50px;
        text-decoration-color: ${props => props.secondColor};
        color: ${props => props.color};
    `;

const RouterLink: FC<RouterLinkProps> = ({to, children, color, secondColor}) => {
    return (
        <StyledRouterLink
            to={to}
            color={color}
            secondColor={secondColor}
        >
            {children}
        </StyledRouterLink>
    );
};

export default RouterLink;