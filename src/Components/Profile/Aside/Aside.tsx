import MessageBtn from "./MessageBtn.tsx";
import FavoriteBtn from "./FavoriteBtn.tsx";
import Rating from "./Rating.tsx";
import ReportBtn from "./ReportBtn.tsx";
import React, {createContext, useContext, useEffect, useState} from "react";
import {ProfileContext} from "../ProfilePage.tsx";
import Modal from "../../Modal.tsx";
import {ProfileData, UserProfile} from "../../../ProfileData.ts";
import ReportModal from "../Reporting/ReportModal.tsx";
import {handleCreateConversation} from "../../API/Messaging.ts";
import {bookmarkUser, unbookmarkUser} from "../../API/Bookmarks.ts";
import {useNavigate} from "react-router-dom";

interface AsideProps{
    myProfileDisplayed: boolean
}

function Aside({myProfileDisplayed}: AsideProps) {
    const navigate = useNavigate();
    const profile = useContext<UserProfile | null>(ProfileContext);
    {/* This component displays Aside components */}
    const [activeTab, setActiveTab] = useState("About me"); // Default tab is About me
    const [modalIsOpen, setModalIsOpen] = useState(false);
    // Step 2: Conditional rendering based on the active tab
    const renderInterestedPeople = activeTab === "My property";

    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        console.log("ASIDE",profile)
    }, []);

    const handleMessage = async () => {
        try {
            await handleCreateConversation(profile?.personalData.account_id);
            navigate(`/chats`);
        } catch (error) {
            console.error("Error creating conversation:", error);
        }
    };

    const toggleBookmark = async () => {
        const id = profile?.personalData.account_id
        try {
            if (isBookmarked) {
                await unbookmarkUser(id);
            } else {
                await bookmarkUser(id);
            }
            setIsBookmarked(!isBookmarked);
        } catch (err) {
            console.error(err);
        }
    };



    return (
        <div className="h-auto sm:w-56 bg-profile pr-4 m-2">
            {!myProfileDisplayed && (
                <div className="flex flex-row sm:flex-col items-center justify-around flex-wrap gap-2">
                    <MessageBtn onMessageClicked={handleMessage} />
                    <FavoriteBtn onFavoriteClicked={toggleBookmark} bookmarked={isBookmarked} />
                    <ReportBtn onReportClicked={() => setModalIsOpen(true)} />
                    <Rating myProfileDisplayed={myProfileDisplayed} revieweeId={profile?.profileData.account_id} />

                    {/* Report modal */}
                    <Modal open={modalIsOpen} close={() => setModalIsOpen(false)}>
                        <ReportModal
                            userToReport={profile?.personalData.account_id as number}
                            closeModal={() => setModalIsOpen(false)}
                        />
                    </Modal>
                </div>
            )}
        </div>

    );
}

export default Aside;
