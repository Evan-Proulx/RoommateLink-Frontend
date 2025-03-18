import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from "./Components/Auth/Login.tsx";
import Register from "./Components/Auth/Register/Register.tsx";
import RecoverPassword from "./Components/Auth/RecoverPassword.tsx";
import ResetPassword from "./Components/Auth/ResetPassword.tsx";
import Survey from "./Components/Survey/Survey.tsx";
import ProfilePage from "./Components/Profile/ProfilePage.tsx";
import ErrorPage from "./ErrorPage.tsx";
import Callback from "./Components/API/Callback.tsx";
import Feed from "./Components/Feed/Feed.tsx";
import Discovery from "./Components/Feed/Discovery.tsx";
import Conversation from "./Components/Messaging/Conversation.tsx";
import LandingPage from "./Components/LandingPage/LandingPage.tsx";

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
        path: '/callback', //Callback url
        element: <Callback />,
    },
    {
        path: '/feed',
        element: <Feed/>,
    },
    {
        path: '/discovery',
        element: <Discovery/>,
    },
    {
        path: '/chats',
        element: <Conversation />,
    },
    {
        path: '/test',
        element: <Conversation/>,
    },
    {
        path: '/home',
        element: <LandingPage />,
    },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
