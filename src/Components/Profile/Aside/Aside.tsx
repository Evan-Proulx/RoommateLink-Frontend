import ProfileImg from "./ProfileImg.tsx";
import MessageBtn from "./MessageBtn.tsx";
import FavoriteBtn from "./FavoriteBtn.tsx";
import Video from "./Video.tsx";
import Rating from "./Rating.tsx";
import ReportBtn from "./ReportBtn.tsx";
import React, {createContext, useContext, useEffect, useState} from "react";
import {ProfileContext} from "../ProfilePage.tsx";
import {Add} from "@mui/icons-material";
import UpdateProperty from "../UpdateForms/UpdateProperty.tsx";
import Modal from "../../Modal.tsx";
import {ProfileData, UserProfile} from "../../../ProfileData.ts";
import ReportModal from "../Reporting/ReportModal.tsx";

interface AsideProps{
    myProfileDisplayed: boolean
}

function Aside({myProfileDisplayed}: AsideProps) {
    const profile = useContext<UserProfile | null>(ProfileContext);
    {/* This component displays Aside components */}
    const [activeTab, setActiveTab] = useState("About me"); // Default tab is About me
    const [modalIsOpen, setModalIsOpen] = useState(false);
    // Step 2: Conditional rendering based on the active tab
    const renderInterestedPeople = activeTab === "My property";

    useEffect(() => {
        console.log("ASIDE",profile)
    }, []);


    return (
        <div className="h-auto w-56 bg-profile pr-4 m-2">
            {!myProfileDisplayed &&
                <div>
                    <MessageBtn/>
                    <FavoriteBtn/>
                    <ReportBtn onReportClicked={() => setModalIsOpen(true)}/>

                    {/*Report modal is displayed when report button is clicked*/}
                    <Modal open={modalIsOpen} close={() => setModalIsOpen(false)}>
                        <ReportModal userToReport={profile?.personalData.account_id as number} closeModal={() => setModalIsOpen(false)}/>
                    </Modal>

                </div>
            }
            <Rating myProfileDisplayed={myProfileDisplayed} revieweeId={profile?.profileData.account_id}/>
        </div>
    );
}

export default Aside;
