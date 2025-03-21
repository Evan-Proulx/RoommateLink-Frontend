import React, {useEffect, useState} from 'react';
import {bookmarkUser, getBookmarks, unbookmarkUser} from "../API/Bookmarks.ts";
import BookmarkedUserCard from "../BookmarkedUserCard.tsx";
import {UserProfile} from "../../ProfileData.ts";
import ListingCard from "./ListingCard.tsx";
import Navbar from "../Navbar.tsx";

const Bookmarks = () => {
    const [bookmarkedProfiles, setBookmarkedProfiles] = useState<UserProfile[]>([]);
    const [userId, setUserId] = useState();

    useEffect(() => {
        retrieveBookmarks();
    }, [])
    useEffect(() => {
        console.log(...bookmarkedProfiles)
    }, [bookmarkedProfiles])
    const retrieveBookmarks = async () => {
        try {
            const response = await getBookmarks();
            setBookmarkedProfiles(response.bookmarked_accounts.map((user) => ({
                    profileData: user.profileData,
                    personalData: user.personalData,
                    propertyData: user.propertyData,
                }))
            );
            console.log(bookmarkedProfiles)
        } catch (err) {
            console.log(err)
        }
    };

    const bookmark = async () => {
        if (!userId) {
            return;
        }
        try {
            const response = await bookmarkUser(userId)
        } catch (err) {
            console.log(err)
        }
    };

    const unbookmark = async (userId: string) => {
        try {
            const response = await unbookmarkUser(userId);
        } catch (err) {
            console.log(err)
        }
    };


    return (
        <div className={"w-full bg-primary h-screen overflow-y-hidden"}>
            <Navbar/>
            <div className={"flex items-baseline py-3 space-x-3"}>
                <h1 className="pl-3 lg:pl-32 text-start header-text-big">Your Bookmarks</h1>
            </div>
            <div className={"flex flex-col w-full h-full"}>
                <div className={"flex flex-col justify-center items-center w-full h-full"}>
                    <div className={"flex flex-col items-center w-full h-full"}>
                        {bookmarkedProfiles ? (
                            bookmarkedProfiles.map((user) => (
                                <BookmarkedUserCard key={user.personalData.id} user={user}/>
                            ))
                            ) : (
                            <div className="flex items-center justify-center text-gray-500">
                                <p>No matching users found.</p>
                            </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookmarks;