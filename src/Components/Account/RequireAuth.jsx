import React from 'react';
import { useAuth } from '../../Context/AuthContext';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function RequireAuth({allowedRoles}) {
    const { auth } = useAuth();
    const location = useLocation();
    if(allowedRoles===undefined){
        return (
            auth?.IsAuthenticated===true
            ? <Outlet/>
            : <Navigate to="/" state={{ from: location }} replace />
        );
    }

    return (
        auth?.Roles?.find((role) => allowedRoles.includes(role))
        ? <Outlet/>
        : auth?.IsAuthenticated===true
            ? <Navigate to="/unauthorized" state={{ from: location }} replace />
            : <Navigate to="/" state={{ from: location }} replace />
    );
       
}