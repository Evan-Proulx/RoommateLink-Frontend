import React, {useEffect, useState} from 'react';
import {getProfileData, updateProfile} from "../../API/Profile.ts";
import {PersonalData, ProfileData, UserProfile} from "../../../ProfileData.ts";
import {LocationSearching} from "@mui/icons-material";
import MapPopup from "../../Survey/Survey-Map-Popup.tsx";
import {getLocation} from "../../API/Location.ts";
import {FormProvider, useForm, useFormContext} from "react-hook-form";
import {useNavigate} from "react-router-dom";

const UpdateProfile = ({closeModal}) => {
    const {register, formState: {errors}} = useForm();
    const navigate = useNavigate();

    const [profileData, setProfileData] = useState<UserProfile>();
    const [updatedPersonalData, setUpdatedPersonalData] = useState<PersonalData>();
    const [updatedProfileData, setUpdatedProfileData] = useState<ProfileData>();
    const [displayAlert, setDisplayAlert] = useState(false);
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [locationName, setLocationName] = useState("");
    const defaultLocation = {
        latitude: 42.251236522852885,
        longitude: -83.01928920731788,
        radius: 8000
    }
    // Default values for validation
    const methods = useForm({
        defaultValues: {
            firstname: profileData?.profileData.first_name,
            lastname: profileData?.profileData.last_name,
        }
    });

    // Get profile on load
    useEffect(() => {
        getData();
    }, []);

    //Fetch profile data
    const getData = async () => {
        try {
            const response = await getProfileData();
            console.log(response)
            // Set original profile
            setProfileData(response);
            //Set only personalData
            setUpdatedPersonalData(response.personalData);
            //Set only profileData
            setUpdatedProfileData(response.profileData);
        } catch (err) {
            console.log(err)
        }
    }

    //////////// LOCATION METHODS////////////
    //Update changes made to the map coordinates
    const handleLocationChange = (latitude: number, longitude: number) => {
        updatePersonalData("latitude", latitude);
        updatePersonalData("longitude", longitude);
        getLocationName(latitude, longitude);
    };
    //update changes made to map radius
    const handleRadiusChange = (radius: number) => {
        updatePersonalData("radius", radius);
    };

    //Gets names for location from set coordinates
    const getLocationName = async (latitude: number, longitude: number) => {
        const data = await getLocation(latitude, longitude);
        if (data) {
            //Set location name to input
            setLocationName(`${data.town}, ${data.province}`);
            //Update city and province in user data
            updatePersonalData("city", data.town);
            updatePersonalData("province", data.province);
        }
    }
    /////////////////////////////////////////


    //////Update the state for both the personal and profile data/////
    const updatePersonalData = (field: string, value: any) => {
        setUpdatedPersonalData((prev) => {
            if (!prev) return prev;
            return {
                ...prev,
                [field]: value
            }
        });
        console.log(updatedPersonalData);
    };
    const updateProfileData = (field: string, value: any) => {
        setUpdatedProfileData((prev) => {
            if (!prev) return prev;
            return {
                ...prev,
                [field]: value
            }
        });
        console.log(updatedProfileData);
    };
//////////////////////////////////////////////


    useEffect(() => {
        console.log(updatedPersonalData);
        console.log(updatedProfileData);
    }, [updatePersonalData, updateProfileData]);

    //Update the user's profile with the new information that was set
    const handleUpdateProfile = async (e: React.FormEvent) => {
        e.preventDefault();
        // Only update if new information is set
        if (updatedPersonalData === profileData?.personalData && updatedProfileData === profileData?.profileData) {
            // Alert the user that there is nothing to update
            setDisplayAlert(true);
            return;
        }

        console.log("PROFILE", updatedPersonalData)
        try {
            // Pass the data and the type of data to update
            await updateProfile("personal", updatedPersonalData);
            await updateProfile("profile", updatedProfileData);
            console.log("Profile updated successfully");

            // Send close notification to parent
            closeModal();

            //Refreshes the current page
            navigate(0);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className={"flex flex-col justify-center items-center border-2 border-black p-10 w-full rounded-lg"}>
            <h1 className={"header2-text pb-3"}>Update your profile info</h1>
            <FormProvider{...methods}>
                <form onSubmit={handleUpdateProfile} className={"space-y-12"}>

                    {/*LOCATION INPUT*/}
                    <section className={""}>
                        <label htmlFor="cities" className="block header4-text text-start">Please
                            select your city*</label>

                        <div className="flex items-center justify-center space-x-2">
                            <input id="location" value={locationName} readOnly={true} contentEditable={false}
                                   className="input-style-survey"
                            />
                            <button type="button"
                                    className={"bg-text p-3 rounded text-white transition-all duration-200 hover:rounded-2xl hover:bg-red-800"}
                                    onClick={() => setIsMapOpen(true)}>
                                <LocationSearching/>
                            </button>

                            {/* Map Popup */}
                            <MapPopup
                                isOpen={isMapOpen}
                                onClose={() => setIsMapOpen(false)}
                                latitude={defaultLocation.latitude}
                                longitude={defaultLocation.longitude}
                                onRadiusChange={handleRadiusChange}
                                onLocationChange={handleLocationChange}
                            />
                        </div>
                    </section>

                    {/*BUDGET RANGE*/}
                    <div className="relative mb-6 ">
                        <label htmlFor="budget"
                               className={"block mb-2 header4-text text-start"}>Rent Budget:
                            ${updatedPersonalData?.budget}/month</label>
                        <input id="budget" type="range" min="100" max="10000" step="100"
                               defaultValue={updatedPersonalData?.budget}
                               className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                               onChange={(e) => {
                                   updatePersonalData("budget", parseInt(e.target.value));
                               }}/>
                        <span
                            className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">$100</span>
                        <span
                            className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$500</span>
                        <span
                            className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$1000</span>
                        <span
                            className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">$10000</span>
                    </div>

                    {/*Name input*/}
                    <section className={"flex justify-center items-end space-x-3"}>
                        {/*Firstname input -- validation ensures it is required, length is between 2 and 50 and has no special characters*/}
                        <div className={"flex flex-col "}>
                            <label htmlFor="firstname" className="block mb-2 header4-text">First Name</label>
                            <input type="input"
                                   id="firstname"
                                   name="firstname"
                                   value={updatedProfileData?.first_name}
                                   min={2} max={50} required
                                   className="input-style-survey"
                                   {...register("firstname", {
                                       required: "First name is required",
                                       minLength: {value: 2, message: "Must be at least 2 characters"},
                                       maxLength: {value: 50, message: "Cannot exceed 50 characters"},
                                       pattern: {
                                           value: /^[A-Za-z0-9 ]+$/,
                                           message: "No special characters allowed",
                                       },
                                   })}
                                   onChange={(e) => {
                                       updateProfileData("first_name", e.target.value);
                                   }}/>
                            {/*Display validation error*/}
                            {errors.firstname &&
                                <p className={"text-red-600 text-center min-h-12"}>{errors.firstname.message}</p>}
                        </div>

                        {/*Lastname input validation ensures it is required, length is between 2 and 50 and has no special characters*/}
                        <div className={"flex flex-col"}>
                            <label htmlFor="lastname" className="block mb-2 header4-text">Last Name</label>
                            <input type="input"
                                   id="lastname"
                                   name="lastname"
                                   value={updatedProfileData?.last_name}
                                   min={2} max={50} required
                                   className="input-style-survey"
                                   {...register("lastname", {
                                       required: "Last name is required",
                                       minLength: {value: 2, message: "Must be at least 2 characters"},
                                       maxLength: {value: 50, message: "Cannot exceed 50 characters"},
                                       pattern: {
                                           value: /^[A-Za-z0-9 ]+$/,
                                           message: "No special characters allowed",
                                       },
                                   })}
                                   onChange={(e) => {
                                       updateProfileData("last_name", e.target.value);
                                   }}/>
                            {/*Display validation error*/}
                            {errors.lastname &&
                                <p className={"text-red-600 text-center min-h-12"}>{errors.lastname.message}</p>}
                        </div>
                    </section>

                    {/*BIO INPUT*/}
                    <div className={"w-full"}>
                        <label htmlFor="message" className="block mb-2 header4-text text-start">
                            Write a short bio
                        </label>
                        <textarea id="message"
                                  className="input-style-survey lg:w-1/2 p-4"
                                  placeholder="Write something..."
                                  value={updatedProfileData?.bio}
                                  onChange={e => {
                                      updateProfileData("bio", e.target.value)
                                  }}/>
                    </div>


                    <div className={"flex flex-col items-center space-y-2"}>
                        {displayAlert && <p className={"font-bold text-lg text-center"}>Nothing to update!</p>}

                        <button type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Submit
                        </button>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default UpdateProfile;