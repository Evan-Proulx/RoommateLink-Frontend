import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import CardActions from "./CardActions";
import CardSkeletonLoader from "./CardSkeletonLoader";
import { retrievePropertyImages } from "../API/Media";
import ImageGallery from "../Profile/ProfileComponents/ImageGallery";
import { hobbies } from "../../data";
const ProfileCard = ({ user, discovery = false }) => {
    const imgUrl = import.meta.env.VITE_ROOT_URL + "/storage/";
    const navigate = useNavigate();
    const [profileView, setProfileView] = useState(true);
    const [profileData, setProfileData] = useState(null);
    const [propertyImages, setPropertyImages] = useState([]);
    const [userHobbies, setUserHobbies] = useState([""]);
    // Set max characters for user's description
    const maxLength = 250;
    const theLocation = 26;
    useEffect(() => {
        //Set user as state
        if (user) {
            setProfileData(user);
        }
    }, [user]);
    const handleToggle = (userId) => {
        console.log('Toggling for userId:', userId);
        setProfileView(prev => !prev);
    };
    // Get property images when the profile is set
    useEffect(() => {
        if (profileData?.propertyData.id) {
            getPropertyImages();
        }
        setProfileView(profileData?.personalData.has_housing ?? true);
        //Get hobby codes from the profile to retrieve their names
        retrieveHobbyNames(profileData?.personalData.hobbies.map(h => h.hobby) ?? []);
    }, [profileData]);
    //Maps through list of hobby codes and finds their name from the hobbies data.
    const retrieveHobbyNames = (hobbyCodes) => {
        if (hobbyCodes.length > 0) {
            const hobbyNames = hobbyCodes.map(hobby => {
                const foundHobby = hobbies.find(h => h.code === hobby);
                return foundHobby.name;
            });
            setUserHobbies(hobbyNames);
        }
    };
    // const truncatedText = (text) => {
    //     return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    // }
    // Changing the color based on how far it is
    const getTextColor = (percentage) => {
        if (percentage <= 10) {
            return "text-green-500"; // Green for less than 25 KM
        }
        else if (percentage <= 30) {
            return "text-orange-500"; // Orange for less than 50
        }
        else {
            return "text-red-500"; // Red for 51 and above
        }
    };
    // Link Percentage
    const LinkPercentageColor = (percentage) => {
        if (percentage >= 80) {
            return "text-green-500"; // Green for 80-100%
        }
        else if (percentage >= 65) {
            return "text-yellow-500"; // Orange for 65-79%
        }
        else {
            return "text-red-500"; // Red for 64 and below
        }
    };
    //Gets array of property image urls
    const getPropertyImages = async () => {
        //Check if user has housing property before fetching images
        if (profileData?.personalData.has_housing) {
            const propertyID = profileData?.propertyData.id;
            if (!propertyID) {
                return;
            }
            try {
                const response = await retrievePropertyImages(propertyID);
                //Add url root to urls
                const fixedImgUrls = response.map(image => imgUrl + image);
                setPropertyImages(fixedImgUrls);
            }
            catch (err) {
                console.log(err);
            }
        }
    };
    //Navigate to profile page with the user's profile.
    // Specify that it is not the logged in user's profile page
    const navigateToProfile = () => {
        navigate('/profile', { state: { profile: profileData, myProfileDisplayed: false } });
    };
    //Show skeleton card if the user isnt set yet
    if (!profileData)
        return (_jsx(CardSkeletonLoader, {}));
    return (
    //TODO Fix width for mobile and large screen
    _jsxs("div", { className: "relative bg-white p-4 rounded-lg w-3/4 md:w-5/6 flex flex-col gap-4 border-2 border-black", children: [_jsx("div", { className: "absolute top-2 right-2 pt-2", children: _jsx(CardActions, { userId: profileData?.profileData.account_id, hasHousing: profileData?.personalData?.has_housing, profileView: profileView, onSetListingToggle: handleToggle }) }), !profileView ? (
            //Profile & Listing Details
            _jsxs("div", { className: `flex flex-col gap-4`, children: [_jsxs("div", { className: `flex`, children: [_jsx("img", { onClick: navigateToProfile, src: profileData.profileData.profile_picture ? imgUrl + profileData.profileData.profile_picture :
                                    "https://archive.org/download/instagram-plain-round/instagram%20dip%20in%20hair.jpg", alt: "Profile", className: `w-28 h-28 rounded-lg mr-4 cursor-pointer` }), _jsxs("div", { className: "flex flex-col w-full", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("h4", { onClick: navigateToProfile, className: "text-xl md:text-2xl font-bold hover:underline cursor-pointer", children: profileData.profileData.first_name + " " + profileData.profileData.last_name }), _jsx("svg", { className: "w-5 h-5 text-gray-800 dark:text-blue-700", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { fillRule: "evenodd", d: "M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z", clipRule: "evenodd" }) }), !discovery &&
                                                _jsxs("p", { className: `font-bold text-lg ${LinkPercentageColor(profileData.compatibilityScore)}`, children: [profileData?.compatibilityScore, " % Link"] })] }), _jsxs("div", { className: "flex flex-col items-start", children: [_jsx("p", { className: "text-gray-500 font-semibold", children: profileData.personalData.city + ", " + profileData.personalData.province }), _jsxs("p", { className: "text-gray-500 font-semibold", children: ["Age: ", profileData.profileData.age] }), _jsxs("p", { className: "text-gray-500 font-semibold", children: ["$", profileData.personalData.budget] })] })] })] }), _jsx("div", { className: "flex justify-between", children: _jsxs("div", { children: [_jsx("h3", { className: "mt-4 font-bold m-2 text-xl", children: "About Me" }), _jsx("p", { className: "text-gray-600 m-2 font-normal", children: profileData.profileData.bio }), _jsx("h3", { className: "mt-4 font-bold m-2 text-md", children: "Hobbies/Interests" }), _jsx("div", { className: "flex flex-wrap", children: userHobbies.map((hobby, index) => (_jsx("label", { title: hobby, className: "bg-blue-500 text-white text-center text-sm font-normal p-2 px-4 pb-2 w-fit m-1 rounded-xl", children: hobby }))) })] }) })] })) : (_jsxs("div", { className: `flex gap-4 `, children: [_jsxs("div", { className: `flex flex-col`, children: [_jsx("img", { onClick: navigateToProfile, src: profileData.profileData.profile_picture ? imgUrl + profileData.profileData.profile_picture :
                                    "https://archive.org/download/instagram-plain-round/instagram%20dip%20in%20hair.jpg", alt: "Profile", className: `w-28 h-28 rounded-lg cursor-pointer` }), _jsxs("div", { className: "flex flex-col w-full", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("h4", { onClick: navigateToProfile, className: "text-2xl font-bold cursor-pointer hover:underline", children: profileData.profileData.first_name }), _jsx("svg", { className: "w-5 h-5 text-gray-800 dark:text-blue-700", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { fillRule: "evenodd", d: "M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z", clipRule: "evenodd" }) })] }), !discovery &&
                                        _jsxs("p", { className: `font-bold text-lg ${LinkPercentageColor(profileData.compatibilityScore)}`, children: [profileData?.compatibilityScore, " % Link"] }), _jsxs("div", { className: "flex flex-col items-start", children: [_jsxs("p", { className: "text-gray-500 font-semibold", children: ["Age: ", profileData.profileData.age] }), _jsxs("p", { className: "text-gray-500 font-semibold", children: ["$", profileData.personalData.budget] })] })] })] }), _jsxs("div", { className: "flex-1", children: [_jsx("div", { className: "flex justify-between", children: _jsx("div", { className: "flex flex-col", children: _jsxs("div", { children: [_jsx("h2", { className: "md:text-2xl font-bold", children: profileData.personalData.city + ", " + profileData.personalData.province }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsxs("p", { className: "text-gray-600 text-sm", children: [profileData?.propertyData.bedroom_count, " Bedroom + ", profileData?.propertyData.bathroom_count, " Bathroom"] }), !discovery &&
                                                        _jsxs(_Fragment, { children: [_jsx("span", { className: "w-1 h-1 rounded-full bg-gray-500" }), _jsxs("h4", { className: `text-center font-semibold ${getTextColor(profileData.distance)}`, children: [Math.floor(profileData.distance), " Km", _jsx(FontAwesomeIcon, { icon: faLocationDot, className: "ml-1" })] })] })] })] }) }) }), _jsx("div", { className: "flex gap-2 mt-2", children: propertyImages.length > 0 &&
                                    _jsx(ImageGallery, { images: propertyImages }) }), _jsx("div", { children: _jsx("p", { className: "text-gray-700 text-sm mt-2 w-[450px] truncate", children: profileData.profileData.bio }) })] })] }))] }));
};
export default ProfileCard;
