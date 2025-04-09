import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { bookmarkUser, unbookmarkUser } from "../API/Bookmarks";
import CardActions from "./CardActions";
const ListingCard = ({ user, onSetListingToggle }) => {
    const imgUrl = import.meta.env.VITE_ROOT_URL + "/storage/";
    const [profileView, setProfileView] = useState(true);
    const [userData, setUserData] = useState(null);
    const [isBookmarked, setIsBookmarked] = useState(false);
    // Set max characters for user's description
    const maxLength = 250;
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
    const handleToggle = () => {
        setProfileView(!profileView);
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
            setUserData(user);
            console.log(userData);
        }
    }, [user]);
    // TODO card should be fixed with a better loader
    if (!userData)
        return _jsxs("div", { className: "flex flex-col justify-center items-center h-screen w-full bg-gray-300", children: [_jsx("span", { className: "loader" }), _jsx("h2", { className: "header4-text text-center pt-4", children: "Loading..." })] });
    return (
    //TODO Fix width for mobile and large screen
    _jsx("div", { className: "bg-white p-4 rounded-lg flex flex-col gap-4 border-2 border-black", children: _jsxs("div", { className: `flex gap-4`, children: [_jsxs("div", { className: `flex flex-col`, children: [_jsx("img", { src: userData.profileData.profile_picture ? imgUrl + userData.profileData.profile_picture : "https://archive.org/download/instagram-plain-round/instagram%20dip%20in%20hair.jpg", alt: "Profile", className: `w-28 h-28 rounded-lg` }), _jsxs("div", { className: "flex flex-col w-full", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("h4", { className: "text-2xl font-bold", children: userData.profileData.first_name + " " + userData.profileData.last_name }), _jsx("svg", { className: "w-5 h-5 text-gray-800 dark:text-blue-700", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { fillRule: "evenodd", d: "M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z", clipRule: "evenodd" }) })] }), _jsxs("p", { className: `font-bold text-lg ${LinkPercentageColor(userData.compatibilityScore)}`, children: [userData?.compatibilityScore, " % Link"] }), _jsxs("div", { className: "flex flex-col items-start", children: [_jsx("p", { className: "text-gray-500 font-semibold", children: userData.personalData.city + ", " + userData.personalData.province }), _jsxs("p", { className: "text-gray-500 font-semibold", children: ["Age: ", userData.profileData.age] }), _jsxs("p", { className: "text-gray-500 font-semibold", children: ["$", userData.personalData.budget] })] })] })] }), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("div", { className: "flex flex-col w-3/4", children: _jsxs("div", { children: [_jsx("h2", { className: "text-2xl font-bold", children: userData.personalData.city + ", " + userData.personalData.province }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsxs("p", { className: "text-gray-600 text-sm", children: [userData?.propertyData.bedroom_count, " Bedroom + ", userData?.propertyData.bathroom_count, " Bathroom"] }), _jsx("span", { className: "w-1 h-1 rounded-full bg-gray-500" }), _jsxs("h4", { className: `text-center font-semibold ${getTextColor(theLocation)}`, children: [theLocation, "Km away", _jsx(FontAwesomeIcon, { icon: faLocationDot, className: "ml-1" })] })] })] }) }), _jsx(CardActions, { userId: userData?.profileData.account_id, hasHousing: userData?.personalData?.has_housing ?? false, initialProfileView: profileView, initialBookmarkStatus: isBookmarked, onSetListingToggle: handleToggle })] }), _jsx("div", { className: "flex gap-2 mt-2", children: _jsxs("div", { className: "grid grid-cols-2 gap-2 w-[450px]", children: [_jsx("div", { className: "col-span-1", children: _jsx("img", { src: propertyImages[0], alt: "Main Property", className: "w-full h-full object-cover rounded-lg cursor-pointer", onClick: () => openImage(0) }) }), _jsxs("div", { className: "grid grid-cols-2 gap-2", children: [propertyImages.slice(1, 4).map((src, index) => (_jsx("img", { src: src, alt: `Property ${index + 2}`, className: "w-full h-24 object-cover rounded-lg cursor-pointer", onClick: () => openImage(index + 1) }, index))), propertyImages.length > 5 && (_jsxs("div", { className: "relative cursor-pointer", onClick: () => openImage(4), children: [_jsx("img", { src: propertyImages[4], alt: "More Properties", className: "w-full h-24 object-cover rounded-lg" }), _jsxs("div", { className: "absolute inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center text-white font-bold text-lg", children: ["+", propertyImages.length - 4] })] }))] })] }) }), _jsx("div", { children: _jsx("p", { className: "text-gray-700 text-sm mt-2 w-[450px] truncate", children: truncatedText(userData.profileData.bio) }) })] })] }) }));
};
export default ListingCard;
