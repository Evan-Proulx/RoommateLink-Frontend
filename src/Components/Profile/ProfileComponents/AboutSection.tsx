import React, {useContext, useEffect, useState} from "react";
import {faBoxOpen, faCar, faLocationDot, faTshirt, faWifi} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import MapSection from "./MapSection.tsx";
import InterestedPeople from "./InterestedPeople.tsx";
import {ProfileContext} from "../ProfilePage.tsx";
import {DealBreakers, UserProfile} from "../../../ProfileData.ts";
import ImageGallery from "./ImageGallery.tsx";
import {AddBox, Edit} from "@mui/icons-material";
import UpdateProperty from "../UpdateForms/UpdateProperty.tsx";
import Modal from "../../Modal.tsx";
import {hobbies} from "../../../data.ts";

interface AboutSectionProps{
    propertyImages: string[],
    myProfileDisplayed: boolean,
}

function AboutSection({propertyImages, myProfileDisplayed, interestedPeople}: AboutSectionProps) {
    //Get user data
    const userProfile = useContext(ProfileContext);
    const user = userProfile as UserProfile;
    //If the user has a property then the My Property Tab will be displayed
    //Modal States
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [activeDealBreakers, setActiveDealBreakers] = useState<string[]>();
    const [userHobbies, setUserHobbies] = useState<string[]>([]);

    // Set labels to display for each dealbreaker
    const dealBreakerLabels = {
        has_pets: 'No Pets \u{1F436}',
        smokes: 'Smoke Free \u{1F6AD}',
        different_gender: `Gender: ${user.personalData.gender}`,
        different_diet: 'Diet \u{1F374}',
        different_school: `School: ${user?.personalData.school} \u{1F3EB}`,
        different_religion: `Religion: ${user.personalData.religion}`,
        has_kids: 'No Kids \u{1F6BC}',
        night_owl: 'No Night Owls \u{1F303}'
    };

    //Maps through list of hobby codes and finds their name from the hobbies data.
    const retrieveHobbyNames = (hobbyCodes: string[]) => {
        if (hobbyCodes.length > 0){
            const hobbyNames = hobbyCodes.map(hobby => {
                const foundHobby = hobbies.find(h => h.code === hobby)
                return foundHobby.name
            })
            setUserHobbies(hobbyNames)
        }
    }
    const retrieveDealBreakers = () => {
        if (user.dealBreakers){
            //Return an array of the user's deal breakers that are set to true
            const breaks =  Object.entries(user.dealBreakers)
                // Get only values that equal true and are not the user's id
                .filter(([key, value]) => value === 1 && key !== "id")
                // Return only the key
                .map(([key, _]) => key as keyof DealBreakers);
            // Set true deal breakers
            setActiveDealBreakers(breaks);
        }
    }

    // Get the user's deal breakers and hobbies when the user object loads
    useEffect(() => {
        retrieveDealBreakers();
        retrieveHobbyNames(user?.personalData.hobbies.map(h => h.hobby) ?? []);
    }, [user]);


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
                    className={`px-4 py-2 cursor-pointer ${activeTab === "about" ? "border-b-4 border-black text-3xl font-bold" : "text-xl"}`}>
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
                <div className="flex flex-col space-y-4">
                    {/*About Me Section*/}
                    <p className="text-gray-600 m-2 text-lg font-semibold mt-2">
                        {user.profileData.bio}
                    </p>

                    {/* Display Roommate Preferences */}
                    {activeDealBreakers?.length > 0 && (
                        <>
                            <h3 className="mt-4 p-2 font-bold text-xl">My Ideal Roommate</h3>
                            <div className="flex gap-2 flex-wrap">
                                {activeDealBreakers?.map((key) => (
                                    <div key={key} title={dealBreakerLabels[key]}
                                        className="bg-blue-200 text-blue-800 text-center font-semibold p-2 px-4 pb-2 w-fit m-1 rounded-xl shadow-md">
                                        {/*Display label based on user's set dealbreakers*/}
                                        {dealBreakerLabels[key]}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    {/*Display user's hobbies */}
                    {userHobbies?.length > 0 && (
                        <>
                            <h3 className="mt-4 p-2 font-bold text-xl">Hobbies/Interests</h3>
                            <div className="flex flex-wrap">
                                {
                                    userHobbies.map((hobby, index) => (
                                        <label key={index} title={hobby}
                                               className="bg-blue-500 text-white text-center text-sm font-normal p-2 px-4 pb-2 w-fit m-1 rounded-xl">
                                            {hobby}
                                        </label>
                                    ))
                                }
                            </div>
                        </>)}


                    <InterestedPeople interestedPeople={interestedPeople}/>
                </div>
            ) : user.personalData.has_housing ? (
                <div className="mt-4">
                    {/*My Property Section */}
                    <div className={"flex items-center"}><h2
                        className="text-xl pt-2 font-bold m-2">{user.personalData.city + ", " + user.personalData.province}</h2>
                        {/*Edit property modal toggle*/}
                        {myProfileDisplayed &&
                            <div title={"Edit Property"} className={"cursor-pointer"}
                                 onClick={() => setModalIsOpen(true)}>
                                <Edit sx={{fontSize: 22}}/>
                            </div>}</div>

                    <div className="flex items-center justify-between w-128">
                        <h4 className="pl-2 text-gray-600 font-semibold"> {user.propertyData.bedroom_count} bedrooms + {user.propertyData.bathroom_count} Bathroom · {user.propertyData.square_feet} Square Feet</h4>
                        {/*<h4 className={`text-center font-semibold ${getTextColor(theLocation)}`}>*/}
                        {/*    {theLocation}Km away*/}
                        {/*    <FontAwesomeIcon icon={faLocationDot} className="ml-1"/>*/}
                        {/*</h4>*/}
                    </div>


                    {/* Property Images Gallery */}
                    <div className="w-128 m-2">
                    <ImageGallery images={propertyImages} />
                </div>

                    <h3 className="mt-12 font-bold m-2 text-xl">About My Property</h3>
                    <p className="text-gray-600 m-2 text-lg font-semibold mt-2">
                        {user.propertyData.description}
                    </p>

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
