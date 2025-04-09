import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext, useEffect, useState } from "react";
import MapSection from "./MapSection";
import InterestedPeople from "./InterestedPeople";
import { ProfileContext } from "../ProfilePage";
import ImageGallery from "./ImageGallery";
import { AddBox, Edit } from "@mui/icons-material";
import UpdateProperty from "../UpdateForms/UpdateProperty";
import Modal from "../../Modal";
import { hobbies } from "../../../data";
function AboutSection({ propertyImages, myProfileDisplayed, interestedPeople }) {
    //Get user data
    const userProfile = useContext(ProfileContext);
    const user = userProfile;
    //If the user has a property then the My Property Tab will be displayed
    //Modal States
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [activeDealBreakers, setActiveDealBreakers] = useState();
    const [userHobbies, setUserHobbies] = useState([]);
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
    const retrieveHobbyNames = (hobbyCodes) => {
        if (hobbyCodes.length > 0) {
            const hobbyNames = hobbyCodes.map(hobby => {
                const foundHobby = hobbies.find(h => h.code === hobby);
                return foundHobby.name;
            });
            setUserHobbies(hobbyNames);
        }
    };
    const retrieveDealBreakers = () => {
        if (user.dealBreakers) {
            //Return an array of the user's deal breakers that are set to true
            const breaks = Object.entries(user.dealBreakers)
                // Get only values that equal true and are not the user's id
                .filter(([key, value]) => value === 1 && key !== "id")
                // Return only the key
                .map(([key, _]) => key);
            // Set true deal breakers
            setActiveDealBreakers(breaks);
        }
    };
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
        }
        else if (percentage <= 50) {
            return 'text-orange-500'; // Orange for less than 50
        }
        else {
            return 'text-red-500'; // Red for 51 and above
        }
    };
    const [activeTab, setActiveTab] = useState("about");
    return (_jsxs("div", { className: "p-4", children: [_jsxs("div", { className: "flex space-x-6 mt-2", children: [_jsx("button", { onClick: () => setActiveTab("about"), className: `px-4 py-2 cursor-pointer ${activeTab === "about" ? "border-b-4 border-black text-3xl font-bold" : "text-xl"}`, children: "About Me" }), (user.personalData.has_housing === 1 || myProfileDisplayed) &&
                        _jsx("button", { onClick: () => setActiveTab("property"), className: `px-4 py-2 cursor-pointer ${activeTab === "property" ? "border-b-4 border-black text-3xl font-bold" : "text-xl"}`, children: "My Property" })] }), activeTab === "about" ? (_jsxs("div", { className: "flex flex-col space-y-4", children: [_jsx("p", { className: "text-gray-600 m-2 text-lg font-semibold mt-2", children: user.profileData.bio }), activeDealBreakers?.length > 0 && (_jsxs(_Fragment, { children: [_jsx("h3", { className: "mt-4 p-2 font-bold text-xl", children: "My Ideal Roommate" }), _jsx("div", { className: "flex gap-2 flex-wrap", children: activeDealBreakers?.map((key) => (_jsx("div", { title: dealBreakerLabels[key], className: "bg-blue-200 text-blue-800 text-center font-semibold p-2 px-4 pb-2 w-fit m-1 rounded-xl shadow-md", children: dealBreakerLabels[key] }, key))) })] })), userHobbies?.length > 0 && (_jsxs(_Fragment, { children: [_jsx("h3", { className: "mt-4 p-2 font-bold text-xl", children: "Hobbies/Interests" }), _jsx("div", { className: "flex flex-wrap", children: userHobbies.map((hobby, index) => (_jsx("label", { title: hobby, className: "bg-blue-500 text-white text-center text-sm font-normal p-2 px-4 pb-2 w-fit m-1 rounded-xl", children: hobby }, index))) })] })), _jsx(InterestedPeople, { interestedPeople: interestedPeople })] })) : user.personalData.has_housing ? (_jsxs("div", { className: "mt-4", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("h2", { className: "text-xl pt-2 font-bold m-2", children: user.personalData.city + ", " + user.personalData.province }), myProfileDisplayed &&
                                _jsx("div", { title: "Edit Property", className: "cursor-pointer", onClick: () => setModalIsOpen(true), children: _jsx(Edit, { sx: { fontSize: 22 } }) })] }), _jsx("div", { className: "flex items-center justify-between w-128", children: _jsxs("h4", { className: "pl-2 text-gray-600 font-semibold", children: [" ", user.propertyData.bedroom_count, " bedrooms + ", user.propertyData.bathroom_count, " Bathroom \u00B7 ", user.propertyData.square_feet, " Square Feet"] }) }), _jsx("div", { className: "w-128 m-2", children: _jsx(ImageGallery, { images: propertyImages }) }), _jsx("h3", { className: "mt-12 font-bold m-2 text-xl", children: "About My Property" }), _jsx("p", { className: "text-gray-600 m-2 text-lg font-semibold mt-2", children: user.propertyData.description }), _jsx(MapSection, {})] })) : (_jsx("div", { title: "Add property to account", className: "flex justify-center items-center pt-40", children: _jsxs("div", { onClick: () => setModalIsOpen(true), className: "flex space-x-2 cursor-pointer hover:text-gray-600", children: [_jsx(AddBox, { sx: { fontSize: 50 } }), _jsx("p", { className: "text-4xl font-extrabold", children: "Add a property" })] }) })), " ", _jsx(Modal, { open: modalIsOpen, close: () => setModalIsOpen(false), children: user.personalData.has_housing ? (_jsx(UpdateProperty, { property: user.propertyData, closeModal: () => setModalIsOpen(false) })) : (
                // Pass personal data if the user doesn't have a property
                _jsx(UpdateProperty, { property: user.propertyData, newProperty: true, personalData: user.personalData, closeModal: () => setModalIsOpen(false) })) })] }));
}
export default AboutSection;
