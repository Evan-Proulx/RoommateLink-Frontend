import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";

const SsoButton = () => {

    const toGoogleAuth = (provider: string) =>{
        window.location.href = `http://127.0.0.1:8000/api/auth/${provider}/redirect`;
    }

    return (
    <button type="button"
            className="w-fit text-white bg-secondary hover:bg-blue-800/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 ">
        <FontAwesomeIcon className="w-4 h-4 me-2" icon={faGoogle} />
        Sign in with Google
    </button>
    );
};

export default SsoButton;