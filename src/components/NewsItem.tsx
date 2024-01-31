import React, {FC} from 'react';
import styled from 'styled-components';

interface NewsItemProps {
    title: string;
    content: string;
    id: number;
    createdAt: string;
    updatedAt: string;
    color: string;
    secondColor: string;
}

const StyledNewsItem = styled.div<{color: string}>`
    border: 1px solid ${props => props.color};
    margin: 10px;
    padding: 0 10px;
`

const NewsItem: FC<NewsItemProps> = ({title, content, id, createdAt, updatedAt, color, secondColor}) => {
    return (
        <StyledNewsItem
            color={color}
        >
            <h2>№{id}: {title}</h2>
            <h5 style={{color: secondColor}}>Создана: {createdAt}, отредактирована: {updatedAt}</h5>
            <p>{content}</p>
        </StyledNewsItem>
    );
};

export default NewsItem;