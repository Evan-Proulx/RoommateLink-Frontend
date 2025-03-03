import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from "./Components/Auth/Login.tsx";
import Register from "./Components/Auth/Register/Register.tsx";
import RecoverPassword from "./Components/Auth/RecoverPassword.tsx";
import ResetPassword from "./Components/Auth/ResetPassword.tsx";
import Survey from "./Components/Survey/Survey.tsx";
import ProfilePage from "./Components/Profile/ProfilePage.tsx";
import ErrorPage from "./ErrorPage.tsx";
import Callback from "./Components/API/Callback.tsx";
import CollegeInput from "./Components/Survey/CollegeInput.tsx";
import Navbar from "./Components/Navbar.tsx";
import FeedCard from "./Components/Feed/FeedCard.tsx";
import Feed from "./Components/Feed/Feed.tsx";
import SurveyValidationTest from "./Components/SurveyValidationTest.tsx";
import Discovery from "./Components/Feed/Discovery.tsx";
// Routes
const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/forgot-password',
        element: <RecoverPassword />,
    },
    {
        path: '/reset-password',
        element: <ResetPassword />,
    },
    {
        path: '/survey',
        element: <Survey />,
    },
    {
        path: '/profile',
        element: <ProfilePage />,
    },
    {
        path: '/callback',
        element: <Callback />,
    },
    {
        path: '/college',
        element: <CollegeInput />,
    },
    {
        path: '/test',
        element: <Discovery/>,
    },

    // Add more routes here
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
