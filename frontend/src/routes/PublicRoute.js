import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";


const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    const { success } = useSelector(state => state.auth)

    return (
        success ?
            <Navigate to="/" />
            : <Outlet />
    );
};

export default PublicRoute;