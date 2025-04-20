import React from 'react';
import {Navigate} from "react-router-dom";

//Checks if the user is authenticated before allowing them to navigate between routes.
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        // Redirect to landing page if the user doesnt have an access token
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;