import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
const Callback = () => {
    const navigate = useNavigate();
    //useRef allows us to hold a value that doesn't reset when the page reloads.
    const hasRun = useRef(false);
    //React reruns useEffect in development for testing purposes.
    // This causes the data retrieved from the url to be null.
    // We are using useRef to check if useEffect has already run to prevent this functionality.
    useEffect(() => {
        //Stop rerun
        if (hasRun.current)
            return;
        hasRun.current = true;
        // Fetch the access token from the url Cannot use useSearchParams inside useeffect
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        const isExistingUser = params.get('isExistingUser') === "true";
        console.log("Existing user" + isExistingUser);
        //save token to storage and navigate to the home page
        localStorage.setItem('token', token);
        localStorage.setItem('isExistingUser', String(isExistingUser));
        //Navigate to the appropriate page based on if the user is new isExistingUser
        navigate(isExistingUser ? "/profile" : "/survey");
    }, [navigate]);
    return (_jsx("div", { className: "h-screen bg-primary flex items-center justify-center", children: _jsx("p", { children: "Logging in......." }) }));
};
export default Callback;
