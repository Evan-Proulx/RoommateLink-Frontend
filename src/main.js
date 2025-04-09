import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Survey from "./Components/Survey/Survey";
import ProfilePage from "./Components/Profile/ProfilePage";
import ErrorPage from "./ErrorPage";
import Callback from "./Components/API/Callback";
import Feed from "./Components/Feed/Feed";
import Discovery from "./Components/Discovery/Discovery";
import Conversation from "./Components/Messaging/Conversation";
import LandingPage from "./Components/LandingPage/LandingPage";
import Bookmarks from "./Components/Feed/Bookmarks";
import IDVerification from "./Components/IDVerificationComponents/IDVerification";
// Routes
const router = createBrowserRouter([
    {
        path: '/',
        element: _jsx(LandingPage, {}),
        errorElement: _jsx(ErrorPage, {}),
    },
    {
        path: '/survey',
        element: _jsx(Survey, {}),
    },
    {
        path: '/profile',
        element: _jsx(ProfilePage, {}),
    },
    {
        path: '/callback', //Callback url
        element: _jsx(Callback, {}),
    },
    {
        path: '/feed',
        element: _jsx(Feed, {}),
    },
    {
        path: '/discovery',
        element: _jsx(Discovery, {}),
    },
    {
        path: '/chats',
        element: _jsx(Conversation, {}),
    },
    {
        path: '/bookmarks',
        element: _jsx(Bookmarks, {}),
    },
    {
        path: '/home',
        element: _jsx(LandingPage, {}),
    },
    {
        path: '/id',
        element: _jsx(IDVerification, {}),
    },
], { basename: '/roommatelink' } //App url put infront of the rest of the route
);
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsx(RouterProvider, { router: router }) }));
