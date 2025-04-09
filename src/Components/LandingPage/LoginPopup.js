import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const LoginPopup = ({ isOpen, onClose }) => {
    const popupRef = useRef(null);
    //Navigate user to correct oauth route
    const toAuth = (provider) => {
        const rootUrl = import.meta.env.VITE_ROOT_URL;
        window.location.href = `${rootUrl}/api/auth/${provider}/redirect`;
    };
    // Close the popup if clicked outside
    useEffect(() => {
        if (!isOpen)
            return;
        const handleOutsideClick = (e) => {
            if (popupRef.current && !popupRef.current.contains(e.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [isOpen, onClose]);
    if (!isOpen)
        return null;
    return (_jsx("div", { className: "fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center", children: _jsxs("div", { ref: popupRef, className: "bg-yellow-100 border-black border-2 text-white rounded-lg p-6 w-96 relative", onClick: (e) => e.stopPropagation(), children: [_jsx("button", { className: "absolute top-2 right-2 text-gray-400 hover:text-red-600", onClick: onClose, children: _jsx(FaTimes, { size: 20 }) }), _jsx("div", { className: "flex justify-center mb-4", children: _jsx("h1", { className: "loginPopupLogo text-2xl font-bold transition-transform duration-300 hover:scale-110", children: "Roommate Link" }) }), _jsx("h2", { className: "text-center text-red-600 text-4xl m-4 font-bold", children: "Get Started" }), _jsxs("p", { className: "text-sm text-gray-700 text-center mt-2", children: ["By tapping Log In or Continue, you agree to our", " ", _jsx("a", { href: "#", className: "text-blue-600", children: "Terms" }), ". Learn how we process your data in our", " ", _jsx("a", { href: "#", className: "text-blue-600", children: "Privacy Policy" }), " and", " ", _jsx("a", { href: "#", className: "text-blue-600", children: "Cookie Policy" }), "."] }), _jsxs("div", { className: "mt-5 space-y-3", children: [_jsxs("button", { onClick: () => toAuth("google"), className: "w-full flex items-center justify-center gap-2 bg-blue-600 py-2 rounded-lg hover:bg-blue-700", children: [_jsx(FontAwesomeIcon, { icon: faGoogle, size: "xl" }), " Continue with Google"] }), _jsxs("button", { onClick: () => toAuth("linkedin-openid"), className: "w-full flex items-center justify-center gap-2 bg-blue-500 py-2 rounded-lg hover:bg-gray-600", children: [_jsx(FontAwesomeIcon, { icon: faLinkedin, size: "xl" }), " Log in with LinkedIn"] }), _jsxs("button", { onClick: () => toAuth("github"), className: "w-full flex items-center justify-center gap-2 bg-gray-700 py-2 rounded-lg hover:bg-blue-900", children: [_jsx(FontAwesomeIcon, { icon: faGithub, size: "xl" }), " Log in with GitHub"] })] })] }) }));
};
export default LoginPopup;
