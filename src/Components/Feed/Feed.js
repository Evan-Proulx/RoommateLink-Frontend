import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import Navbar from "../Navbar";
import Popover from "./PopoverButton";
import { getMatchingUsers } from "../API/Profile";
import ProfileCard from "../CardComponents/ProfileCard";
const Feed = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getLinks();
    }, []);
    const getLinks = async () => {
        try {
            const response = await getMatchingUsers();
            //THis ensures the users are in the correct format for the UserProfile object
            setUsers(response.userMatches.map((user) => ({
                compatibilityScore: user.compatibilityScore,
                distance: user.distance,
                profileData: user.userProfileData,
                personalData: user.userPersonalData,
                propertyData: user.userPropertyData,
            })));
        }
        catch (err) {
            console.error("Error getting matches", err);
        }
    };
    useEffect(() => {
        console.log("USERS", users);
    }, [users]);
    //Show loading screen if profile data is not loaded yet
    if (!users)
        return (_jsxs("div", { className: "flex flex-col justify-center items-center h-screen w-full bg-gray-300", children: [_jsx("span", { className: "loader" }), _jsx("h2", { className: "header4-text text-center pt-4", children: "Loading..." })] }));
    return (_jsxs("div", { className: "w-full bg-primary overflow-y-hidden", children: [_jsx(Navbar, {}), _jsxs("div", { className: "flex items-baseline py-3 space-x-3", children: [_jsx("h1", { className: "pl-3 lg:pl-32 text-start header-text-huge", children: "Your Links" }), _jsx(Popover, {})] }), _jsx("div", { className: "flex flex-col w-full h-full ", children: _jsx("div", { className: "flex flex-col justify-center items-center w-full h-full", children: _jsx("div", { className: "flex flex-col items-center space-y-4 md:w-3/4 xl:w-1/2 h-full pb-12", children: users ? (users.map((user, index) => (_jsx(ProfileCard, { user: user }, user.profileData.account_id)))) : (_jsx("div", { className: "flex items-center justify-center text-gray-500", children: _jsx("p", { children: "No matching users found." }) })) }) }) })] }));
};
export default Feed;
