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
      onSetListingToggle(userId)
    };

    //Returns correct userId
    useEffect(() => {
        console.log("On effect",userId)

        if (userId){
            setId(userId);
        }
    }, [userId]);



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

            {hasHousing === 1 && !bookmarkDisplay && (
                <div className="m-2 relative">
                    <label className="inline-flex items-center mb-5 cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" defaultChecked={profileView}
                               onChange={handleToggle}/>
                        <div
                            className={`w-12 h-6 rounded-full shadow-inner transition ${
                                profileView ? "bg-gray-300" : "bg-green-500"
                            }`}
                        ></div>
                        <FontAwesomeIcon
                            icon={faHouseUser}
                            className={`absolute top-1 w-4 h-4 transition-transform ${
                                profileView
                                    ? "translate-x-1 text-gray-500"
                                    : "translate-x-6 text-white"
                            }`}
                        />
                    </label>
                </div>
            )}
        </div>
    );
};

export default CardActions;