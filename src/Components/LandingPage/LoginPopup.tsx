import React, {useEffect, useRef, useState} from "react";
import {FaTimes } from "react-icons/fa";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faGoogle, faLinkedin} from "@fortawesome/free-brands-svg-icons";


interface LoginPopupProps {
    isOpen: boolean; // To check if the popup is open
    onClose: () => void; // A function to close the popup if it is open
}

const LoginPopup: React.FC<LoginPopupProps> = ({ isOpen, onClose }) => {
    const popupRef = useRef<HTMLDivElement | null>(null);
    const [isAdultChecked, setIsAdultChecked] = useState(false);

    //Navigate user to correct oauth route
    const toAuth = (provider: string) => {
        if (isAdultChecked) {
            const rootUrl = import.meta.env.VITE_ROOT_URL;
            window.location.href = `${rootUrl}/api/auth/${provider}/redirect`;
        } else {
            alert("Please confirm you are 18 years of age or older.");
        }

    };

    // Close the popup if clicked outside
    useEffect(() => {
        if (!isOpen) return;

        const handleOutsideClick = (e: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
            <div
                ref={popupRef}
                className="bg-yellow-100 border-black border-2 text-gray-700 rounded-lg p-4 md:p-6 w-5/6 md:w-96 relative"
                onClick={(e) => e.stopPropagation()} // Stops event propagation inside the popup
            >
                {/* Close Button */}
                <button className="absolute top-2 right-2 text-gray-400 hover:text-red-600" onClick={onClose}>
                    <FaTimes size={20} />
                </button>

                {/* Logo */}
                <div className="flex justify-center mb-3 md:mb-4">
                    <h1 className="loginPopupLogo text-xl md:text-2xl font-bold transition-transform duration-300 hover:scale-110 text-red-600">
                        Roommate Link
                    </h1>
                </div>

                {/* Title */}
                <h2 className="text-center text-red-600 text-2xl md:text-3xl mb-2 md:mb-4 font-bold">Get Started</h2>
                <p className="text-xs md:text-sm text-gray-700 text-center mt-1 md:mt-2">
                    By tapping Log In or Continue, you agree to our{" "}
                    <a href="#" className="text-blue-600 underline">Terms</a>.
                    Learn how we process your data in our{" "}
                    <a href="#" className="text-blue-600 underline">Privacy Policy</a> and{" "}
                    <a href="#" className="text-blue-600 underline">Cookie Policy</a>.
                </p>

                {/* Age Verification Checkbox */}
                <div className="mt-3 flex items-center">
                    <input
                        type="checkbox"
                        id="adultConfirmation"
                        className="form-checkbox h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                        checked={isAdultChecked}
                        onChange={(e) => setIsAdultChecked(e.target.checked)}
                    />
                    <label htmlFor="adultConfirmation" className="ml-2 text-sm text-gray-700 font-bold">
                        I am 18 years old or older.
                    </label>
                </div>

                {/* Login Buttons */}
                <div className="mt-3 md:mt-5 space-y-2 md:space-y-3">
                    <button
                        onClick={() => toAuth("google")}
                        className={`w-full flex items-center justify-center gap-2 bg-blue-600 py-2 rounded-lg hover:bg-blue-700 text-white font-semibold ${
                            !isAdultChecked ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        disabled={!isAdultChecked}
                    >
                        <FontAwesomeIcon icon={faGoogle} size="lg" /> <span className="text-sm md:text-base">Continue with Google</span>
                    </button>
                    <button
                        onClick={() => toAuth("linkedin-openid")}
                        className={`w-full flex items-center justify-center gap-2 bg-blue-500 py-2 rounded-lg hover:bg-blue-600 text-white font-semibold ${
                            !isAdultChecked ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        disabled={!isAdultChecked}
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="lg" /> <span className="text-sm md:text-base">Log in with LinkedIn</span>
                    </button>
                    <button
                        onClick={() => toAuth("github")}
                        className={`w-full flex items-center justify-center gap-2 bg-gray-700 py-2 rounded-lg hover:bg-gray-800 text-white font-semibold ${
                            !isAdultChecked ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        disabled={!isAdultChecked}
                    >
                        <FontAwesomeIcon icon={faGithub} size="lg" /> <span className="text-sm md:text-base">Log in with GitHub</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPopup;