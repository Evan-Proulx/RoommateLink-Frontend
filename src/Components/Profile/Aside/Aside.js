import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MessageBtn from "./MessageBtn";
import FavoriteBtn from "./FavoriteBtn";
import Rating from "./Rating";
import ReportBtn from "./ReportBtn";
import { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../ProfilePage";
import Modal from "../../Modal";
import ReportModal from "../Reporting/ReportModal";
import { handleCreateConversation } from "../../API/Messaging";
import { bookmarkUser, unbookmarkUser } from "../../API/Bookmarks";
import { useNavigate } from "react-router-dom";
function Aside({ myProfileDisplayed }) {
    const navigate = useNavigate();
    const profile = useContext(ProfileContext);
    { /* This component displays Aside components */ }
    const [activeTab, setActiveTab] = useState("About me"); // Default tab is About me
    const [modalIsOpen, setModalIsOpen] = useState(false);
    // Step 2: Conditional rendering based on the active tab
    const renderInterestedPeople = activeTab === "My property";
    const [isBookmarked, setIsBookmarked] = useState(false);
    useEffect(() => {
        console.log("ASIDE", profile);
    }, []);
    const handleMessage = async () => {
        try {
            await handleCreateConversation(profile?.personalData.account_id);
            navigate(`/chats`);
        }
        catch (error) {
            console.error("Error creating conversation:", error);
        }
    };
    const toggleBookmark = async () => {
        const id = profile?.personalData.account_id;
        try {
            if (isBookmarked) {
                await unbookmarkUser(id);
            }
            else {
                await bookmarkUser(id);
            }
            setIsBookmarked(!isBookmarked);
        }
        catch (err) {
            console.error(err);
        }
    };
    return (_jsxs("div", { className: "h-auto w-56 bg-profile pr-4 m-2", children: [!myProfileDisplayed &&
                _jsxs("div", { children: [_jsx(MessageBtn, { onMessageClicked: handleMessage }), _jsx(FavoriteBtn, { onFavoriteClicked: toggleBookmark, bookmarked: isBookmarked }), _jsx(ReportBtn, { onReportClicked: () => setModalIsOpen(true) }), _jsx(Modal, { open: modalIsOpen, close: () => setModalIsOpen(false), children: _jsx(ReportModal, { userToReport: profile?.personalData.account_id, closeModal: () => setModalIsOpen(false) }) })] }), _jsx(Rating, { myProfileDisplayed: myProfileDisplayed, revieweeId: profile?.profileData.account_id })] }));
}
export default Aside;
