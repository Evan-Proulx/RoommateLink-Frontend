import React, {useState} from 'react';
import FeedCard from "./FeedCard.tsx";
import Navbar from "../Navbar.tsx";
import Popover from "./PopoverButton.tsx";
import MapPopup from "../Survey/Survey-Map-Popup.tsx";
import {LocationSearching, Search} from "@mui/icons-material";
import {} from "@mui/material/colors";

const Discovery = () => {
    const feedItems = Array.from({ length: 12 }, (_, index) => (
        <FeedCard key={index} />
    ));

    const [showPopover, setShowPopover] = useState(false);
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [locationName, setLocationName] = useState("")
    const [budget, setBudget] = useState(1200)

    return (

        <div className={"w-full bg-primary"}>
            <Navbar/>
            <div className={"flex items-baseline py-3 space-x-3"}>
                <div><h1 className="pl-3 lg:pl-32 text-start header-text-huge">Discovery</h1>
                    <h2 className="pl-3 lg:pl-32 text-start header4-text">Refine your roommate search</h2></div>
            </div>

            <div className={"flex flex-wrap space-x-3 items-end justify-center"}>
                {/*Location select*/}
                <section className={""}>
                    <label htmlFor="cities" className="block text-lg font-bold text-center">Location</label>

                    <div className="flex items-center justify-center space-x-2">
                        <input id="location" value={locationName} contentEditable={false}
                               className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg p-2"/>

                        <button type="button" onClick={() => setIsMapOpen(true)}>
                            <button type="button"
                                    className={"bg-text p-1 rounded text-white transition-all duration-200 hover:rounded-2xl "}
                                    onClick={() => setIsMapOpen(true)}>
                                <LocationSearching/>
                            </button>
                        </button>

                        {/* Map Popup */}
                        <MapPopup
                            isOpen={isMapOpen}
                            onClose={() => setIsMapOpen(false)}
                        />
                    </div>
                </section>

                <section>
                    <div className={"flex flex-col w-fit"}>
                        {/*gender dropdown*/}
                        <label htmlFor="gender" className="block text-lg font-bold text-center">Gender</label>
                        <select id="gender"
                                className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg p-2"
                            // onChange={(event) => {
                            //     updateUserData("gender", event.target.value)
                            // }}
                                required>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Non-binary</option>
                            <option>Other</option>
                        </select>
                    </div>
                </section>

                <div className={"flex flex-col"}>
                    <label htmlFor="budget" className="block text-lg font-bold text-center">Budget</label>
                    <input type="number" value={budget} min={100} max={10000} step={100} id="budget"
                           onChange={(e) => setBudget(+e.target.value)}
                           className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg p-2"/>
                </div>

                <div className={""}>
                    <button className={"bg-text p-2 text-lg font-bold text-white rounded"}>Search <Search/></button>
                </div>
            </div>
            <div className={"flex flex-col w-full h-full"}>
                <div className={"flex flex-col justify-center items-center w-full h-full"}>
                    {feedItems}
                </div>
            </div>
        </div>
    );
};

export default Discovery;