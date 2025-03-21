import React, { useState } from "react";
import axios from "axios";
import {bookmarkUser, getBookmarks, unbookmarkUser} from "./Components/API/Bookmarks.ts"
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
        } catch (err) {
            setMessage(err.response?.data?.message || "Failed to fetch bookmarks");
        }
    };

    const bookmark = async () => {
        if (!userId) {
            setMessage("Please enter a user ID to bookmark");
            return;
        }
        try {
            const response = await bookmarkUser(userId)
        } catch (err) {
            setMessage(err.response?.data?.message || "Failed to bookmark user");
        }
    };

    const unbookmark = async (userId: string) => {
        if (!userId) {
            setMessage("Please enter a user ID to unbookmark");
            return;
        }
        try {
            const response = await unbookmarkUser(userId)
        } catch (err) {
            setMessage(err.response?.data?.message || "Failed to unbookmark user");
        }
    };

    return (
        <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
            <h2>Bookmark Tester</h2>
           
            <div className={"space-x-3"}>
                <button onClick={getBookmarks} className={"bg-black text-white"}>Get Bookmarks</button>
                <button onClick={bookmarkUser} className={"bg-black text-white"}>Bookmark User</button>
                <button onClick={unbookmarkUser} className={"bg-black text-white"}>Unbookmark User</button>
            </div>
            <p>{message}</p>
            <h3>Bookmarked Users:</h3>
            <ul>
                {bookmarks.length > 0 ? (
                    bookmarks.map((user) => (
                        <li key={user.id}>{user.first_name} {user.last_name}</li>
                    ))
                ) : (
                    <p>No bookmarks found</p>
                )}
            </ul>
        </div>
    );
};

export default BookmarkTest;
