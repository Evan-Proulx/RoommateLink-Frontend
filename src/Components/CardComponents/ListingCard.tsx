import {FaBookmark, FaRegBookmark} from "react-icons/fa";
import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouseUser, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {UserProfile} from "../../ProfileData.ts";
import {ForumOutlined} from "@mui/icons-material";
import {grey} from "@mui/material/colors";
import {bookmarkUser, unbookmarkUser} from "../API/Bookmarks.ts"
import {handleCreateConversation} from "../API/Messaging.ts";
import CardActions from "./CardActions.tsx";

interface ListingCardProps{
    user: UserProfile;
    onSetListingToggle;
}
const ListingCard: React.FC<ListingCardProps> = ({user, onSetListingToggle}) => {
    const imgUrl = import.meta.env.VITE_ROOT_URL + "/storage/";
    const [profileView, setProfileView] = useState(true);
    const [userData, setUserData] = useState<UserProfile | null>(null);
    const [isBookmarked, setIsBookmarked] = useState(false);

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

    // How far is the property to the user location
    const theLocation = 26;

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
    const percentage = 79;
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
    };

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

    // TODO card should be fixed with a better loader
    if (!userData) return <div className={"flex flex-col justify-center items-center h-screen w-full bg-gray-300"}>
        <span className={"loader"}></span>
        <h2 className={"header4-text text-center pt-4"}>Loading...</h2>
    </div>

    return (
        //TODO Fix width for mobile and large screen
        <div className="bg-white p-4 rounded-lg flex flex-col gap-4 border-2 border-black">
            {/* Profile & Listing Details */}
            <div className={`flex gap-4`}>
                {/* Profile Section */}
                <div className={`flex flex-col`}>
                    <img
                        src={userData.profileData.profile_picture ? imgUrl + userData.profileData.profile_picture : "https://archive.org/download/instagram-plain-round/instagram%20dip%20in%20hair.jpg"}
                        alt="Profile"
                        className={`w-28 h-28 rounded-lg`}/>

                    <div className={"flex flex-col w-full"}>
                        <div className="flex items-center space-x-2">
                            <h4 className="text-2xl font-bold">{userData.profileData.first_name + " " + userData.profileData.last_name}</h4>
                            {/*Verification badge*/}
                            <svg className="w-5 h-5 text-gray-800 dark:text-blue-700" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                      d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                      clipRule="evenodd"/>
                            </svg>
                        </div>
                        {/*Display link next to name */}
                        <p className={`font-bold text-lg ${LinkPercentageColor(userData.compatibilityScore)}`}>
                            {userData?.compatibilityScore} % Link
                        </p>

                        <div className="flex flex-col items-start">
                            <p className="text-gray-500 font-semibold">{userData.personalData.city + ", " + userData.personalData.province}</p>
                            <p className="text-gray-500 font-semibold">Age: {userData.profileData.age}</p>
                            <p className="text-gray-500 font-semibold">${userData.personalData.budget}</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    {/* ////////////////////LISTING DETAILS */}
                    <div className={"flex justify-between"}>
                        <div className="flex flex-col w-3/4">
                            <div><h2
                                className="text-2xl font-bold">{userData.personalData.city + ", " + userData.personalData.province}</h2>
                                <div className={"flex items-center space-x-2"}>
                                    {/*Bathroom bedroom count*/}
                                    <p className="text-gray-600 text-sm">{userData?.propertyData.bedroom_count} Bedroom
                                        + {userData?.propertyData.bathroom_count} Bathroom</p>
                                    {/*Separator*/}
                                    <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                                    {/*Location away from user TODO Get actual data*/}
                                    <h4 className={`text-center font-semibold ${getTextColor(theLocation)}`}>
                                        {theLocation}Km away
                                        <FontAwesomeIcon icon={faLocationDot} className="ml-1"/>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        {/*ACTION BUTTONS*/}
                        <CardActions
                            userId={userData?.profileData.account_id}
                            hasHousing={userData?.personalData?.has_housing ?? false}
                            initialProfileView={profileView}
                            initialBookmarkStatus={isBookmarked}
                            onSetListingToggle={handleToggle}
                        />
                    </div>
                    {/*Render Image Gallery and Description*/}
                    <div className="flex gap-2 mt-2">
                        {/* Image Grid */}
                        <div className="grid grid-cols-2 gap-2 w-[450px]">
                            {/* Main Large Image */}
                            <div className="col-span-1">
                                <img
                                    src={propertyImages[0]}
                                    alt="Main Property"
                                    className="w-full h-full object-cover rounded-lg cursor-pointer"
                                    onClick={() => openImage(0)}
                                />
                            </div>

                            {/* Smaller Images */}
                            <div className="grid grid-cols-2 gap-2">
                                {propertyImages.slice(1, 4).map((src, index) => (
                                    <img
                                        key={index}
                                        src={src}
                                        alt={`Property ${index + 2}`}
                                        className="w-full h-24 object-cover rounded-lg cursor-pointer"
                                        onClick={() => openImage(index + 1)}
                                    />
                                ))}

                                {/* Last image with overlay for extra images */}
                                {propertyImages.length > 5 && (
                                    <div className="relative cursor-pointer" onClick={() => openImage(4)}>
                                        <img
                                            src={propertyImages[4]}
                                            alt="More Properties"
                                            className="w-full h-24 object-cover rounded-lg"
                                        />
                                        <div
                                            className="absolute inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center text-white font-bold text-lg">
                                            +{propertyImages.length - 4}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* BIO/LISTING DESCRIPTION */}
                    <div>
                        <p className="text-gray-700 text-sm mt-2 w-[450px] truncate">{truncatedText(userData.profileData.bio)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingCard