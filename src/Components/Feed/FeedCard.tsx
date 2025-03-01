import React, {useState} from 'react';
import {
    Bookmark, BookmarkAddedOutlined,
    BookmarkAddOutlined,
    BookmarkOutlined,
    BookmarksOutlined,
    ForumOutlined,
    LocationOn
} from "@mui/icons-material";
import { orange, pink } from '@mui/material/colors';
import MapPopup from "../Survey/Survey-Map-Popup.tsx";

const FeedCard = () => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [attributes, setAttributes] = useState(["non-smoker", "English", "Vegan"]);
    const [isMapOpen, setIsMapOpen] = useState(false);

    return (
        <div className={"flex items-center justify-center bg-primary w-full"}>
            <div className={"bg-white border border-black rounded w-144 xl:w-1/3 m-4 h-72 lg:h-64 card-shadow"}>
                <div className={"flex items-start justify-between"}>

                    <div className={"flex"}>
                        <img src="" alt="" className={"w-28 h-28 bg-red-700 m-4 rounded"}/>
                        <div className={"flex mt-4"}>
                            {/*Main info*/}
                            <div className="flex flex-col ">
                                <div className={"flex space-x-3"}><h1 className={"text-3xl font-bold"}>John Doe</h1>
                                    <div className={"w-6 h-6 bg-blue-600 rounded-full"}></div>
                                </div>
                                <div className={"flex items-end card-text-light cursor-pointer hover:underline"} onClick={() => setIsMapOpen(true)}>
                                    <p className={"text-sm"}>Windsor, On </p>
                                    <LocationOn/>
                                </div>
                                <p className={"text-sm card-text-light"}>Age: 31</p>
                                <p className={"text-sm card-text-light"}>$1,200</p>
                            </div>
                        </div>
                    </div>

                    {/*Link/Actions*/}
                    <div className={"m-4"}>
                        <p className={"text-lg font-black text-green-400"}>98% Link</p>
                        <div className={"flex justify-end space-x-3"}>
                            <button className={""} title={"Start a Chat"}><ForumOutlined/></button>
                            <button className={""} title={"Bookmark User"} onClick={() => setIsBookmarked(!isBookmarked)}>
                                {!isBookmarked ?(
                                <BookmarkAddOutlined sx={{color: orange[600]}} />
                            ) : (
                                <Bookmark sx={{color: orange[600]}} />
                            )}
                            </button>
                        </div>
                    </div>
                </div>

                <div className={"flex justify-between "}>
                    <div className={"ml-4 mb-4 card-text-light w-1/2"}>
                        <p className={""}>Looking for: Roommate + Place</p>
                        <p className={"text-sm pt-2"}>Hey, I'm John! I'm looking for a chill and respectful roommate to
                            share a place.... </p>
                    </div>

                        <div className={"flex flex-row-reverse flex-wrap align-bottom items-end m-4 w-1/2"}>
                            {attributes.map(attributes =>
                                <div>
                                    <p className="px-2 py-1 me-1 text-sm font-medium text-white rounded-sm bg-secondary">{attributes}</p>
                                </div>
                            )}
                        </div>
                </div>
                {/* Map Popup that displays when location is clicked*/}
                <MapPopup
                    isOpen={isMapOpen}
                    onClose={() => setIsMapOpen(false)}
                    onProfileMap={true}
                />
            </div>


      </div>
    );
};

export default FeedCard;