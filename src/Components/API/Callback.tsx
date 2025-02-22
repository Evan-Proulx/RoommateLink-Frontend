import React, {useEffect} from 'react';
import {useNavigate, useParams, useSearchParams} from "react-router-dom"

const Callback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the access token from the url Cannot use useSearchParams inside useeffect
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        const isExistingUser = params.get('isExistingUser');

        //save token to storage and navigate to the home page
            localStorage.setItem('token', token);
            localStorage.setItem('isExistingUser', isExistingUser);

            if (isExistingUser === "true"){
                navigate("/profile")
            }else {
                navigate("/survey")
            }
    }, [navigate])

    return (
        <div className={"h-screen bg-primary flex items-center justify-center"}>
            <p>Logging in.......</p>
        </div>
    );
};

export default Callback;