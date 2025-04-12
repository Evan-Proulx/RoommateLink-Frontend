import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from "./Components/Auth/Login.tsx";
import Survey from "./Components/Survey/Survey.tsx";
import ProfilePage from "./Components/Profile/ProfilePage.tsx";
import ErrorPage from "./ErrorPage.tsx";
import Callback from "./Components/API/Callback.tsx";
import Feed from "./Components/Feed/Feed.tsx";
import Discovery from "./Components/Discovery/Discovery.tsx";
import Conversation from "./Components/Messaging/Conversation.tsx";
import LandingPage from "./Components/LandingPage/LandingPage.tsx";
import Bookmarks from "./Components/Feed/Bookmarks.tsx"
import IDVerification from "./Components/IDVerificationComponents/IDVerification.tsx";

import DiscoveryModal from "./Components/Discovery/DiscoveryModal.tsx"
import FAQ from "./Components/LandingPage/FAQ.tsx";
import PrivacyPolicy from "./Components/LandingPage/PrivacyPolicy.tsx";
import TermsOfUse from "./Components/LandingPage/TermsOfUse.tsx";
// Routes
const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,
        errorElement: <ErrorPage />,
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
        path: '/bookmarks',
        element: <Bookmarks />,
    },
    {
        path: '/test',
        element: <DiscoveryModal />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/home',
        element: <LandingPage />,
    },
    {
        path: '/id',
        element: <IDVerification />,
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

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
