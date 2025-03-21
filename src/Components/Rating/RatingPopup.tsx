import React, { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";

interface RatingPopupProps {
    isOpen: boolean; // To check if the popup is open
    onClose: () => void; // A function to close the popup if it is open
}

const RatingPopup: React.FC<RatingPopupProps> = ({ isOpen, onClose }) => {
    // State to store ratings for each label
    const [ratings, setRatings] = useState<{ [key: string]: number }>({
        Respectful: 0,
        Communicative: 0,
        Friendly: 0,
        Clean: 0,
        Honest: 0,
    });

    // State to store the average rating
    const [averageRating, setAverageRating] = useState<number | null>(null);

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

    // Return null if popup is not open
    if (!isOpen) return null;

    // Handle star click for a specific label
    const handleStarClick = (label: string, rating: number) => {
        setRatings((prevRatings) => ({
            ...prevRatings,
            [label]: rating,
        }));
    };

    // Get star color based on the rating for a specific label
    const getStarColor = (label: string, starIndex: number) => {
        return starIndex <= ratings[label] ? "text-yellow-400" : "text-gray-400";
    };

    // Calculate the average rating percentage
    const getAveragePercentage = () => {
        const total = Object.values(ratings).reduce((sum, rating) => sum + rating, 0);
        return (total / (Object.keys(ratings).length * 5)) * 100;
    };

    // Save average rating when 'Rate' button is clicked
    const handleRateClick = () => {
        const average = getAveragePercentage();
        // Store average rating in the state
        setAverageRating(average);
    };

    return (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center">
            <div
                ref={popupRef}
                className="bg-yellow-100 p-6 rounded-lg w-[750px] border-2 border-red-600 relative shadow-lg"
                onClick={(e) => e.stopPropagation()} // Stops event propagation inside the popup
            >
                {/* Close button in the top-right corner */}
                <button
                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
                    onClick={onClose} // Close the popup
                >
                    <FaTimes size={20} />
                </button>

                <h1 className="text-center text-red-600 text-2xl m-4 font-bold">
                    Would you like to Rate USERNAME?
                </h1>

                {/* Rating section */}
                <div className="space-y-4">
                    {["Respectful", "Communicative", "Friendly", "Clean", "Honest"].map((label, index) => (
                        <div key={index} className="flex items-center justify-between">
                            {/* Label with fixed width */}
                            <h2 className="text-xl font-bold text-red-800 w-40 text-left">{label}</h2>
                            {/* Stars container */}
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((starIndex) => (
                                    <svg
                                        key={starIndex}
                                        onClick={() => handleStarClick(label, starIndex)}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className={`w-8 h-8 cursor-pointer ${getStarColor(label, starIndex)}`}
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3 7h7l-5 4 2 7-6-4-6 4 2-7-5-4h7z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleRateClick}
                    className="px-6 py-3 mt-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                    Rate
                </button>
            </div>
        </div>
    );
};

export default RatingPopup;
