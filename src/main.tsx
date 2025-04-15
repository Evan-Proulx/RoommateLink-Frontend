import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom'
import Survey from "./Components/Survey/Survey";
import ProfilePage from "./Components/Profile/ProfilePage";
import ErrorPage from "./ErrorPage";
import Callback from "./Components/API/Callback";
import Feed from "./Components/Feed/Feed";
import Discovery from "./Components/Discovery/Discovery";
import Conversation from "./Components/Messaging/Conversation";
import LandingPage from "./Components/LandingPage/LandingPage";
import Bookmarks from "./Components/Feed/Bookmarks"
import IDVerification from "./Components/IDVerificationComponents/IDVerification";
import FAQ from "./Components/LandingPage/FAQ";
import PrivacyPolicy from "./Components/LandingPage/PrivacyPolicy";
import TermsOfUse from "./Components/LandingPage/TermsOfUse";
import ProtectedRoute from "./Components/ProtectedRoute";

// Routes
//Protected routes prevent unauthorized users from
// accessing routes they shouldnt be able to. Trying to navigates them to '/'
const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/survey',
        element: <ProtectedRoute><Survey/></ProtectedRoute>,
    },
    {
        path: '/profile',
        element: <ProtectedRoute><ProfilePage/></ProtectedRoute>,
    },
    {
        path: '/callback', //Callback url
        element: <Callback />,
    },
    {
        path: '/feed',
        element: <ProtectedRoute><Feed/></ProtectedRoute>,
    },
    {
        path: '/discovery',
        element: <ProtectedRoute><Discovery/></ProtectedRoute>,
    },
    {
        path: '/chats',
        element: <ProtectedRoute><Conversation/></ProtectedRoute>,
    },
    {
        path: '/bookmarks',
        element: <ProtectedRoute><Bookmarks/></ProtectedRoute>,
    },
    {
        path: '/home',
        element: <LandingPage />,
    },
    {
        path: '/id',
        element:( <ProtectedRoute><IDVerification/></ProtectedRoute>),
    },
    {
        path: '/faq',
        element: <FAQ />,
    },
    {
        path: '/privacyPolicy',
        element: <PrivacyPolicy/>,
    },
    {
        path: '/termsOfUse',
        element: <TermsOfUse/>,
    },
],
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

