import React, {useState} from 'react';
import FeedCard from "./FeedCard.tsx";
import Navbar from "../Navbar.tsx";
import Popover from "./PopoverButton.tsx";

const Feed = () => {
    const feedItems = Array.from({ length: 12 }, (_, index) => (
        <FeedCard key={index} />
    ));

    const [showPopover, setShowPopover] = useState(false);

    return (

        <div className={"w-full bg-primary"}>
            <Navbar/>
            <div className={"flex items-baseline py-3 space-x-3"}>
                <h1 className="pl-3 lg:pl-32 text-start header-text-huge">Your Links</h1>
                <Popover/>
            </div>
            <div className={"flex flex-col w-full h-full"}>
                <div className={"flex flex-col justify-center items-center w-full h-full"}>
                    {feedItems}
                </div>
            </div>
        </div>
    );
};

export default Feed;