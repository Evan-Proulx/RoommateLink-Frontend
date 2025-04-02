import React, {useContext, useState} from "react";
import {
    faBanSmoking,
    faBoxOpen,
    faCar,
    faGlobe,
    faGraduationCap, faLocationDot,
    faPaw, faTshirt,
    faWifi
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import MapSection from "./MapSection.tsx";
import InterestedPeople from "./InterestedPeople.tsx";
import {ProfileContext} from "../ProfilePage.tsx";
import {UserProfile} from "../../../ProfileData.ts";
import ImageGallery from "./ImageGallery.tsx";
import {AddBox, Edit} from "@mui/icons-material";
import UpdateProfile from "../UpdateForms/UpdateProfile.tsx";
import UpdateFiles from "../UpdateForms/UpdateFiles.tsx";
import UpdateProperty from "../UpdateForms/UpdateProperty.tsx";
import Modal from "../../Modal.tsx";

interface AboutSectionProps{
    propertyImages: string[],
    myProfileDisplayed: boolean
}

function AboutSection({propertyImages, myProfileDisplayed}: AboutSectionProps) {
    //Get user data
    const userProfile = useContext(ProfileContext);
    const user = userProfile as UserProfile;
    //If the user has a property then the My Property Tab will be displayed
    //Modal States
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // WE NEED TO ADD MORE ROOMMATE PREFERENCES
    // User preferences for an ideal roommate
    const userPreferences = {
        language: "English",
        smokeFree: true,
        petFree: true,
        student: true,
    };

    //Mapping user preferences
    const roommatePreferences = [
        <span key="lang">
        <FontAwesomeIcon icon={faGlobe} className="mr-1" /> {userPreferences.language}
    </span>,
        userPreferences.smokeFree ? (
            <span key="smoke">
            <FontAwesomeIcon icon={faBanSmoking} className="mr-1" /> Smoke-free
        </span>
        ) : null,

        userPreferences.petFree ? (
            <span key="pet">
               <FontAwesomeIcon icon={faPaw} className="mr-1"/> Pet-free</span>
        ) : null,

        userPreferences.student ? (
            <span key="student">
                <FontAwesomeIcon icon={faGraduationCap} className="mr-1"/> Student</span>

            ) : null
    ].filter(Boolean);

    // WE NEED TO ADD MORE
    // Amenities that's available in the property
    const propertyAmenities = {
        internet: true,
        parking: true,
        privateCloset: true,
        laundry: true
    };


    // Mapping property amenities
    const propertyPreference = [
        propertyAmenities.internet ? (
            <span key="internet">
            <FontAwesomeIcon icon={faWifi} className="mr-1" />
            Internet
        </span>
        ) : null,

        propertyAmenities.parking ? (
            <span key="parking">
            <FontAwesomeIcon icon={faCar} className="mr-1" />
            Parking
        </span>
        ) : null,

        propertyAmenities.privateCloset ? (
            <span key="private-closet">
            <FontAwesomeIcon icon={faBoxOpen} className="mr-1" />
            Private Closet
        </span>
        ) : null,

        propertyAmenities.laundry ? (
            <span key="laundry">
            <FontAwesomeIcon icon={faTshirt} className="mr-1" />
            Laundry
        </span>
        ) : null
    ].filter(Boolean);

    // How far is the property to the user location
    const theLocation = 26;

    //Changing the color based on how far it is
    const getTextColor = (percentage) => {
        if (percentage <= 25) {
            return 'text-green-500'; // Green for less than 25 KM
        } else if (percentage <= 50) {
            return 'text-orange-500'; // Orange for less than 50
        } else {
            return 'text-red-500'; // Red for 51 and above
        }
    };

    const [activeTab, setActiveTab] = useState("about");

    return (
        <div className="p-4">
            {/* Tabs for switching between "About Me" and "My Property" */}
            <div className="flex space-x-6 mt-2">
                <button
                    onClick={() => setActiveTab("about")}
                    className={`px-4 py-2 cursor-pointer ${activeTab === "about" ? "border-b-4 border-black text-3xl font-bold" : "text-xl"}`}
                >
                    About Me
                </button>

                {(user.personalData.has_housing === 1 || myProfileDisplayed) &&
                    <button
                    onClick={() => setActiveTab("property")}
                    className={`px-4 py-2 cursor-pointer ${activeTab === "property" ? "border-b-4 border-black text-3xl font-bold" : "text-xl"}`}>
                    My Property
                </button>}
            </div>

            {/* Content Section - Displaying the content of "About Me" or "My Property"*/}
            {activeTab === "about" ? (
                <div className="mt-4">
                    {/*About Me Section*/}
                    <p className="text-gray-600 m-2 text-lg font-semibold mt-2">
                        {user.profileData.bio}
                    </p>

                    {/* Roommate Preferences */}
                    <h3 className="mt-4 p-2 font-bold text-xl">My Ideal Roommate</h3>
                    <div className="flex space-x-2 mt-2">
                        {roommatePreferences.map((preference, index) => (
                            <span key={index} className="px-3 py-1 m-3 bg-gray-200 font-semibold rounded-full shadow-md">
                            {preference}
                        </span>
                        ))}
                    </div>

                    <InterestedPeople/>
                </div>
            )  : user.personalData.has_housing ? (
                <div className="mt-4">
                    {/*My Property Section */}
                    <div className={"flex items-center"}><h2
                        className="text-xl pt-2 font-bold m-2">{user.personalData.city + ", " + user.personalData.province}</h2>
                        {/*Edit property modal toggle*/}
                        {myProfileDisplayed &&
                            <div title={"Edit Property"} className={"cursor-pointer"} onClick={() => setModalIsOpen(true)}>
                                <Edit sx={{fontSize: 22}}/>
                            </div>}</div>

                    <div className="flex items-center justify-between w-128">
                        <h4 className="pl-2 text-gray-600 font-semibold"> {user.propertyData.bedroom_count} bedrooms + {user.propertyData.bathroom_count} Bathroom · {user.propertyData.square_feet} Square Feet</h4>
                        <h4 className={`text-center font-semibold ${getTextColor(theLocation)}`}>
                            {theLocation}Km away
                            <FontAwesomeIcon icon={faLocationDot} className="ml-1"/>
                        </h4>
                    </div>


                    {/* Property Images Gallery */}
                    <div className="w-128 m-2">
                    <ImageGallery images={propertyImages} />
                </div>

                    <h3 className="mt-12 font-bold m-2 text-xl">About My Property</h3>
                    <p className="text-gray-600 m-2 text-lg font-semibold mt-2">
                        {user.propertyData.description}
                    </p>

                    {/* Property Amenities */}
                    <h3 className="mt-10 font-bold m-2 text-xl">Amenities</h3>
                    <div className="flex space-x-2 mt-2">
                        {propertyPreference.map((preference, index) => (
                            <span key={index} className="px-3 m-3 py-1 bg-gray-200 font-semibold rounded-full shadow-md">
                                {preference}
                            </span>
                        ))}
                    </div>

                    {/* Map Section for Property Location */}
                    <MapSection />
                </div>
            ) : (
                <div title={"Add property to account"} className={"flex justify-center items-center pt-40"}>
                    <div onClick={() => setModalIsOpen(true)} className={"flex space-x-2 cursor-pointer hover:text-gray-600"}>
                        <AddBox sx={{fontSize: 50}}/>
                        <p className={"text-4xl font-extrabold"}>Add a property</p>
                    </div>
                </div>
            )} {/* To display nothing if the user has no property */}

            <Modal open={modalIsOpen} close={() => setModalIsOpen(false)}>
                {user.personalData.has_housing ? (
                    <UpdateProperty property={user.propertyData} closeModal={() => setModalIsOpen(false)} />
                ) : (
                    // Pass personal data if the user doesn't have a property
                    <UpdateProperty
                        property={user.propertyData}
                        newProperty={true}
                        personalData={user.personalData}
                        closeModal={() => setModalIsOpen(false)}
                    />
                )}
                </Modal>
        </div>
    );
}

export default AboutSection;
