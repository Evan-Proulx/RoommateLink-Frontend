import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { ForumOutlined, LocationOn } from "@mui/icons-material";
import { grey } from '@mui/material/colors';
import MapPopup from "../Survey/SurveyComponents/Survey-Map-Popup";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { bookmarkUser, unbookmarkUser } from "../API/Bookmarks";
const FeedCard = (user) => {
    const [userData, setUserData] = useState(null);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [propertyView, SetPropertyView] = useState(false);
    const [attributes, setAttributes] = useState(["non-smoker", "English", "Vegan"]);
    const [isMapOpen, setIsMapOpen] = useState(false);
    // Set max characters for user's description
    const maxLength = 250;
    const userDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper venenatis nulla, vitae congue turpis scelerisque at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in viverra ante. Proin rutrum mi metus, et imperdiet dolor pretium sed. Integer aliquet diam ut tempus elementum. Nullam vel lectus ut dolor egestas placerat. Aliquam tincidunt scelerisque erat, quis pellentesque ligula tristique in. Aliquam molestie malesuada urna ac semper.";
    const truncatedText = (text) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };
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
        }
        else if (percentage <= 50) {
            return "text-orange-500"; // Orange for less than 50
        }
        else {
            return "text-red-500"; // Red for 51 and above
        }
    };
    // Link Percentage
    const percentage = 79;
    const LinkPercentageColor = (percentage) => {
        if (percentage >= 80) {
            return "text-green-500"; // Green for 80-100%
        }
        else if (percentage >= 65) {
            return "text-orange-500"; // Orange for 65-79%
        }
        else {
            return "text-red-500"; // Red for 64 and below
        }
    };
    const handlePropertyToggle = () => {
        SetPropertyView(!propertyView);
    };
    const toggleBookmark = async () => {
        try {
            if (isBookmarked) {
                await unbookmarkUser(userData?.profileData.account_id);
            }
            else {
                await bookmarkUser(userData?.profileData.account_id);
            }
            setIsBookmarked(!isBookmarked);
        }
        catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        //Set user as state
        if (user) {
            //User gets nested
            setUserData(user.user);
            console.log(userData);
        }
    }, [user]);
    // TODO card should be fixed with a better loader
    if (!userData)
        return _jsxs("div", { className: "flex flex-col justify-center items-center h-screen w-full bg-gray-300", children: [_jsx("span", { className: "loader" }), _jsx("h2", { className: "header4-text text-center pt-4", children: "Loading..." })] });
    const actionButtons = (_jsxs("div", { className: "m-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("button", { className: "flex items-center", children: _jsx(ForumOutlined, { sx: { color: grey[500] } }) }), _jsx("button", { onClick: () => toggleBookmark(), className: "flex items-center", children: isBookmarked ? (_jsx(FaBookmark, { className: "text-red-500 text-xl leading-none" })) : (_jsx(FaRegBookmark, { className: "text-gray-500 text-xl leading-none" })) })] }), _jsx("div", { className: "m-2", children: _jsx("label", { htmlFor: "toggle", className: "flex items-center cursor-pointer", children: _jsxs("div", { className: "relative", children: [_jsx("input", { type: "checkbox", id: "toggle", className: "sr-only", checked: propertyView, onChange: handlePropertyToggle }), _jsx("div", { className: `w-12 h-6 rounded-full shadow-inner transition ${propertyView ? "bg-green-500" : "bg-gray-300"}` }), _jsx(FontAwesomeIcon, { icon: faHouseUser, className: `absolute top-1 w-4 h-4 transition-transform ${propertyView ? "translate-x-6 text-white" : "translate-x-1 text-gray-500"}` })] }) }) })] }));
    return (_jsx("div", { className: "flex items-center justify-center w-full", children: _jsxs("div", { className: "bg-white border-2 border-black rounded m-4 h-auto card-shadow", children: [_jsxs("div", { className: `flex ${!propertyView ? "flex-col" : ""} items-start justify-between`, children: [_jsxs("div", { className: `flex ${propertyView ? "flex-col m-4" : "flex-row"}`, children: [_jsx("img", { src: "https://images.surferseo.art/3e8e3027-36da-4ca6-8d77-76b74405d002.webp", alt: "Profile", className: `w-28 h-28 rounded-lg ${!propertyView ? "m-4" : "m-0"}` }), _jsx("div", { className: "flex mt-4", children: _jsxs("div", { className: "flex flex-col ", children: [_jsxs("div", { className: "flex space-x-3", children: [_jsx("h1", { className: `${!propertyView ? "text-3xl" : "text-xl"} font-bold`, children: userData.profileData.first_name + " " + userData.profileData.last_name }), _jsx("div", { className: "w-6 h-6 bg-blue-600 rounded-full" })] }), _jsxs("div", { className: "flex items-end card-text-light cursor-pointer hover:underline", onClick: () => setIsMapOpen(true), children: [_jsx("p", { className: "text-sm", children: "Windsor, On " }), _jsx(LocationOn, {})] }), _jsxs("p", { className: "text-sm card-text-light", children: ["Age: ", userData.profileData.age] }), _jsxs("p", { className: "text-sm card-text-light", children: ["$", userData.personalData.budget] })] }) }), _jsx("div", { className: "hidden sm:block justify-end", children: actionButtons })] }), propertyView ? (_jsxs("div", { children: [_jsxs("div", { className: "flex flex-col w-3/4 mt-4", children: [_jsx("h2", { className: "text-2xl font-bold", children: userData.personalData.city + ", " + userData.personalData.province }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsxs("p", { className: "text-gray-600 text-sm", children: [userData.propertyData.bedroom_count, " Bedroom + ", userData.propertyData.bathroom_count, " Bathroom"] }), _jsx("span", { className: "w-1 h-1 rounded-full bg-gray-500" }), _jsxs("h4", { className: `text-center font-semibold ${getTextColor(theLocation)}`, children: [theLocation, "Km away", _jsx(FontAwesomeIcon, { icon: faLocationDot, className: "ml-1" })] })] })] }), _jsx("div", { className: "flex gap-2 mt-2", children: _jsxs("div", { className: "grid grid-cols-2 gap-2 w-[450px]", children: [_jsx("div", { className: "col-span-1", children: _jsx("img", { src: propertyImages[0], alt: "Main Property", className: "w-full h-full object-cover rounded-lg cursor-pointer", onClick: () => openImage(0) }) }), _jsxs("div", { className: "grid grid-cols-2 gap-2", children: [propertyImages.slice(1, 4).map((src, index) => (_jsx("img", { src: src, alt: `Property ${index + 2}`, className: "w-full h-24 object-cover rounded-lg cursor-pointer", onClick: () => openImage(index + 1) }, index))), propertyImages.length > 5 && (_jsxs("div", { className: "relative cursor-pointer", onClick: () => openImage(4), children: [_jsx("img", { src: propertyImages[4], alt: "More Properties", className: "w-full h-24 object-cover rounded-lg" }), _jsxs("div", { className: "absolute inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center text-white font-bold text-lg", children: ["+", propertyImages.length - 4] })] }))] })] }) }), _jsx("div", { children: _jsx("p", { className: "text-gray-700 text-sm mt-2 w-[450px] truncate", children: truncatedText(userData.profileData.bio) }) })] })) : (_jsxs("div", { children: [_jsx("h3", { className: "mt-4 font-bold m-2 text-xl", children: "About Me" }), _jsx("p", { className: "text-gray-600 m-2 font-normal", children: userData.profileData.bio }), _jsxs("div", { className: "p-2", children: [_jsx("label", { className: "bg-blue-500 text-white text-center font-normal p-2 px-4 pb-2 w-fit m-1 rounded-xl", children: "respectful" }), _jsx("label", { className: "bg-blue-500 text-white text-center font-normal p-2 px-4 pb-2 w-fit m-1 rounded-xl", children: "Clean" }), _jsx("label", { className: "bg-blue-500 text-white text-center font-normal p-2 px-4 pb-2 w-fit m-1 rounded-xl", children: "Communicative" }), _jsx("label", { className: "bg-blue-500 text-white text-center font-normal p-2 px-4 pb-2 w-fit m-1 rounded-xl", children: "Friendly" }), _jsx("label", { className: "bg-blue-500 text-white text-center font-normal p-2 px-4 pb-2 w-fit m-1 rounded-xl", children: "Honest" })] })] })), propertyView ? (_jsx("div", { children: _jsx("div", { className: "hidden sm:block", children: actionButtons }) })) : null] }), _jsx(MapPopup, { isOpen: isMapOpen, onClose: () => setIsMapOpen(false), onProfileMap: true })] }) }));
};
export default FeedCard;
