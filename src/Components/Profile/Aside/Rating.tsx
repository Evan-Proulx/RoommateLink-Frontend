import {Add, StarRounded} from "@mui/icons-material";
import Modal from "../../Modal";
import React, {useEffect, useState} from "react";
import RatingModal from "../Rating/RatingModal";
import {getRating} from "../../API/Ratings";
import RatingInfoPopover from "../Rating/RatingInfoPopover";
import {RatingScore} from "../../../ProfileData";

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
        <div className="flex flex-col items-center sm:pb-5 sm:pt-10 sm:space-y-4">
            <div className="flex flex-wrap items-center justify-center sm:gap-x-3 sm:gap-y-3 gap-2">
                <h1 className="text-black font-bold  mt-2 sm:text-2xl">User Rating</h1>
                <RatingInfoPopover ratingScore={ratingData} />
                {!myProfileDisplayed && revieweeId && (
                    <button
                        type="button"
                        onClick={() => setModalIsOpen(true)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm
                inline-flex items-center justify-center sm:px-6 sm:py-3 sm:w-44 sm:h-[48px]
                w-[30px] h-[30px] transition-all duration-300"
                    >
                        <Add className="sm:hidden w-full h-full flex justify-center items-center" />
                        <span className="hidden sm:inline-block">Leave a rating</span>
                    </button>
                )}
            </div>

            <div className="flex items-center justify-center">
                {[...Array(5)].map((star, index) => (
                    <StarRounded
                        key={index}
                        className={`!w-4 !h-4 sm:!w-8 sm:!h-8 cursor-pointer ${
                            index < Math.floor(ratingData.overallAverage)
                                ? "text-yellow-300"
                                : "text-gray-300"
                        }`}
                    />

                ))}
                <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">{ratingData.overallAverage}</p>
                <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
                <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
            </div>

            <Modal open={modalIsOpen} close={() => setModalIsOpen(false)} width={"rating"}>
                {!myProfileDisplayed && revieweeId && (
                    <RatingModal closeModal={() => setModalIsOpen(false)} revieweeId={revieweeId} />
                )}
            </Modal>
        </div>


    )
}

export default Rating