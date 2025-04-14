import React, {useEffect, useState} from 'react';
import {InfoOutlined} from "@mui/icons-material";
import {grey} from "@mui/material/colors";
import {RatingScore} from "../../../ProfileData";
interface RatingInfoPopoverProps {
    ratingScore: RatingScore;
}
const RatingInfoPopover = ({ratingScore}: RatingInfoPopoverProps) => {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (ratingScore){
            console.log("RATING",ratingScore)
        }
    }, []);

    const checkScore = (score: number): { text: string; color: string } => {
        if (score === 0) {
            return { text: "Unrated", color: "bg-white" };
        } else if (score >= 4.5) {
            return { text: "Excellent", color: "bg-blue-200" };
        } else if (score >= 4) {
            return { text: "Very Good", color: "bg-green-200" };
        } else if (score >= 2) {
            return { text: "Ok", color: "bg-orange-200" };
        } else {
            return { text: "Not Great", color: "bg-red-200" };
        }
    };
    const {text, color} = checkScore(ratingScore.overallAverage);

    return (
        <div>
            <button
                type="button"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <InfoOutlined sx={{color: grey[500]}}/>
            </button>
            {isHovered && (
                <div className={"absolute bg-black w-128 p-4 rounded-lg z-50 "}>
                    <p className=" text-xl font-extrabold text-gray-900 dark:text-white text-center mb-4">User Rating</p>
                    <div className="flex items-center mb-5">
                        <p className={`text-md font-semibold inline-flex items-center justify-center p-1.5 rounded-sm ${color} text-black w-10 h-10`}>{ratingScore.overallAverage}</p>
                        <p className="ms-2 font-medium text-gray-900 dark:text-white">{text}</p>
                        <span className="w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500"></span>
                        <p className=" font-sm text-gray-900 dark:text-gray-200">Overall Average</p>
                    </div>
                    <div className="gap-8 sm:grid sm:grid-cols-2">
                        <div>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Respectfulness</dt>
                                <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded-sm h-2.5 dark:bg-gray-700 me-2">
                                        <div className="bg-blue-600 h-2.5 rounded-sm dark:bg-yellow-200"
                                             style={{width: `${(ratingScore.singleTraitAverages.averageRespectful/ 5) * 100}%`}}></div>
                                    </div>
                                    <span
                                        className="text-sm font-medium text-gray-500 dark:text-gray-400">{ratingScore.singleTraitAverages.averageRespectful}</span>
                                </dd>
                            </dl>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Communication</dt>
                                <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded-sm h-2.5 dark:bg-gray-700 me-2">
                                        <div className="bg-blue-600 h-2.5 rounded-sm dark:bg-yellow-200"
                                             style={{width: `${(ratingScore.singleTraitAverages.averageCommunicative/ 5) * 100}%`}}></div>
                                    </div>
                                    <span
                                        className="text-sm font-medium text-gray-500 dark:text-gray-400">{ratingScore.singleTraitAverages.averageRespectful}</span>
                                </dd>
                            </dl>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Friendliness</dt>
                                <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded-sm h-2.5 dark:bg-gray-700 me-2">
                                        <div className="bg-blue-600 h-2.5 rounded-sm dark:bg-yellow-200"
                                             style={{width: `${(ratingScore.singleTraitAverages.averageFriendly/ 5) * 100}%`}}></div>
                                    </div>
                                    <span
                                        className="text-sm font-medium text-gray-500 dark:text-gray-400">{ratingScore.singleTraitAverages.averageFriendly}</span>
                                </dd>
                            </dl>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Honesty</dt>
                                <dd className="flex items-center">
                                    <div className="w-full bg-gray-200 rounded-sm h-2.5 dark:bg-gray-700 me-2">
                                        <div className="bg-blue-600 h-2.5 rounded-sm dark:bg-yellow-200"
                                             style={{width: `${(ratingScore.singleTraitAverages.averageHonest/ 5) * 100}%`}}></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{ratingScore.singleTraitAverages.averageHonest}</span>
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Responsiveness
                                </dt>
                                <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded-sm h-2.5 dark:bg-gray-700 me-2">
                                        <div className="bg-blue-600 h-2.5 rounded-sm dark:bg-yellow-200"
                                             style={{width: `${(ratingScore.singleTraitAverages.averageResponsive/ 5) * 100}%`}}></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{ratingScore.singleTraitAverages.averageResponsive}</span>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>)}
            <div data-popper-arrow=""></div>
        </div>
    );
};

export default RatingInfoPopover;