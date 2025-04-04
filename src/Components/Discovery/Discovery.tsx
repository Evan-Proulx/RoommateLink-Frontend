import React, {useEffect, useState} from 'react';
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
import {getLocation} from "../API/Location.ts";

const Discovery = () => {
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [locationName, setLocationName] = useState("")
    const [users, setUsers] = useState<UserProfile[]>([]);
    // Default form values TODO: Get user's profile and set defaults
    const [formData, setFormData] = useState<DiscoveryData>({
        longitude: 0,
        latitude: 0,
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

    //Set location state
    const handleLocationChange = (latitude: number, longitude: number) => {
        setFormData(prev => ({
            ...prev,
            latitude: latitude,
            longitude: longitude
        }));
        getLocationName(latitude, longitude);
    };
    //Get location from set coordinates
    const getLocationName = async (latitude: number, longitude: number) => {
        const data = await getLocation(latitude, longitude);
        if (data) {
            //Set location name to input
            setLocationName(`${data.town}, ${data.province}`);
            console.log(locationName)
        }
    }

    //Update state of form outside the more modal
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    //Search for users matching filters
    const search = async (data) => {
        try {
            const response = await discoverySearch(data);
            //Convert returned data to UserProfile object
            setUsers(response.userMatches.map((user) => ({
                    profileData: user.userProfileData,
                    personalData: user.userPersonalData,
                    propertyData: user.userPropertyData,
                }))
            );
        } catch (err) {
            console.error("Error searching for housing:", err);
        }
    }

    useEffect(() => {
        console.log("Updated formdata",formData)
    }, [formData]);

    if (!users) return (
        <div className={"flex flex-col justify-center items-center h-screen w-full bg-gray-300"}>
            <span className={"loader"}></span>
            <h2 className={"header4-text text-center pt-4"}>Loading...</h2>
        </div>
    );

    return (
        <div className={"w-full bg-primary h-screen overflow-y-auto"}>
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
                            onLocationChange={handleLocationChange}
                        />
                    </div>
                </section>

                <section>
                    <div className={"flex flex-col w-fit"}>
                        {/*gender dropdown*/}
                        <label htmlFor="gender" className="block text-lg font-bold text-center">Gender</label>
                        <select id="gender" name="gender"
                                className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg p-2"
                            onChange={handleChange}
                                required>
                            <option value={"male"}>Male</option>
                            <option value={"female"}>Female</option>
                            <option value={"other"}>Other</option>
                        </select>
                    </div>
                </section>

                <div className={"flex flex-col"}>
                    <label htmlFor="budget" className="block text-lg font-bold text-center">Budget</label>
                    <input type="number" name={"budget"} value={formData.budget} min={100} max={10000} step={100} id="budget"
                           onChange={handleChange}
                           className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg p-2"/>
                </div>

                <div className={"space-x-2"}>
                    <button onClick={() => setModalIsOpen(true)} className={"bg-white border-2 border-text p-2 text-lg font-bold text-text rounded hover:bg-gray-100"}>More</button>
                    <button onClick={search} className={"bg-text p-2 text-lg font-bold text-white rounded"}>Search <Search/></button>
                </div>
            </div>
            <div className={"flex flex-col items-center w-full pt-4"}>
                <div className={"flex flex-col justify-center items-center space-y-4 w-3/4 xl:w-1/2 h-full pb-12"}>
                    {users.length > 0 ? (
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