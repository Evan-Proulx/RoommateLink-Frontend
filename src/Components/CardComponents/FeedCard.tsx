import React, {useEffect, useState} from 'react';
import {
    Bookmark, BookmarkAddedOutlined,
    BookmarkAddOutlined,
    BookmarkOutlined,
    BookmarksOutlined,
    ForumOutlined,
    LocationOn
} from "@mui/icons-material";
import {grey, orange, pink} from '@mui/material/colors';
import MapPopup from "../Survey/Survey-Map-Popup.tsx";
import {FaBookmark, FaRegBookmark} from "react-icons/fa";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouseUser, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {UserProfile} from "../../ProfileData.ts";
import {bookmarkUser, unbookmarkUser} from "../API/Bookmarks.ts";

const FeedCard = (user: UserProfile) => {
        const [userData, setUserData] = useState<UserProfile | null>(null);
        const [isBookmarked, setIsBookmarked] = useState(false);
        const [propertyView, SetPropertyView] = useState(false);
        const [attributes, setAttributes] = useState(["non-smoker", "English", "Vegan"]);
        const [isMapOpen, setIsMapOpen] = useState(false);
        // Set max characters for user's description
        const maxLength = 250;
        const userDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper venenatis nulla, vitae congue turpis scelerisque at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in viverra ante. Proin rutrum mi metus, et imperdiet dolor pretium sed. Integer aliquet diam ut tempus elementum. Nullam vel lectus ut dolor egestas placerat. Aliquam tincidunt scelerisque erat, quis pellentesque ligula tristique in. Aliquam molestie malesuada urna ac semper.";

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

        const handlePropertyToggle = () => {
            SetPropertyView(!propertyView);
        }

        const toggleBookmark = async () => {
            try{
                if (isBookmarked) {
                    await unbookmarkUser(userData?.profileData.account_id);
                }else{
                    await bookmarkUser(userData?.profileData.account_id);
                }
                setIsBookmarked(!isBookmarked)
            }catch(err){
                console.error(err)
            }
        }

        useEffect(() => {
            //Set user as state
            if (user) {
                //User gets nested
                setUserData(user.user);
                console.log(userData)
            }
        }, [user])

        // TODO card should be fixed with a better loader
        if (!userData) return <div className={"flex flex-col justify-center items-center h-screen w-full bg-gray-300"}>
            <span className={"loader"}></span>
            <h2 className={"header4-text text-center pt-4"}>Loading...</h2>
        </div>


    const actionButtons = (
    <div className={"m-4"}>
        <div className="flex items-center gap-2">
            <button className="flex items-center">
                <ForumOutlined sx={{color: grey[500]}}/>
            </button>

            <button onClick={() => toggleBookmark()} className="flex items-center">
                {isBookmarked ? (
                    <FaBookmark className="text-red-500 text-xl leading-none"/>
                ) : (
                    <FaRegBookmark className="text-gray-500 text-xl leading-none"/>
                )}
            </button>
        </div>

        {/* Toggle Switch */}
        <div className="m-2">
            <label htmlFor="toggle" className="flex items-center cursor-pointer">
                <div className="relative">
                    {/* Actual Checkbox (Hidden) */}
                    <input type="checkbox" id="toggle"
                           className="sr-only"
                           checked={propertyView}
                           onChange={handlePropertyToggle}
                    />
                    {/* Toggle Background */}
                    <div className={`w-12 h-6 rounded-full shadow-inner transition ${
                        propertyView ? "bg-green-500" : "bg-gray-300"
                    }`}
                    ></div>

                    {/* Toggle Handle */}
                    <FontAwesomeIcon
                        icon={faHouseUser}
                        className={`absolute top-1 w-4 h-4 transition-transform ${
                            propertyView ? "translate-x-6 text-white" : "translate-x-1 text-gray-500"
                        }`}
                    />
                </div>
            </label>
        </div>
    </div>
    );

    return (
        <div className={"flex items-center justify-center w-full"}>
            <div className={"bg-white border-2 border-black rounded m-4 h-auto card-shadow"}>
                <div className={`flex ${!propertyView ? "flex-col" : ""} items-start justify-between`}>

                    <div className={`flex ${propertyView ? "flex-col m-4" : "flex-row"}`}>
                        <img
                            src="https://images.surferseo.art/3e8e3027-36da-4ca6-8d77-76b74405d002.webp"
                            alt="Profile"
                            className={`w-28 h-28 rounded-lg ${!propertyView ? "m-4" : "m-0"}`}/>
                        <div className={"flex mt-4"}>
                            {/*Main info*/}
                            <div className="flex flex-col ">
                                <div className={"flex space-x-3"}>
                                    {/*User Name*/}
                                    <h1 className={`${!propertyView ? "text-3xl" : "text-xl"} font-bold`}>{userData.profileData.first_name + " " + userData.profileData.last_name}</h1>
                                    <div className={"w-6 h-6 bg-blue-600 rounded-full"}></div>
                                </div>
                                {/*USER Location*/}
                                <div className={"flex items-end card-text-light cursor-pointer hover:underline"}
                                     onClick={() => setIsMapOpen(true)}>
                                    <p className={"text-sm"}>Windsor, On </p>
                                    <LocationOn/>
                                </div>
                                {/*USER AGE AND Budget*/}
                                <p className={"text-sm card-text-light"}>Age: {userData.profileData.age}</p>
                                <p className={"text-sm card-text-light"}>${userData.personalData.budget}</p>
                            </div>
                        </div>
                        <div className={"hidden sm:block justify-end"}>{actionButtons}</div>


                    </div>

                    {propertyView ? (
                        <div>
                        <div className="flex flex-col w-3/4 mt-4">
                            <h2 className="text-2xl font-bold">{userData.personalData.city + ", " + userData.personalData.province}</h2>

                            <div className={"flex items-center space-x-2"}>
                                {/*Bathroom bedroom count*/}
                                <p className="text-gray-600 text-sm">{userData.propertyData.bedroom_count} Bedroom
                                    + {userData.propertyData.bathroom_count} Bathroom</p>
                                {/*Separator*/}
                                <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                                {/*Location away from user TODO Get actual data*/}
                                <h4 className={`text-center font-semibold ${getTextColor(theLocation)}`}>
                                    {theLocation}Km away
                                    <FontAwesomeIcon icon={faLocationDot} className="ml-1"/>
                                </h4>
                            </div>
                        </div>
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
                        ): (
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
                    )}

                    {/*display buttons next to name on larger screen*/}
                    {propertyView ? (<div>
                        <div className={"hidden sm:block"}>{actionButtons}</div>
                    </div>) :  null}
            </div>

            {/*<div className={"flex justify-between "}>*/}
            {/*    <div className={"flex justify-between content-end items-end align-bottom sm:justify-start sm:block ml-4 card-text-light w-full sm:w-1/2"}>*/}
            {/*        <p className={""}>Looking for: Roommate + Place</p>*/}
            {/*        /!*dont display on small screens*!/*/}
            {/*        <p className={"hidden sm:block text-sm pt-2"}>Hey, I'm John! I'm looking for a chill and respectful roommate to*/}
            {/*            share a place....</p>*/}

            {/*        <div className={"sm:hidden"}>{actionButtons}</div>*/}
            {/*    </div>*/}

            {/*        /!*Dont display on small screens*!/*/}
            {/*        <div className={"hidden sm:flex flex-row-reverse flex-wrap align-bottom items-end m-4 w-1/2"}>*/}
            {/*            {attributes.map(attributes =>*/}
            {/*                <div>*/}
            {/*                    <p className="px-2 py-1 me-1 text-sm font-medium text-white rounded-sm bg-secondary">{attributes}</p>*/}
                {/*                </div>*/}
                {/*            )}*/}
                {/*        </div>*/}
                {/*</div>*/}
                {/* Map Popup that displays when location is clicked*/}
                <MapPopup
                    isOpen={isMapOpen}
                    onClose={() => setIsMapOpen(false)}
                    onProfileMap={true}
                />
            </div>
      </div>
    );
};

export default FeedCard;