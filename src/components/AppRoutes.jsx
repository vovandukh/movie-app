import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { routes } from './../route';
import { HOME_ROUTE } from './../utils/consts';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to={HOME_ROUTE} />} />
            {routes.map(el => (
                <Route key={el.path} path={el.path} element={el.components} />
            ))}

            {/* <Route path='/' element={<Home />} /> */}
        </Routes>
    );
};

export default AppRoutes;