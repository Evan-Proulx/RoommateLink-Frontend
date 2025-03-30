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
import CardActions from "./CardActions.tsx";
import CardSkeletonLoader from "./CardSkeletonLoader.tsx";
import {retrievePropertyImages} from "../API/Profile.ts";
import ImageGallery from "../Profile/ProfileComponents/ImageGallery.tsx";

const ProfileCard = ({user}) => {
    const imgUrl = import.meta.env.VITE_ROOT_URL + "/storage/";
    const navigate = useNavigate();

    const [profileView, setProfileView] = useState(true);
    const [profileData, setProfileData] = useState<UserProfile | null>(null);
    const [propertyImages, setPropertyImages] = useState<string[]>([]);

    // Set max characters for user's description
    const maxLength = 250;
    const theLocation = 26;

    useEffect(() => {
        //Set user as state
        if (user) {
            //User gets nested
            setProfileData(user);
            console.log(profileData)
        }
    }, [user]);

    const handleToggle = (userId) => {
        console.log('Toggling for userId:', userId);
        setProfileView(prev => !prev);
    };



    // Get property images when the profile is set
    useEffect(() => {
        if (profileData?.propertyData.id){
            getPropertyImages();
        }
        setProfileView(profileData?.personalData.has_housing ?? true);
    },[profileData]);


    useEffect(() => {
        console.log("VIEW", profileView);
    }, [profileView]);


    // const truncatedText = (text) => {
    //     return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    // }

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
            return "text-yellow-500"; // Orange for 65-79%
        } else {
            return "text-red-500"; // Red for 64 and below
        }
    };

    //Gets array of property image urls
    const getPropertyImages = async () => {
        //Check if user has housing property before fetching images
        if(profileData?.personalData.has_housing) {
            const propertyID = profileData?.propertyData.id;
            if (!propertyID) {return}

            try {
                const response = await retrievePropertyImages(propertyID);
                //Add url root to urls
                const fixedImgUrls = response.map(image => imgUrl + image)
                setPropertyImages(fixedImgUrls);
            } catch (err) {
                console.log(err);
            }
        }
    }

    //Navigate to profile page with the user's profile.
    // Specify that it is not the logged in user's profile page
    const navigateToProfile = () => {
        navigate('/profile', {state: {profile: profileData, myProfileDisplayed: false}});
    }

    //Show skeleton card if the user isnt set yet
    if (!profileData) return (
        <CardSkeletonLoader/>
    )

    return (
        //TODO Fix width for mobile and large screen
        <div className="relative bg-white p-4 rounded-lg w-5/6 flex flex-col gap-4 border-2 border-black">
            {/*Display the card actions independently of the view*/}
            <div className={"absolute top-2 right-2 pt-2"}>
                <CardActions
                    userId={profileData?.profileData.account_id}
                    hasHousing={profileData?.personalData?.has_housing}
                    profileView={profileView}
                    onSetListingToggle={handleToggle}/>
            </div>

            {!profileView ? (
                //Profile & Listing Details
                <div className={`flex flex-col gap-4`}>
                    {/* Profile Section */}
                    <div className={`flex`}>
                        <img onClick={navigateToProfile} src={profileData.profileData.profile_picture ? imgUrl + profileData.profileData.profile_picture :
                                 "https://archive.org/download/instagram-plain-round/instagram%20dip%20in%20hair.jpg"}
                             alt="Profile"
                             className={`w-28 h-28 rounded-lg mr-4 cursor-pointer`}/>

                        <div className={"flex flex-col w-full"}>
                            <div className="flex items-center space-x-2">
                                <h4 onClick={navigateToProfile}
                                    className="text-2xl font-bold hover:underline cursor-pointer">
                                    {profileData.profileData.first_name + " " + profileData.profileData.last_name}
                                </h4>

                                {/*Verification badge*/}
                                <svg className="w-5 h-5 text-gray-800 dark:text-blue-700" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                     viewBox="0 0 24 24">
                                    <path fillRule="evenodd"
                                          d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                          clipRule="evenodd"/>
                                </svg>

                                {/*Display link next to name when not in property view*/}
                                <p className={`font-bold text-lg ${LinkPercentageColor(profileData.compatibilityScore)}`}>
                                    {profileData?.compatibilityScore} % Link
                                </p>
                            </div>

                            {/*User info*/}
                            <div className="flex flex-col items-start">
                                <p className="text-gray-500 font-semibold">{profileData.personalData.city + ", " + profileData.personalData.province}</p>
                                <p className="text-gray-500 font-semibold">Age: {profileData.profileData.age}</p>
                                <p className="text-gray-500 font-semibold">${profileData.personalData.budget}</p>
                            </div>
                        </div>
                    </div>

                    {/*About Attributes*/}
                    <div className={"flex justify-between"}>
                        <div>
                            <h3 className="mt-4 font-bold m-2 text-xl">About Me</h3>
                            <p className="text-gray-600 m-2 font-normal">{profileData.profileData.bio}</p>
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
            ) : (
                <div className={`flex gap-4`}>
                    {/* Profile Section */}
                    <div className={`flex flex-col`}>
                        <img src={profileData.profileData.profile_picture ? imgUrl + profileData.profileData.profile_picture :
                                "https://archive.org/download/instagram-plain-round/instagram%20dip%20in%20hair.jpg"}
                            alt="Profile"
                            className={`w-28 h-28 rounded-lg`}/>

                        <div className={"flex flex-col w-full"}>
                            <div className="flex items-center space-x-2">
                                {/*User Name*/}
                                <h4 className="text-2xl font-bold">{profileData.profileData.first_name + " " + profileData.profileData.last_name}</h4>

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
                            <p className={`font-bold text-lg ${LinkPercentageColor(profileData.compatibilityScore)}`}>
                                {profileData?.compatibilityScore} % Link
                            </p>

                            {/*Property info*/}
                            <div className="flex flex-col items-start">
                                <p className="text-gray-500 font-semibold">{profileData.personalData.city + ", " + profileData.personalData.province}</p>
                                <p className="text-gray-500 font-semibold">Age: {profileData.profileData.age}</p>
                                <p className="text-gray-500 font-semibold">${profileData.personalData.budget}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">

                        {/*LISTING DETAILS */}
                        <div className={"flex justify-between"}>
                            <div className="flex flex-col">
                                <div><h2
                                    className="text-2xl font-bold">{profileData.personalData.city + ", " + profileData.personalData.province}</h2>
                                    <div className={"flex items-center space-x-2"}>

                                        {/*Bathroom bedroom count*/}
                                        <p className="text-gray-600 text-sm">{profileData?.propertyData.bedroom_count} Bedroom
                                            + {profileData?.propertyData.bathroom_count} Bathroom</p>

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
                        </div>

                        {/* Image Grid */}
                        <div className="flex gap-2 mt-2">
                            <ImageGallery images={propertyImages}/>
                        </div>

                        {/* BIO/LISTING DESCRIPTION */}
                        <div>
                            <p className="text-gray-700 text-sm mt-2 w-[450px] truncate">
                                {profileData.profileData.bio}
                            </p>
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    );
};

export default ProfileCard;