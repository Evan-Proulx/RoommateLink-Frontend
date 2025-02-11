import ProfileImg from "./ProfileImg.tsx";
import MessageBtn from "./MessageBtn.tsx";
import FavoriteBtn from "./FavoriteBtn.tsx";
import Video from "./Video.tsx";
import Rating from "./Rating.tsx";

function Aside() {

    return (
        <div className="w-64 h-screen p-4 fixed left-0 top-0 bg-[var(--color-primary)]">
            <ProfileImg/>
            <MessageBtn/>
            <FavoriteBtn/>
            <Video/>
            <Rating/>
        </div>
    )
}

export default Aside