import ProfileImg from "./ProfileImg.tsx";
import MessageBtn from "./MessageBtn.tsx";
import FavoriteBtn from "./FavoriteBtn.tsx";

function Aside() {

    return (
        <div className="aside-container">
            <ProfileImg/>
            <MessageBtn/>
            <FavoriteBtn/>
        </div>
    )
}

export default Aside