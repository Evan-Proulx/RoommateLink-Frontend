import ProfileImg from "./ProfileImg.tsx";
import MessageBtn from "./MessageBtn.tsx";
import FavoriteBtn from "./FavoriteBtn.tsx";
import Video from "./Video.tsx";
import Rating from "./Rating.tsx";

function Aside() {

    {/* This component displays Aside components */}

    return (
        <div className="h-auto w-64 bg-[var(--color-primary)] p-4 m-2">
            <ProfileImg />
            <MessageBtn />
            <FavoriteBtn />
            <Video />
            <Rating />
        </div>
    );
}

export default Aside;
