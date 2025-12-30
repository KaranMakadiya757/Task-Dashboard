/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
// import Cookies from 'js-cookie';
// import { useRefreshToken } from "../API/auth.api";

// AuthGuard Component : Checks for both authentication status and user permissions before rendering children
export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
    // State to track authentication and permission status
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    // APIs to fetch accees token & user permission
    // const { refreshAccessToken } = useRefreshToken()

    useEffect(() => {
        // Function to check if user is authenticated
        const checkAuthStatus = async () => {
            // const accessToken = Cookies.get("accessToken");
            const accessToken = "abcd";

            if (accessToken) {
                setIsAuthenticated(true);
            }
            else {
                // If no access token, try to refresh it
                // const refreshed = await refreshAccessToken();
                // setIsAuthenticated(refreshed);
            }
        };

        // Execute both checks when component mounts
        checkAuthStatus();
    }, []);

    // Show loading state while checking authentication and permissions
    if (isAuthenticated === null) {
        return "Loading..."
    }

    // Redirect to sign-in if not authenticated or not permitted, otherwise render children
    if (isAuthenticated) {
        return children
    } else {
        return <Navigate to="/sign-in" state={{ from: location.pathname }} />
    }
};

// LogGuard Component : Redirects authenticated users to home page
export const LogGuard = ({ children }: { children: React.ReactNode }) => {
    // const auth = Boolean(Cookies.get("accessToken"));
    const auth = false;

    // If user is not authenticated, render children (login/signup pages)
    // Otherwise redirect to home page
    if (!auth) {
        return children
    } else {
        return <Navigate to="/" />
    }
}