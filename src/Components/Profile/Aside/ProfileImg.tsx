import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {isUserVerified} from "../../API/Verification";

function ProfileImg({ url, percentage, myProfileDisplayed }) {
    const [isVerified, setIsVerified] = useState<boolean | null>(null); // Track if the user is verified, null for loading state
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/id");
    };

    // Link Percentage
    const getTextColor = (percentage: number) => {
        if (percentage >= 80) {
            return 'text-green-500'; // Green for 80-100%
        } else if (percentage >= 65) {
            return 'text-orange-500'; // Orange for 65-79%
        } else {
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

    return (
        <div className="flex flex-col items-center space-y-2">
            <img
                src={url ? url : "https://archive.org/download/instagram-plain-round/instagram%20dip%20in%20hair.jpg"}
                alt="User Profile"
                className="sm:w-32 sm:h-32 w-20 h-20 rounded-full shadow-md"
            />
            {percentage ? <label className={`text-center text-md pt-4 font-black sm:text-3xl ${getTextColor(percentage)}`}>
                {percentage} % Link
            </label> : null}

            {/* Conditionally render the "Verify Your ID" button */}
            {isVerified === false && myProfileDisplayed && (
                <div className="p-2">
                <button onClick={handleNavigate} className="border-blue-600 border-2 text-xs font-semibold sm:p-2 rounded-lg bg-white sm:font-bold">
                    Verify Your ID
                </button>
                </div>
            )}
        </div>
    );
}

export default ProfileImg;
