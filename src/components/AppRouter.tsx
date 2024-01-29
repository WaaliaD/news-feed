import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {routes} from '../routes';
import {NEWS_ROUTE} from '../utils/consts';

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({path, Component}) =>
                <Route
                    key={path}
                    path={path}
                    element={<Component/>}
                />
            )}
            <Route
                path="*"
                element={<Navigate to={NEWS_ROUTE}/>}
            />
        </Routes>
    );
};

export default AppRouter;