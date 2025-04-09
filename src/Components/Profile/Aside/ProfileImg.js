import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isUserVerified } from "../../API/Verification";
function ProfileImg({ url, percentage, myProfileDisplayed }) {
    const [isVerified, setIsVerified] = useState(null); // Track if the user is verified, null for loading state
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/id");
    };
    // Link Percentage
    const getTextColor = (percentage) => {
        if (percentage >= 80) {
            return 'text-green-500'; // Green for 80-100%
        }
        else if (percentage >= 65) {
            return 'text-orange-500'; // Orange for 65-79%
        }
        else {
            return 'text-red-500'; // Red for 64 and below
        }
    };
    // Check if the user is verified on mount
    useEffect(() => {
        const checkVerification = async () => {
            const result = await isUserVerified(); // Use the method you already have
            setIsVerified(result);
        };
        checkVerification();
    }, []);
    return (_jsxs("div", { className: "flex flex-col items-center space-y-2", children: [_jsx("img", { src: url ? url : "https://archive.org/download/instagram-plain-round/instagram%20dip%20in%20hair.jpg", alt: "User Profile", className: "w-32 h-32 rounded-full shadow-md" }), percentage ? _jsxs("label", { className: `text-center font-black text-3xl ${getTextColor(percentage)}`, children: [percentage, " % Link"] }) : null, isVerified === false && myProfileDisplayed && (_jsx("button", { onClick: handleNavigate, className: "border-blue-600 border-2 p-2 rounded-lg bg-white font-bold", children: "Verify Your ID" }))] }));
}
export default ProfileImg;
