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
        <div className="flex flex-col items-center pb-5 pt-10 space-y-4">
            <div className={"flex"}><h1 className="text-black font-bold mt-2 text-2xl">User Rating</h1><RatingInfoPopover ratingScore={ratingData}/></div>

            <div className="flex items-center justify-center">
                {[...Array(5)].map((star, index) => {
                    return (
                        <StarRounded key={index} className={`w-8 h-8 cursor-pointer 
                        ${index < Math.floor(ratingData.overallAverage) ? "text-yellow-300" : "text-gray-300"}`}/>
                    )
                })}
                <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">{ratingData.overallAverage}</p>
                <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
                <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
            </div>

            {!myProfileDisplayed && revieweeId &&
                <button type="button" onClick={() => setModalIsOpen(true)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
                     focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                      inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Leave a review
                    <Add/>
                </button>
            }

            <Modal open={modalIsOpen} close={() => setModalIsOpen(false)} width={"rating"}>
                {!myProfileDisplayed && revieweeId &&
                    <RatingModal closeModal={() => setModalIsOpen(false)} revieweeId={revieweeId}/>}
            </Modal>
        </div>

    )
}

export default Rating