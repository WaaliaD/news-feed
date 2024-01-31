import React, {FC} from 'react';
import styled from 'styled-components';

interface MainButtonProps {
    onClick: () => void;
    children: string;
    color: string;
    backgroundColor: string;
}

const MainButton: FC<MainButtonProps> = ({children, onClick, color, backgroundColor}) => {
    const StyledMainButton = styled.button`
        color: ${color};
        background-color: ${backgroundColor};
        border: ${color} solid 1px;
        border-radius: 10%;
    `

    return (
        <StyledMainButton onClick={onClick}>
            {children}
        </StyledMainButton>
    );
};

export default MainButton;