import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { bookmarkUser, getBookmarks, unbookmarkUser } from "./Components/API/Bookmarks";
const BookmarkTest = () => {
    const [bookmarks, setBookmarks] = useState([]);
    const [userId, setUserId] = useState();
    const [message, setMessage] = useState("");
    const token = localStorage.getItem("token");
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    };
    const retrieveBookmarks = async () => {
        try {
            const response = await getBookmarks();
            setMessage("Bookmarks fetched successfully");
        }
        catch (err) {
            setMessage(err.response?.data?.message || "Failed to fetch bookmarks");
        }
    };
    const bookmark = async () => {
        if (!userId) {
            setMessage("Please enter a user ID to bookmark");
            return;
        }
        try {
            const response = await bookmarkUser(userId);
        }
        catch (err) {
            setMessage(err.response?.data?.message || "Failed to bookmark user");
        }
    };
    const unbookmark = async (userId) => {
        if (!userId) {
            setMessage("Please enter a user ID to unbookmark");
            return;
        }
        try {
            const response = await unbookmarkUser(userId);
        }
        catch (err) {
            setMessage(err.response?.data?.message || "Failed to unbookmark user");
        }
    };
    return (_jsxs("div", { style: { padding: "20px", maxWidth: "500px", margin: "auto" }, children: [_jsx("h2", { children: "Bookmark Tester" }), _jsxs("div", { className: "space-x-3", children: [_jsx("button", { onClick: getBookmarks, className: "bg-black text-white", children: "Get Bookmarks" }), _jsx("button", { onClick: bookmarkUser, className: "bg-black text-white", children: "Bookmark User" }), _jsx("button", { onClick: unbookmarkUser, className: "bg-black text-white", children: "Unbookmark User" })] }), _jsx("p", { children: message }), _jsx("h3", { children: "Bookmarked Users:" }), _jsx("ul", { children: bookmarks.length > 0 ? (bookmarks.map((user) => (_jsxs("li", { children: [user.first_name, " ", user.last_name] }, user.id)))) : (_jsx("p", { children: "No bookmarks found" })) })] }));
};
export default BookmarkTest;
