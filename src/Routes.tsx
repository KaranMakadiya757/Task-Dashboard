import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AuthGuard, LogGuard } from "./Common/Protected Routes/AuthGuard";

// -------------------------------------- Login ------------------------------------------

const Login = lazy(() => import("./Pages/Login/Login"));


// -------------------------------------- Register ---------------------------------------

const Register = lazy(() => import("./Pages/Register/Register"));


// -------------------------------------- Dashboard --------------------------------------

const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard"));


// -------------------------------------- Profile ----------------------------------------

const Profile = lazy(() => import("./Pages/Profile/Profile"));



export const Routes = createBrowserRouter([
    // Authantication Routes
    {
        path: "/sign-in",
        element: <LogGuard><Login /></LogGuard>,
    },
    {
        path: "/sign-up",
        element: <LogGuard><Register /></LogGuard>,
    },

    // Dashboard
    {
        path: "/",
        element: <AuthGuard><Dashboard /></AuthGuard>,
    },
    {
        path: "/my-profile",
        element: <AuthGuard><Profile /></AuthGuard>,
    },
]);