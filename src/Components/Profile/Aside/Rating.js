import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Add, StarRounded } from "@mui/icons-material";
import Modal from "../../Modal";
import { useEffect, useState } from "react";
import RatingModal from "../Rating/RatingModal";
import { getRating } from "../../API/Ratings";
import RatingInfoPopover from "../Rating/RatingInfoPopover";
function Rating({ myProfileDisplayed, revieweeId }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [ratingData, setRatingData] = useState({
        overallAverage: 0,
        singleTraitAverages: {
            averageCommunicative: 0,
            averageFriendly: 0,
            averageHonest: 0,
            averageRespectful: 0,
            averageResponsive: 0
        }
    });
    const retrieveRatings = async () => {
        if (!revieweeId) {
            return;
        }
        // TODO Get check eligibility to work
        try {
            const response = await getRating(revieweeId);
            console.log(response);
            setRatingData(response);
        }
        catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        retrieveRatings();
    }, []);
    return (_jsxs("div", { className: "flex flex-col items-center pb-5 pt-10 space-y-4", children: [_jsxs("div", { className: "flex", children: [_jsx("h1", { className: "text-black font-bold mt-2 text-2xl", children: "User Rating" }), _jsx(RatingInfoPopover, { ratingScore: ratingData })] }), _jsxs("div", { className: "flex items-center justify-center", children: [[...Array(5)].map((star, index) => {
                        return (_jsx(StarRounded, { className: `w-8 h-8 cursor-pointer 
                        ${index < Math.floor(ratingData.overallAverage) ? "text-yellow-300" : "text-gray-300"}` }, index));
                    }), _jsx("p", { className: "ms-1 text-sm font-medium text-gray-500 dark:text-gray-400", children: ratingData.overallAverage }), _jsx("p", { className: "ms-1 text-sm font-medium text-gray-500 dark:text-gray-400", children: "out of" }), _jsx("p", { className: "ms-1 text-sm font-medium text-gray-500 dark:text-gray-400", children: "5" })] }), !myProfileDisplayed && revieweeId &&
                _jsxs("button", { type: "button", onClick: () => setModalIsOpen(true), className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4\r\n                     focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center\r\n                      inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800", children: ["Leave a rating", _jsx(Add, {})] }), _jsx(Modal, { open: modalIsOpen, close: () => setModalIsOpen(false), width: "rating", children: !myProfileDisplayed && revieweeId &&
                    _jsx(RatingModal, { closeModal: () => setModalIsOpen(false), revieweeId: revieweeId }) })] }));
}
export default Rating;
