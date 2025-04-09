import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { ForumOutlined } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { bookmarkUser, unbookmarkUser } from "../API/Bookmarks";
import { handleCreateConversation } from "../API/Messaging";
const CardActions = ({ userId, hasHousing, profileView, onSetListingToggle, bookmarkDisplay = false, onBookmarkToggle }) => {
    const [isBookmarked, setIsBookmarked] = useState(bookmarkDisplay);
    const navigate = useNavigate();
    const [id, setId] = useState(null);
    //Pass the card view to the parent component
    // Returns 99 always
    const handleToggle = async () => {
        onSetListingToggle(userId);
    };
    //Returns correct userId
    useEffect(() => {
        if (userId) {
            setId(userId);
        }
    }, [userId]);
    //Creates conversation with selected profile.
    //If a conversation already exists between users the conversation id is still returned.
    const createConversations = async () => {
        try {
            await handleCreateConversation(userId);
            navigate(`/chats`);
        }
        catch (error) {
            console.error("Error creating conversation:", error);
        }
    };
    const toggleBookmark = async () => {
        try {
            if (isBookmarked) {
                await unbookmarkUser(userId);
            }
            else {
                await bookmarkUser(userId);
            }
            setIsBookmarked(!isBookmarked);
            onBookmarkToggle(isBookmarked);
        }
        catch (err) {
            console.error(err);
        }
    };
    return (_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("button", { className: "flex items-center", onClick: createConversations, children: _jsx(ForumOutlined, { sx: { color: grey[500] } }) }), _jsx("button", { onClick: toggleBookmark, className: "flex items-center", children: isBookmarked ? (_jsx(FaBookmark, { className: "text-red-500 text-xl leading-none" })) : (_jsx(FaRegBookmark, { className: "text-gray-500 text-xl leading-none" })) })] }), hasHousing === 1 && !bookmarkDisplay && (_jsx("div", { className: "m-2 relative", children: _jsxs("label", { className: "inline-flex items-center mb-5 cursor-pointer", children: [_jsx("input", { type: "checkbox", value: "", className: "sr-only peer", defaultChecked: profileView, onChange: handleToggle }), _jsx("div", { className: `w-12 h-6 rounded-full shadow-inner transition ${!profileView ? "bg-gray-300" : "bg-green-500"}` }), _jsx(FontAwesomeIcon, { icon: faHouseUser, className: `absolute top-1 w-4 h-4 transition-transform ${!profileView
                                ? "translate-x-1 text-gray-500"
                                : "translate-x-6 text-white"}` })] }) }))] }));
};
export default CardActions;
