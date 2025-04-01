import React, {useEffect, useState} from 'react';
import {RatingStar} from "flowbite-react";
import RatingStars from "./RatingStars.tsx";
import {PropertyData, Rating} from "./../../ProfileData.ts";
import {setUserRating} from "../API/Ratings.ts";
interface RatingModalProps{
    revieweeId: number,
    closeModal: () => void,
}
const RatingModal = ({revieweeId, closeModal}: RatingModalProps) => {
    const [displayAlert, setDisplayAlert] = useState(false);
    const [ratingSet, setRatingSet] = useState(false);
    const [ratings, setRatings] = useState<Rating>({
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
    ]

    const submitUserRating = async () => {
        //If no rating has been set, or user doesnt exist, display alert and return
        if(!ratingSet || !revieweeId){
            setDisplayAlert(true);
            return
        }

        try{
            const response = await setUserRating(ratings)
            console.log(response);

            closeModal()
        }catch(err){
            console.error(err)
            setDisplayAlert(true)
        }
    }

    useEffect(() => {
        console.log("user", revieweeId)
    }, []);

    //Update ratings state with value set in stars component
    const handleSetRating = (ratingId, value) => {
        setRatings({...ratings, [ratingId]: value })
        setRatingSet(true)
    }

    useEffect(() => {
        console.log("Ratings", ratings)
    }, [ratings]);

    return (
            <div className={"space-y-4 pt-4 m-4"}>
                <h1 className={"text-center font-bold text-2xl "}>Rate User</h1>

                <div className={"flex flex-col justify-center space-y-4 items-center p-4"}>
                    {ratingsMap.map((rating, index) => {
                        return (
                            <div key={rating.id} className={"flex flex-col md:flex-row justify-between w-1/2"}>
                                <h2 className={"font-bold"}>{rating.label}</h2>
                                <RatingStars onSetRating={(value) => handleSetRating(rating.id, value)}/>
                            </div>
                        )
                    })}

                    <div className={"flex flex-col items-center space-y-2 pt-4"}>
                        {displayAlert && <p className={"font-bold text-lg text-center"}>Unable to update!</p>}

                        <button type="submit" onClick={submitUserRating}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
    );
};

export default RatingModal;