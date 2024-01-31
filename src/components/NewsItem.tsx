import React, {FC} from 'react';

interface NewsItemProps {
    title: string;
    content: string;
    id: number;
    createdAt: string;
    updatedAt: string;
}

const NewsItem: FC<NewsItemProps> = ({title, content, id, createdAt, updatedAt}) => {
    return (
        <div>
            <h2>{id} {title}</h2>
            <h5>{createdAt} {updatedAt}</h5>
            <p>{content}</p>
        </div>
    );
};

export default NewsItem;