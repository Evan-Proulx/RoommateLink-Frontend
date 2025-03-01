import React from 'react';
import FeedCard from "./FeedCard.tsx";
import Navbar from "../Navbar.tsx";

const Feed = () => {
    const feedItems = Array.from({ length: 12 }, (_, index) => (
        <FeedCard key={index} />
    ));

    return (

        <div>
            <Navbar />
            <div className={"flex flex-col justify-center items-center bg-primary w-full h-full"}>
                <div className={"flex flex-col justify-center items-center w-full h-full"}>
                    {feedItems}
                </div>
            </div>
        </div>
    );
};

export default Feed;