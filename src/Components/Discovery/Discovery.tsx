import React, {useState} from 'react';
import FeedCard from "../CardComponents/FeedCard.tsx";
import Navbar from "../Navbar.tsx";
import MapPopup from "../Survey/SurveyComponents/Survey-Map-Popup.tsx";
import {LocationSearching, Search} from "@mui/icons-material";
import {} from "@mui/material/colors";
import ReportModal from "../Profile/Reporting/ReportModal.tsx";
import Modal from "../Modal.tsx";
import DiscoveryModal from "./DiscoveryModal.tsx";
import ProfileCard from "../CardComponents/ProfileCard.tsx";
import {UserProfile} from "../../ProfileData.ts";
import {DiscoveryData, discoverySearch} from "../API/Discovery.ts";

const Discovery = () => {
    const [showPopover, setShowPopover] = useState(false);
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [locationName, setLocationName] = useState("")
    const [budget, setBudget] = useState(1200);
    const [users, setUsers] = useState<UserProfile[]>([]);
    const [formData, setFormData] = useState<DiscoveryData>({
        budget: 1200,
        gender: '',
        religion: '',
        diet: '',
        school: '',
        pet_free: false,
        smokes: false,
        // verified: false,
        has_housing: false
    });

    const search = async (data) => {
        try {
            const response = await discoverySearch(data);
            console.log("RETURNED", response);
            setUsers(response.userMatches.map((user) => ({
                    profileData: user.userProfileData,
                    personalData: user.userPersonalData,
                    propertyData: user.userPropertyData,
                }))
            );        } catch (err) {
            console.error("Error searching for housing:", err);
        }
    }

    if (!users) return (
        <div className={"flex flex-col justify-center items-center h-screen w-full bg-gray-300"}>
            <span className={"loader"}></span>
            <h2 className={"header4-text text-center pt-4"}>Loading...</h2>
        </div>
    );

    return (
        <div className={"w-full bg-primary overflow-y-hidden"}>
            <Navbar/>
            <div className={"flex items-baseline py-3 space-x-3"}>
                <div>
                    <h1 className="pl-3 lg:pl-32 text-start header-text-huge">Discovery</h1>
                    <h2 className="pl-3 lg:pl-32 text-start header4-text">Refine your roommate search</h2>
                </div>
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

                <div className={"space-x-2"}>
                    <button onClick={() => setModalIsOpen(true)} className={"bg-white border-2 border-text p-2 text-lg font-bold text-text rounded"}>More</button>
                    <button className={"bg-text p-2 text-lg font-bold text-white rounded"}>Search <Search/></button>
                </div>
            </div>
            <div className={"flex flex-col w-full h-full pt-4"}>
                <div className={"flex flex-col justify-center items-center w-full h-full space-y-4"}>
                    {users ? (
                        users.map((user, index) => (
                            <ProfileCard key={user.profileData.account_id} user={user}/>
                        ))
                    ) : (
                        <div className="flex items-center justify-center text-gray-500">
                            <p>No matching users found.</p>
                        </div>
                    )}
                </div>
            </div>

            <Modal open={modalIsOpen} close={() => setModalIsOpen(false)}>
                <DiscoveryModal onSearch={search} parentData={formData} closeModal={() => setModalIsOpen(false)}/>
            </Modal>
        </div>
    );
};

export default Discovery;