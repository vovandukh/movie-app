import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { routes } from './../route';
import { HOME_ROUTE } from './../utils/consts';

const AppRoutes = () => {
    return (
        <Routes>
            {routes.map(el => (
                <Route key={el.path} path={el.path} element={el.components} />
            ))}
            <Route path='/' element={<Navigate to={HOME_ROUTE} />} />
        </Routes>
    );
};

export default AppRoutes;