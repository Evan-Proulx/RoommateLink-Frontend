import React, {useEffect, useState} from 'react';
import FeedCard from "./FeedCard.tsx";
import Navbar from "../Navbar.tsx";
import Popover from "./PopoverButton.tsx";
import {getMatchingUsers} from "../API/Profile.ts"

const Feed = () => {
    const [showPopover, setShowPopover] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getLinks();
    }, [])

    const getLinks = async () => {
        try {
            const response = await getMatchingUsers();
            console.log(response)
            setUsers(response.userMatches);
        } catch (err) {
            console.error("Error getting matches", err)
        }
    }

    useEffect(() => {
        console.log(users)
    }, [users])

    //Show loading screen if profile data is not loaded yet
    if (!users) return (
        <div className={"flex flex-col justify-center items-center h-screen w-full bg-gray-300"}>
            <span className={"loader"}></span>
            <h2 className={"header4-text text-center pt-4"}>Loading...</h2>
        </div>
    );

    return (

        <div className={"w-full bg-primary overflow-y-hidden"}>
            <Navbar/>
            <div className={"flex items-baseline py-3 space-x-3"}>
                <h1 className="pl-3 lg:pl-32 text-start header-text-huge">Your Links</h1>
                <Popover/>
            </div>
            <div className={"flex flex-col w-full h-full"}>
                <div className={"flex flex-col justify-center items-center w-full h-full"}>
                    <div className={"flex flex-col justify-center items-center w-full h-full"}>
                        {users ? (
                            users.map((user) => (
                                <FeedCard key={user.id} user={user}/>
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