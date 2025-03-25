import React, {useEffect, useState} from 'react';
import {UserProfile} from "../../ProfileData.ts";
import {bookmarkUser, unbookmarkUser} from "../API/Bookmarks.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouseUser, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {ForumOutlined} from "@mui/icons-material";
import {grey} from "@mui/material/colors";
import {FaBookmark, FaRegBookmark} from "react-icons/fa";
import {fetchConversations, handleCreateConversation} from "../API/Messaging.ts";
import {useNavigate} from "react-router-dom";
import ProfilePage from "../Profile/ProfilePage.tsx";

interface ProfileCardProps {
    user: UserProfile;
    onSetListingToggle;
}
const ProfileCard: React.FC<ProfileCardProps> = ({user, onSetListingToggle}) => {
    const imgUrl = import.meta.env.VITE_ROOT_URL + "/storage/";
    const [profileView, setProfileView] = useState(true);
    const [userData, setUserData] = useState<UserProfile | null>(null);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const navigate = useNavigate();


    // Set max characters for user's description
    const maxLength = 250;

    const truncatedText = (text) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    }

    // Images of the property, it depends on how many images the user uploaded
    const propertyImages = [
        "https://photos.gta-homes.com/1544-darfield-road-windsor-x11939538.jpg",
        "https://www.movemeto.com/ontario/img/medium/real-estate.jpg",
        "https://www.movemeto.com/ontario/img/medium/single-family-homes-for-sale.jpg",
        "https://cdn1.zoocasa.com/images/listings/f9988f5e-4ba4-4983-be5b-64c3efc44f14.jpg",
        "https://cdn4.thecanadianhome.com/wecar/Photo25003221-1.jpeg?user=&ml_num=25003221&is_property=1&listing_type=1&width=1920&aspect_ratio=40:33&quality=30",
        "https://cdn4.thecanadianhome.com/wecar/Photo25003221-1.jpeg?user=&ml_num=25003221&is_property=1&listing_type=1&width=1920&aspect_ratio=40:33&quality=30",
        "https://cdn4.thecanadianhome.com/wecar/Photo25003221-1.jpeg?user=&ml_num=25003221&is_property=1&listing_type=1&width=1920&aspect_ratio=40:33&quality=30",
        "https://cdn4.thecanadianhome.com/wecar/Photo25003221-1.jpeg?user=&ml_num=25003221&is_property=1&listing_type=1&width=1920&aspect_ratio=40:33&quality=30",
    ];

    // Function to handle image click (for future modal or zoom)
    const openImage = (index) => {
        console.log(`Opening image at index: ${index}`);
    };

    // Changing the color based on how far it is
    const getTextColor = (percentage) => {
        if (percentage <= 25) {
            return "text-green-500"; // Green for less than 25 KM
        } else if (percentage <= 50) {
            return "text-orange-500"; // Orange for less than 50
        } else {
            return "text-red-500"; // Red for 51 and above
        }
    };

    // Link Percentage
    const LinkPercentageColor = (percentage) => {
        if (percentage >= 80) {
            return "text-green-500"; // Green for 80-100%
        } else if (percentage >= 65) {
            return "text-orange-500"; // Orange for 65-79%
        } else {
            return "text-red-500"; // Red for 64 and below
        }
    };

    const handleToggle = () => {
        setProfileView(!profileView);
        onSetListingToggle(!profileView);
    };

    //Creates conversation with selected profile.
    //If a conversation already exists between users the conversation id is still returned.
    const createConversations = async () => {
        try{
            const response = await handleCreateConversation(userData?.profileData.account_id);
            console.log(response);

            // Get the conversation ID from the conversation
            navigate(`/chats`);
        }catch (error) {
            console.error("Error creating conversation:", error);
        }
    }

    const toggleBookmark = async () => {
        try {
            if (isBookmarked) {
                await unbookmarkUser(userData?.profileData.account_id);
            } else {
                await bookmarkUser(userData?.profileData.account_id);
            }
            setIsBookmarked(!isBookmarked)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        //Set user as state
        if (user) {
            //User gets nested
            setUserData(user);
            console.log(userData)
        }
    }, [user])

    //Navigate to profile page with the user's profile.
    // Specify that it is not the logged in user's profile page
    const navigateToProfile = () => {navigate('/profile', {state: {profile: userData, myProfileDisplayed: false}});}

    // TODO card should be fixed with a better loader
    if (!userData) return <div className={"flex flex-col justify-center items-center h-screen w-full bg-gray-300"}>
        <span className={"loader"}></span>
        <h2 className={"header4-text text-center pt-4"}>Loading...</h2>
    </div>

    return (
        //TODO Fix width for mobile and large screen
        <div className="bg-white p-4 rounded-lg flex flex-col gap-4 border-2 border-black">
            {/* Profile & Listing Details */}
            <div className={`flex flex-col gap-4`}>
                {/* Profile Section */}
                <div className={`flex`}>
                    <img onClick={navigateToProfile}
                        src={userData.profileData.profile_picture ? imgUrl + userData.profileData.profile_picture :
                            "https://archive.org/download/instagram-plain-round/instagram%20dip%20in%20hair.jpg"}
                        alt="Profile"
                        className={`w-28 h-28 rounded-lg mr-4 cursor-pointer`}/>

                    <div className={"flex flex-col w-full"}>
                        <div className="flex items-center space-x-2">
                            <h4  onClick={navigateToProfile} className="text-2xl font-bold hover:underline cursor-pointer">{userData.profileData.first_name + " " + userData.profileData.last_name}</h4>
                            {/*Verification badge*/}
                            <svg className="w-5 h-5 text-gray-800 dark:text-blue-700" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                      d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                      clipRule="evenodd"/>
                            </svg>
                            {/*Display link next to name when not in property view*/}
                            <p className={`font-bold text-lg ${LinkPercentageColor(userData.compatibilityScore)}`}>
                                {userData?.compatibilityScore} % Link
                            </p>
                        </div>

                        <div className="flex flex-col items-start">
                            <p className="text-gray-500 font-semibold">{userData.personalData.city + ", " + userData.personalData.province}</p>
                            <p className="text-gray-500 font-semibold">Age: {userData.profileData.age}</p>
                            <p className="text-gray-500 font-semibold">${userData.personalData.budget}</p>
                        </div>
                    </div>

                    {/*Action buttons*/}
                    <div className={""}>
                        <div className="flex items-center gap-2">
                            <button className="flex items-center">
                                <ForumOutlined onClick={createConversations} sx={{color: grey[500]}}/>
                            </button>

                            <button onClick={() => toggleBookmark()} className="flex items-center">
                                {isBookmarked ? (
                                    <FaBookmark className="text-red-500 text-xl leading-none"/>
                                ) : (
                                    <FaRegBookmark className="text-gray-500 text-xl leading-none"/>
                                )}
                            </button>
                        </div>

                        {/*Only display property toggle if they have a property*/}
                        {/*{userData.personalData.has_housing ? (*/}
                            <div className="m-2">
                                <label htmlFor="toggle" className="flex items-center cursor-pointer">
                                    <div className="relative">
                                        {/* Actual Checkbox (Hidden) */}
                                        <input type="checkbox" id="toggle"
                                               className="sr-only"
                                               checked={profileView}
                                               onChange={handleToggle}
                                        />
                                        {/* Toggle Background */}
                                        <div className={`w-12 h-6 rounded-full shadow-inner transition ${
                                            profileView ? "bg-green-500" : "bg-gray-300"
                                        }`}
                                        ></div>

                                        {/* Toggle Handle */}
                                        <FontAwesomeIcon
                                            icon={faHouseUser}
                                            className={`absolute top-1 w-4 h-4 transition-transform ${
                                                profileView ? "translate-x-6 text-white" : "translate-x-1 text-gray-500"
                                            }`}
                                        />
                                    </div>
                                </label>
                            </div>
                        {/*) : null*/}
                        {/*}*/}
                    </div>
                </div>

                {/*About User*/}
                <div className={"flex justify-between"}>
                    <div>
                        <h3 className="mt-4 font-bold m-2 text-xl">About Me</h3>
                        <p className="text-gray-600 m-2 font-normal">{userData.profileData.bio}</p>
                        <div className="p-2">
                            <label
                                className="bg-blue-500 text-white text-center font-normal p-2 px-4 pb-2 w-fit m-1 rounded-xl">
                                respectful
                            </label>
                            <label
                                className="bg-blue-500 text-white text-center font-normal p-2 px-4 pb-2 w-fit m-1 rounded-xl">
                                Clean
                            </label>
                            <label
                                className="bg-blue-500 text-white text-center font-normal p-2 px-4 pb-2 w-fit m-1 rounded-xl">
                                Communicative
                            </label>
                            <label
                                className="bg-blue-500 text-white text-center font-normal p-2 px-4 pb-2 w-fit m-1 rounded-xl">
                                Friendly
                            </label>
                            <label
                                className="bg-blue-500 text-white text-center font-normal p-2 px-4 pb-2 w-fit m-1 rounded-xl">
                                Honest
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;