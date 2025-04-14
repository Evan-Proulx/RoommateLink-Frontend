import React, {useEffect, useState} from 'react';
import {getBookmarks} from "../API/Bookmarks";
import BookmarkedUserCard from "../CardComponents/BookmarkedUserCard";
import {UserProfile} from "../../ProfileData";
import Navbar from "../Navbar";
import {BookmarkOutlined} from "@mui/icons-material";

const Bookmarks = () => {
    const [bookmarkedProfiles, setBookmarkedProfiles] = useState<UserProfile[]>([]);

    //Get bookmarked profiles when the page loads
    useEffect(() => {
        retrieveBookmarks();
    }, [])
    useEffect(() => {
        console.log(...bookmarkedProfiles)
    }, [bookmarkedProfiles])

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
                    }))
                );
            }
            console.log(bookmarkedProfiles)
        } catch (err) {
            console.log(err)
        }
    };

    //Removes user from bookmarked list when unbookmarked in the card component
    const removeBookmark = (userId: number) => {
        const updatedBookmarks = bookmarkedProfiles.filter(prev => prev.profileData.account_id !== userId)
        setBookmarkedProfiles(updatedBookmarks);
    }

    return (
        <div className={"w-full min-h-screen bg-primary overflow-y-auto"}>
            <Navbar/>
            <div className={"flex items-baseline py-3 space-x-3 px-4 sm:px-6 lg:px-32"}>
                <h1 className="text-start text-4xl sm:text-4xl lg:text-6xl font-bold text-text">Your Bookmarks</h1>
            </div>

            <div className={"flex flex-col w-full h-full"}>
                    <div className={"flex flex-col items-center space-y-4 w-full h-full"}>
                        {bookmarkedProfiles.length > 0 ? (
                            bookmarkedProfiles.map((user) => (
                                <BookmarkedUserCard key={user.personalData.id} user={user} onUnbookmark={removeBookmark}/>
                            ))
                            ) : (
                            <p className={"flex flex-wrap items-center justify-center px-2 text-center text-gray-500 pt-40"}>
                                You have no bookmarks. Click the <BookmarkOutlined /> on a user's profile to bookmark the user</p>
                    )}
                    </div>
                </div>
        </div>
    );
};

export default Bookmarks;