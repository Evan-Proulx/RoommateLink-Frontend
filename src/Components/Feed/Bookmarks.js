import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { getBookmarks } from "../API/Bookmarks";
import BookmarkedUserCard from "../CardComponents/BookmarkedUserCard";
import Navbar from "../Navbar";
import { BookmarkOutlined } from "@mui/icons-material";
const Bookmarks = () => {
    const [bookmarkedProfiles, setBookmarkedProfiles] = useState([]);
    //Get bookmarked profiles when the page loads
    useEffect(() => {
        retrieveBookmarks();
    }, []);
    useEffect(() => {
        console.log(...bookmarkedProfiles);
    }, [bookmarkedProfiles]);
    //Get all of the users bookmarked profiles and convert them to UserProfile objects
    const retrieveBookmarks = async () => {
        try {
            const response = await getBookmarks();
            // TODO THis shouldn't run if the response has no users
            if (response) {
                setBookmarkedProfiles(response.bookmarked_accounts.map((user) => ({
                    profileData: user.profileData,
                    personalData: user.personalData,
                    propertyData: user.propertyData,
                })));
            }
            console.log(bookmarkedProfiles);
        }
        catch (err) {
            console.log(err);
        }
    };
    //Removes user from bookmarked list when unbookmarked in the card component
    const removeBookmark = (userId) => {
        const updatedBookmarks = bookmarkedProfiles.filter(prev => prev.profileData.account_id !== userId);
        setBookmarkedProfiles(updatedBookmarks);
    };
    return (_jsxs("div", { className: "w-full min-h-screen bg-primary overflow-y-auto", children: [_jsx(Navbar, {}), _jsx("div", { className: "flex items-baseline py-3 space-x-3", children: _jsx("h1", { className: "pl-3 lg:pl-32 text-start header-text-big", children: "Your Bookmarks" }) }), _jsx("div", { className: "flex flex-col w-full h-full", children: _jsx("div", { className: "flex flex-col items-center space-y-4 w-full h-full", children: bookmarkedProfiles.length > 0 ? (bookmarkedProfiles.map((user) => (_jsx(BookmarkedUserCard, { user: user, onUnbookmark: removeBookmark }, user.personalData.id)))) : (_jsxs("p", { className: "flex flex-wrap items-center justify-center px-2 text-center text-gray-500 pt-40", children: ["You have no bookmarks. Click the ", _jsx(BookmarkOutlined, {}), " on a user's profile to bookmark the user"] })) }) })] }));
};
export default Bookmarks;
