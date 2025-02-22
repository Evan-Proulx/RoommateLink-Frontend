import ProfileImg from "./ProfileImg.tsx";
import MessageBtn from "./MessageBtn.tsx";
import FavoriteBtn from "./FavoriteBtn.tsx";
import Video from "./Video.tsx";
import Rating from "./Rating.tsx";
import ReportBtn from "./ReportBtn.tsx";

function Aside() {

    {/* This component displays Aside components */}

    return (
        <div className="h-auto w-64 bg-gray-300 p-4 m-2 ml-30">
            <ProfileImg />
            <MessageBtn />
            <FavoriteBtn />
            <ReportBtn/>
            <Rating />
        </div>
    );
}

export default Aside;
