import ProfileImg from "./ProfileImg.tsx";
import MessageBtn from "./MessageBtn.tsx";
import FavoriteBtn from "./FavoriteBtn.tsx";
import Video from "./Video.tsx";
import Rating from "./Rating.tsx";

function Aside() {

    return (
        <div className="aside-container">
            <ProfileImg/>
            <MessageBtn/>
            <FavoriteBtn/>
            <Video/>
            <Rating/>
        </div>
    )
}

export default Aside