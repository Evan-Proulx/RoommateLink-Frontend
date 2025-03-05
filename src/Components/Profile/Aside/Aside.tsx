import ProfileImg from "./ProfileImg.tsx";
import MessageBtn from "./MessageBtn.tsx";
import FavoriteBtn from "./FavoriteBtn.tsx";
import Video from "./Video.tsx";
import Rating from "./Rating.tsx";
import ReportBtn from "./ReportBtn.tsx";
import {createContext, useContext, useState} from "react";
import {ProfileContext} from "../ProfilePage.tsx";

function Aside() {
    const profile = useContext(ProfileContext);
    {/* This component displays Aside components */}
    const [activeTab, setActiveTab] = useState("About me"); // Default tab is About me

    // Step 2: Conditional rendering based on the active tab
    const renderInterestedPeople = activeTab === "My property";

    return (
        <div className="h-auto w-56 bg-profile p-4 m-2">
            <MessageBtn />
            <FavoriteBtn />
            <ReportBtn/>
            <Rating />

        </div>
    );
}

export default Aside;
