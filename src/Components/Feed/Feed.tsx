import React, {useEffect, useState} from 'react';
import Navbar from "../Navbar";
import Popover from "./PopoverButton";
import {getMatchingUsers} from "../API/Profile"
import {UserProfile} from "../../ProfileData";
import ProfileCard from "../CardComponents/ProfileCard";

const Feed = () => {
    const [users, setUsers] = useState<UserProfile[]>([]);

    useEffect(() => {
        getLinks();
    }, [])

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

        <div className={"w-full bg-primary h-screen overflow-y-auto"}>
            <Navbar/>
            <div className={"flex flex-col sm:flex-row items-start sm:items-baseline py-3 sm:space-x-3 px-3 sm:px-10 md:px-20"}>
                <h1 className="text-start pl-3 lg:pl-32 text-2xl font-bold text-text md:text-6xl sm:p-4">Your Links</h1>
                <div className="mt-2 sm:mt-0">
                    <Popover/>
                </div>
            </div>
            <div className={"flex flex-col w-full h-full px-1 sm:px-6 md:px-12"}>
                <div className={"flex flex-col justify-center items-center w-full h-full"}>
                    <div className={"flex flex-col items-center space-y-4 w-full max-w-screen-xl h-full pb-12"}>
                        {users ? (
                            users.map((user, index) => (
                                <ProfileCard key={user.profileData.account_id} user={user}/>
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
