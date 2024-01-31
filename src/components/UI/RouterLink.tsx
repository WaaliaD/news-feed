import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

interface RouterLinkProps {
    to: string;
    children: string;
    color: string;
    right?: string;
    left?: string;
}

const StyledRouterLink = styled(Link)<{color: string, right?: string, left?: string}>`
    position: fixed;
    bottom: calc(4vh - 1rem);
    right: ${({right = 'auto'}) => right};
    left: ${({left = 'auto'}) => left};;
    text-decoration: none;
    color: ${props => props.color};
    font-size: 1.3rem;
`;

const RouterLink: FC<RouterLinkProps> = ({to, children, color, right, left}) => {
    return (
        <StyledRouterLink
            right={right}
            left={left}
            to={to}
            color={color}
        >
            {children}
        </StyledRouterLink>
    );
};

export default RouterLink;