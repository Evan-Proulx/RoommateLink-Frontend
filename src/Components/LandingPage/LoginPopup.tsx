import React, { useEffect, useRef } from "react";
import { FaGoogle, FaFacebook, FaPhone, FaTimes } from "react-icons/fa";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGoogle, faLinkedin} from "@fortawesome/free-brands-svg-icons";

interface LoginPopupProps {
    isOpen: boolean; // To check if the popup is open
    onClose: () => void; // A function to close the popup if it is open
}

const LoginPopup: React.FC<LoginPopupProps> = ({ isOpen, onClose }) => {
    const popupRef = useRef<HTMLDivElement | null>(null);

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
        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
            <div
                ref={popupRef}
                className="bg-yellow-100 border-black border-2 text-white rounded-lg p-6 w-96 relative"
                onClick={(e) => e.stopPropagation()} // Stops event propagation inside the popup
            >
                {/* Close Button */}
                <button className="absolute top-2 right-2 text-gray-400 hover:text-red-600" onClick={onClose}>
                    <FaTimes size={20} />
                </button>

                {/* Logo */}
                <div className="flex justify-center mb-4">
                    <h1 className="loginPopupLogo text-2xl font-bold transition-transform duration-200 hover:scale-110">
                        Roommate Link
                    </h1>


                </div>

                {/* Title */}
                <h2 className="text-center text-red-600 text-4xl m-4 font-bold">Get Started</h2>
                <p className="text-sm text-gray-700 text-center mt-2">
                    By tapping Log In or Continue, you agree to our{" "}
                    <a href="#" className="text-blue-400">Terms</a>.
                    Learn how we process your data in our{" "}
                    <a href="#" className="text-blue-400">Privacy Policy</a> and{" "}
                    <a href="#" className="text-blue-400">Cookie Policy</a>.
                </p>

                {/* Login Buttons */}
                <div className="mt-5 space-y-3">
                    <button className="w-full flex items-center justify-center gap-2 bg-blue-600 py-2 rounded-lg hover:bg-blue-700">
                        <FontAwesomeIcon icon={faGoogle} size="xl"/> Continue with Google
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 bg-blue-800 py-2 rounded-lg hover:bg-blue-900">
                        <FontAwesomeIcon icon={faFacebook} size="xl"/>Log in with Facebook
                    </button>
                    <button className="w-full flex items-center justify-center gap-3 bg-gray-700 py-2 rounded-lg hover:bg-gray-600">
                    <FontAwesomeIcon icon={faLinkedin} size="xl" /> Log in with LinkedIn
                </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPopup;
