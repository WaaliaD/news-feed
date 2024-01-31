import React, {FC} from 'react';
import styled from 'styled-components';

interface MainButtonProps {
    onClick: () => void;
    children: string;
    color: string;
    backgroundColor: string;
}

const StyledMainButton = styled.button<{ color: string, backgroundColor: string }>`
    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};
    border: ${props => props.color} solid 1px;
    border-radius: 5px;
`

const MainButton: FC<MainButtonProps> = ({children, onClick, color, backgroundColor}) => {
    return (
        <StyledMainButton
            onClick={onClick}
            color={color}
            backgroundColor={backgroundColor}
        >
            {children}
        </StyledMainButton>
    );
};

export default MainButton;