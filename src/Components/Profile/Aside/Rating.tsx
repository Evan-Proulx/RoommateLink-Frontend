import {Add, StarRounded} from "@mui/icons-material";
import Modal from "../../Modal.tsx";
import React, {useEffect, useState} from "react";
import RatingModal from "../Rating/RatingModal.tsx";
import {getRating} from "../../API/Ratings.ts";
import RatingInfoPopover from "../Rating/RatingInfoPopover.tsx";
import {RatingScore} from "../../../ProfileData.ts";

interface RatingProps{
    myProfileDisplayed: boolean,
    revieweeId?: number
}
function Rating({myProfileDisplayed, revieweeId}: RatingProps) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [ratingData, setRatingData] = useState<RatingScore>({
        overallAverage: 0,
        singleTraitAverages: {
            averageCommunicative: 0,
            averageFriendly: 0,
            averageHonest: 0,
            averageRespectful: 0,
            averageResponsive: 0
        }
    })

    const retrieveRatings = async () => {
        if(!revieweeId){
            return
        }

        // TODO Get check eligibility to work
        try{
            const response = await getRating(revieweeId)
            console.log(response);
            setRatingData(response);
        }catch(err){
            console.error(err)
        }

    }
    useEffect(() => {
        retrieveRatings()
    }, []);

    return (
        <div className="flex flex-col sm:items-center sm:pb-5 sm:pt-10 sm:space-y-4 space-y-2">
            {/* Title + Popover + Button in a row on mobile */}
            <div className="flex flex-row sm:flex-col items-center justify-between w-full sm:w-auto px-2">
                {/* Title + Info */}
                <div className="flex items-center">
                    <h1 className="text-black font-bold text-lg sm:text-2xl">User Rating</h1>
                    <RatingInfoPopover ratingScore={ratingData} />
                </div>

                {/* Button */}
                {!myProfileDisplayed && revieweeId &&
                    <button
                        type="button"
                        onClick={() => setModalIsOpen(true)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm
                    sm:px-6 sm:py-3 sm:w-44 sm:h-[48px] sm:m-4 w-[40px] h-[40px] ml-auto transition-all duration-300 flex items-center justify-center"
                    >
                        <Add className="sm:hidden w-full h-full" />
                        <span className="hidden sm:inline-block">Leave a rating</span>
                    </button>
                }
            </div>

            {/* Stars and score */}
            <div className="flex items-center justify-start sm:justify-center px-2">
                {[...Array(5)].map((star, index) => (
                    <StarRounded
                        key={index}
                        className={`w-6 h-6 sm:w-8 sm:h-8 cursor-pointer ${
                            index < Math.floor(ratingData.overallAverage) ? "text-yellow-300" : "text-gray-300"
                        }`}
                    />
                ))}
                <p className="ms-1 text-sm font-medium text-gray-500">{ratingData.overallAverage}</p>
                <p className="ms-1 text-sm font-medium text-gray-500">out of</p>
                <p className="ms-1 text-sm font-medium text-gray-500">5</p>
            </div>

            {/* Rating Modal */}
            <Modal open={modalIsOpen} close={() => setModalIsOpen(false)} width="rating">
                {!myProfileDisplayed && revieweeId &&
                    <RatingModal closeModal={() => setModalIsOpen(false)} revieweeId={revieweeId} />}
            </Modal>
        </div>


    )
}

export default Rating