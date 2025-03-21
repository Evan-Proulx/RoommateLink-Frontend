import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import {useEffect, useState} from "react";
import {UserProfile} from "../ProfileData.ts";

const BookmarkedUserCard = (user: UserProfile) => {
    const [userData, setUserData] = useState<UserProfile | null>(null);
    const [saved, setSaved] = useState(false);

    const hasProperty = true;

        //Link Percentage
        const percentage = 79;
        const LinkPercentageColor = (percentage) => {
            if (percentage >= 80) {
                return 'text-green-500'; // Green for 80-100%
            } else if (percentage >= 65) {
                return 'text-orange-500'; // Orange for 65-79%
            } else {
                return 'text-red-500'; // Red for 64 and below
            }
        };

    useEffect(() => {
        //Set user as state
        if(user){
            //User gets nested
            setUserData(user.user);
        }
    }, [user])

    // TODO card should be fixed with a better loader
    if (!userData) return <div className={"flex flex-col justify-center items-center h-screen w-full bg-gray-300"}>
        <span className={"loader"}></span>
        <h2 className={"header4-text text-center pt-4"}>Loading...</h2>
    </div>


        return (
            <div className="bg-white w-[650px] p-4 rounded-lg border-2 border-black">

                <div className="grid grid-cols-[auto,1fr,auto] gap-x-4 items-start">
                    <div className="grid grid-cols-[auto,1fr,auto] gap-x-4 items-start">
                        <div className="relative">
                            {/* First Image (Rectangle) */}
                            <img
                                src="https://static.wikia.nocookie.net/469a1cd9-3f5a-47f8-9fc6-1acccdce51d7/scale-to-width/370"
                                alt="Profile"
                                className="w-28 h-28 rounded-lg"
                            />

                            {/* Second Image (Circle, Overlapping the First at Bottom-Right) */}
                            {userData.personalData.has_housing === 1 && (
                                <img
                                    src="https://brennanrogers.com/wp-content/uploads/2024/01/House.jpg"
                                    alt="Profile"
                                    className="absolute bottom-8 right-0 w-16 h-16 rounded-full border-2 border-blue-600 transform translate-y-1/2 translate-x-1/2"
                                />
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col w-fit space-y-1">
                        {/* Name, Icon, and Percentage in one row */}
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <h4 className="font-extrabold text-3xl">{userData.profileData.first_name + " " + userData.profileData.last_name}</h4>
                                <svg className="w-5 h-5 text-gray-800 dark:text-blue-700" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clipRule="evenodd"/>
                                </svg>
                            </div>
                            <p className={`font-semibold text-lg ml-10 ${LinkPercentageColor(percentage)}`}>
                                {percentage} % Link
                            </p>
                        </div>

                        {/* User Details */}
                        <div className="text-gray-500 font-medium ">
                            <div className="flex items-center space-x-1">
                                <p className="font-semibold">{userData.personalData.city + ", " + userData.personalData.province}</p>
                                <svg className="w-4 h-4 text-gray-800 dark:text-gray-500" aria-hidden="true" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/>
                                </svg>
                            </div>
                            <p className="font-semibold">${userData.personalData.budget}</p>
                            <p className="font-semibold">Looking for: {userData.personalData.has_housing ? "Roommate" : "Roommate + Housing"}</p>
                            {/*TODO FIx this DISPlaying the value of has housingggggggg*/}
                            {userData.personalData.has_housing === 1 && (
                                <p className="pt-2 text-xs">4Km away • room + bathroom • 664 Rankin, Windsor</p>)
                            }
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                        <button>
                            <svg className="w-6 h-6 text-gray-800 dark:text-green-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"/>
                            </svg>
                        </button>
                        <button onClick={() => setSaved(!saved)}>
                            {saved ? (
                                <FaBookmark className="text-red-500 text-xl"/>
                            ) : (
                                <FaRegBookmark className="text-gray-500 text-xl"/>
                            )}
                        </button>
                    </div>
                </div>
            </div>

        );
};

export default BookmarkedUserCard;

