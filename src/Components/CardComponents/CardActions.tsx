import React, {useEffect, useState} from 'react';
import {ForumOutlined} from "@mui/icons-material";
import {grey} from "@mui/material/colors";
import {FaBookmark, FaRegBookmark} from "react-icons/fa";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouseUser} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {bookmarkUser, unbookmarkUser} from "../API/Bookmarks.ts";
import {handleCreateConversation} from "../API/Messaging.ts";


const CardActions= ({userId, hasHousing, profileView, onSetListingToggle, bookmarkDisplay = false}) => {
    const [isBookmarked, setIsBookmarked] = useState(bookmarkDisplay);
    const navigate = useNavigate();
    const [id, setId] = useState(null);
    //Pass the card view to the parent component

    // Returns 99 always
    const handleToggle = async () => {
       try {
           console.log("On toggle", id)
           onSetListingToggle(userId)
       }catch (err) {
           console.error("Error toggling bookmark:", err);
       }

    };

    //Returns correct userId
    useEffect(() => {
        console.log("On effect",userId)

        if (userId){
            setId(userId);
        }
    }, [userId]);

    //Returns correct userId
    useEffect(() => {
        console.log("Set id", id)
    }, [id]);


    //Creates conversation with selected profile.
    //If a conversation already exists between users the conversation id is still returned.
    const createConversations = async () => {
        try {
            await handleCreateConversation(userId);
            navigate(`/chats`);
        } catch (error) {
            console.error("Error creating conversation:", error);
        }
    };

    const toggleBookmark = async () => {
        try {
            if (isBookmarked) {
                await unbookmarkUser(userId);
            } else {
                await bookmarkUser(userId);
            }
            setIsBookmarked(!isBookmarked);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <div className="flex items-center gap-2">
                <button className="flex items-center" onClick={createConversations}>
                    <ForumOutlined sx={{color: grey[500]}}/>
                </button>

                <button onClick={toggleBookmark} className="flex items-center">
                    {isBookmarked ? (
                        <FaBookmark className="text-red-500 text-xl leading-none"/>
                    ) : (
                        <FaRegBookmark className="text-gray-500 text-xl leading-none"/>
                    )}
                </button>
            </div>
            {/*TEst*/}
            {/*<div className={"bg-red-800 w-48 h-48"} onClick={handleToggle}>Testing</div>*/}

            {hasHousing && !bookmarkDisplay && (
                <div className="m-2">
                    <label className="inline-flex items-center mb-5 cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" defaultChecked={profileView} onChange={handleToggle} />
                        <div
                            className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                    </label>
                    {/*<label htmlFor="" className="flex items-center cursor-pointer">*/}
                    {/*    <div className="relative">*/}
                    {/*        <input*/}
                    {/*            type="checkbox"*/}
                    {/*            id="toggle"*/}
                    {/*            className="sr-only"*/}
                    {/*            defaultChecked={profileView}*/}
                    {/*            onChange={handleToggle}*/}
                    {/*        />*/}
                    {/*        <div*/}
                    {/*            className={`w-12 h-6 rounded-full shadow-inner transition ${*/}
                    {/*                profileView ? "bg-gray-300" : "bg-green-500"*/}
                    {/*            }`}*/}
                    {/*        ></div>*/}

                    {/*        <FontAwesomeIcon*/}
                    {/*            icon={faHouseUser}*/}
                    {/*            className={`absolute top-1 w-4 h-4 transition-transform ${*/}
                    {/*                profileView*/}
                    {/*                    ? "translate-x-1 text-gray-500"*/}
                    {/*                    : "translate-x-6 text-white"*/}
                    {/*            }`}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</label>*/}
                </div>
            )}
        </div>
    );
};

export default CardActions;