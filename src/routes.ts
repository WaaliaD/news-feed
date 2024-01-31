import {routesType, NEWS_ROUTE, THEME_ROUTE} from './utils/routesConsts';
import News from './components/News';
import Theme from './components/Theme';
import {FC} from 'react';

interface route {
    path: routesType;
    Component: FC;
}

export const routes: route[]  = [
    {
        path: NEWS_ROUTE,
        Component: News,
    },
    {
        path: THEME_ROUTE,
        Component: Theme,
    }
]