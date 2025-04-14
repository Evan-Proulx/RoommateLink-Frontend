import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
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
],
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
