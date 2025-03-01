import React from 'react';
import FeedCard from "./FeedCard.tsx";
import Navbar from "../Navbar.tsx";

const Feed = () => {
    const feedItems = Array.from({ length: 12 }, (_, index) => (
        <FeedCard key={index} />
    ));

    return (

        <div className={"w-full bg-primary"}>
            <Navbar/>
            <h1 className="py-3 pl-3 lg:pl-32 bg-primary text-start header-text-huge">Your Links</h1>
            <div className={"flex flex-col w-full h-full"}>
                <div className={"flex flex-col justify-center items-center w-full h-full"}>
                    {feedItems}
                </div>
            </div>
        </div>
    );
};

export default Feed;