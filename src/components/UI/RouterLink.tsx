import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

interface RouterLinkProps {
    to: string;
    children: string;
    color: string;
    secondColor: string;
}

const RouterLink: FC<RouterLinkProps> = ({to, children, color, secondColor}) => {
    const StyledRouterLink = styled(Link)`
        position: absolute;
        top: 50px;
        right: 50px;
        text-decoration-color: ${secondColor};
        color: ${color};
    `;

    return (
        <StyledRouterLink
            to={to}
        >
            {children}
        </StyledRouterLink>
    );
};

export default RouterLink;