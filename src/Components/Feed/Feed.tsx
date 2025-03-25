import React, {useEffect, useState} from 'react';
import FeedCard from "../CardComponents/FeedCard.tsx";
import Navbar from "../Navbar.tsx";
import Popover from "./PopoverButton.tsx";
import {getMatchingUsers} from "../API/Profile.ts"
import ListingCard from "../CardComponents/ListingCard.tsx";
import {UserProfile} from "../../ProfileData.ts";
import ProfileCard from "../CardComponents/ProfileCard.tsx";

const Feed = () => {
    const [showPopover, setShowPopover] = useState(false);
    const [users, setUsers] = useState<UserProfile[]>([]);
    const [listingDisplayed, setListingDisplayed] = useState(false);

    useEffect(() => {
        getLinks();
    }, [])

    const getLinks = async () => {
        try {
            const response = await getMatchingUsers();
            console.log(response)
            //THis ensures the users are in the correct format for the UserProfile object
            setUsers(response.userMatches.map((user) => ({
                    compatibilityScore: user.compatibilityScore,
                    profileData: user.userProfileData,
                    personalData: user.userPersonalData,
                    propertyData: user.userPropertyData,
                }))
            );
        } catch (err) {
            console.error("Error getting matches", err)
        }
    }

    useEffect(() => {
        console.log("USERS", users)
    }, [users])

    //Show loading screen if profile data is not loaded yet
    if (!users) return (
        <div className={"flex flex-col justify-center items-center h-screen w-full bg-gray-300"}>
            <span className={"loader"}></span>
            <h2 className={"header4-text text-center pt-4"}>Loading...</h2>
        </div>
    );

    return (

        <div className={"w-full bg-primary h-screen overflow-y-hidden"}>
            <Navbar/>
            <div className={"flex items-baseline py-3 space-x-3"}>
                <h1 className="pl-3 lg:pl-32 text-start header-text-huge">Your Links</h1>
                <Popover/>
            </div>
            <div className={"flex flex-col w-full h-full"}>
                <div className={"flex flex-col justify-center items-center w-full h-full"}>
                    <div className={"flex flex-col items-center w-3/4 xl:w-1/2 h-full"}>
                        {users ? (
                            users.map((user) => (
                                        <ProfileCard user={user}/>
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

export default Feed;