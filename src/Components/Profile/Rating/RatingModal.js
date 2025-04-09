import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import RatingStars from "./RatingStars";
import { setUserRating } from "../../API/Ratings";
const RatingModal = ({ revieweeId, closeModal }) => {
    const [displayAlert, setDisplayAlert] = useState(false);
    const [ratingSet, setRatingSet] = useState(false);
    const [ratings, setRatings] = useState({
        reviewee_id: revieweeId,
        respectful_rating: 1,
        communicative_rating: 1,
        friendly_rating: 1,
        honest_rating: 1,
        responsive_rating: 1
    });
    //Set label value for each rating
    const ratingsMap = [
        { id: 'respectful_rating', label: 'Respectful' },
        { id: 'communicative_rating', label: 'Communicative' },
        { id: 'friendly_rating', label: 'Friendly' },
        { id: 'honest_rating', label: 'Honest' },
        { id: 'responsive_rating', label: 'Responsive' }
    ];
    const submitUserRating = async () => {
        //If no rating has been set, or user doesnt exist, display alert and return
        if (!ratingSet || !revieweeId) {
            setDisplayAlert(true);
            return;
        }
        try {
            const response = await setUserRating(ratings);
            console.log(response);
            closeModal();
        }
        catch (err) {
            console.error(err);
            setDisplayAlert(true);
        }
    };
    useEffect(() => {
        console.log("user", revieweeId);
    }, []);
    //Update ratings state with value set in stars component
    const handleSetRating = (ratingId, value) => {
        setRatings({ ...ratings, [ratingId]: value });
        setRatingSet(true);
    };
    useEffect(() => {
        console.log("Ratings", ratings);
    }, [ratings]);
    return (_jsxs("div", { className: "space-y-4 pt-4 m-4", children: [_jsx("h1", { className: "text-center font-bold text-2xl ", children: "Rate User" }), _jsxs("div", { className: "flex flex-col justify-center space-y-4 items-center p-4", children: [ratingsMap.map((rating, index) => {
                        return (_jsxs("div", { className: "flex flex-col md:flex-row justify-between w-1/2", children: [_jsx("h2", { className: "font-bold", children: rating.label }), _jsx(RatingStars, { onSetRating: (value) => handleSetRating(rating.id, value) })] }, rating.id));
                    }), _jsxs("div", { className: "flex flex-col items-center space-y-2 pt-4", children: [displayAlert && _jsx("p", { className: "font-bold text-lg text-center", children: "Unable to update!" }), _jsx("button", { type: "submit", onClick: submitUserRating, className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800", children: "Submit" })] })] })] }));
};
export default RatingModal;
