import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import Navbar from "../Navbar";
import MapPopup from "../Survey/SurveyComponents/Survey-Map-Popup";
import { LocationSearching, Search } from "@mui/icons-material";
import Modal from "../Modal";
import DiscoveryModal from "./DiscoveryModal";
import ProfileCard from "../CardComponents/ProfileCard";
import { discoverySearch } from "../API/Discovery";
import { getLocation } from "../API/Location";
import { getProfileData } from "../API/Profile";
const Discovery = () => {
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [locationName, setLocationName] = useState("");
    const [currentUser, setCurrentUser] = useState(undefined);
    const [users, setUsers] = useState([]);
    // Default form values TODO: Get user's profile and set defaults
    const [formData, setFormData] = useState({
        longitude: 0,
        latitude: 0,
        budget: 1200,
        gender: '',
        religion: '',
        diet: '',
        school: '',
        pet_free: false,
        smokes: false,
        verified: false,
        has_housing: false
    });
    // Get user when the page load and update default form data
    const getAuthenticatedUser = async () => {
        try {
            // Get logged in user's profile
            const response = await getProfileData();
            // Set profile to state
            setCurrentUser(response);
            // Set defaults
            setFormData(prevState => ({
                ...prevState,
                longitude: response.personalData.longitude,
                latitude: response.personalData.latitude,
                budget: response.personalData.budget
            }));
            // Set the default value for the location input
            setLocationName(response.personalData.city + ", " + response.personalData.province);
        }
        catch (err) {
            console.error("Error searching for housing:", err);
        }
    };
    //Get user's profile
    useEffect(() => {
        getAuthenticatedUser();
    }, []);
    useEffect(() => {
        if (currentUser !== undefined) {
            search(formData);
        }
    }, [currentUser]);
    //Set location state
    const handleLocationChange = (latitude, longitude) => {
        setFormData(prev => ({
            ...prev,
            latitude: latitude,
            longitude: longitude
        }));
        getLocationName(latitude, longitude);
    };
    //Get location from set coordinates
    const getLocationName = async (latitude, longitude) => {
        const data = await getLocation(latitude, longitude);
        if (data) {
            //Set location name to input
            setLocationName(`${data.town}, ${data.province}`);
            console.log(locationName);
        }
    };
    //Update state of form outside the more modal
    const handleChange = (e) => {
        const { name, value } = e.target;
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
            })));
        }
        catch (err) {
            console.error("Error searching for housing:", err);
        }
    };
    if (!users)
        return (_jsxs("div", { className: "flex flex-col justify-center items-center h-screen w-full bg-gray-300", children: [_jsx("span", { className: "loader" }), _jsx("h2", { className: "header4-text text-center pt-4", children: "Loading..." })] }));
    return (_jsxs("div", { className: "w-full bg-primary h-screen overflow-y-auto", children: [_jsx(Navbar, {}), _jsx("div", { className: "flex items-baseline py-3 space-x-3", children: _jsxs("div", { children: [_jsx("h1", { className: "pl-3 lg:pl-32 text-start header-text-huge", children: "Discovery" }), _jsx("h2", { className: "pl-3 lg:pl-32 text-start header4-text", children: "Refine your roommate search" })] }) }), _jsxs("div", { className: "flex flex-wrap space-x-3 items-end justify-center", children: [_jsxs("section", { className: "", children: [_jsx("label", { htmlFor: "cities", className: "block text-lg font-bold", children: "Location" }), _jsxs("div", { className: "flex items-center justify-center space-x-2", children: [_jsx("input", { id: "location", value: locationName, contentEditable: false, className: "bg-white border-2 border-black text-gray-900 text-sm rounded-lg p-2" }), _jsx("button", { type: "button", onClick: () => setIsMapOpen(true), children: _jsx("button", { type: "button", className: "bg-text p-1 rounded text-white transition-all duration-200 hover:rounded-2xl ", onClick: () => setIsMapOpen(true), children: _jsx(LocationSearching, {}) }) }), _jsx(MapPopup, { isOpen: isMapOpen, onClose: () => setIsMapOpen(false), onLocationChange: handleLocationChange })] })] }), _jsx("section", { children: _jsxs("div", { className: "flex flex-col w-fit", children: [_jsx("label", { htmlFor: "gender", className: "block text-lg font-bold", children: "Gender" }), _jsxs("select", { id: "gender", name: "gender", className: "bg-white border-2 border-black text-gray-900 text-sm rounded-lg p-2", onChange: handleChange, required: true, children: [_jsx("option", { value: "male", children: "Male" }), _jsx("option", { value: "female", children: "Female" }), _jsx("option", { value: "other", children: "Other" })] })] }) }), _jsxs("div", { className: "flex flex-col", children: [_jsx("label", { htmlFor: "budget", className: "block text-lg font-bold", children: "Budget" }), _jsx("input", { type: "number", name: "budget", value: formData.budget, min: 100, max: 10000, step: 100, id: "budget", onChange: handleChange, className: "bg-white border-2 border-black text-gray-900 text-sm rounded-lg p-2" })] }), _jsxs("div", { className: "space-x-2", children: [_jsx("button", { onClick: () => setModalIsOpen(true), className: "bg-white border-2 border-text p-2 text-lg font-bold text-text rounded hover:bg-gray-100", children: "More" }), _jsxs("button", { onClick: () => search(formData), className: "bg-text p-2 text-lg font-bold text-white rounded", children: ["Search ", _jsx(Search, {})] })] })] }), _jsx("div", { className: "flex flex-col items-center w-full pt-4", children: _jsx("div", { className: "flex flex-col justify-center items-center space-y-4 md:w-3/4 xl:w-1/2 h-full pb-12", children: users.length > 0 ? (users.map((user, index) => (_jsx(ProfileCard, { user: user, discovery: true }, user.profileData.account_id)))) : (_jsx("div", { className: "flex items-center justify-center text-gray-500", children: _jsx("p", { children: "No matching users found. Try a simpler search" }) })) }) }), _jsx(Modal, { open: modalIsOpen, close: () => setModalIsOpen(false), children: _jsx(DiscoveryModal, { onSearch: search, parentData: formData, closeModal: () => setModalIsOpen(false) }) })] }));
};
export default Discovery;
