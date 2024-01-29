import React, {FC} from 'react';

interface NewsItemProps {
    id: number;
    userID: number;
    title: string;
    body: string;
}

const NewsItem: FC<NewsItemProps> = ({id, userID, title, body}) => {
    return (
        <div>
            <h2>{id} {title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default NewsItem;