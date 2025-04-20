import React from 'react';
import {Link} from 'react-router-dom'
const ErrorPage = () => {
    return (
        <div className={"bg-primary h-screen flex flex-col items-center justify-center"}>
            <h1 className={"absolute top-0 left-0 logo"}>Roommate Link</h1>
            <h2 className={"header3-text"}>404 not found :( </h2>
            <Link to={"/"} className={"hover:underline"}>Go Back</Link>
        </div>
    );
};

export default ErrorPage;