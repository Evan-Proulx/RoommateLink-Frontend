import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import TimePicker from "../SurveyComponents/TimePicker";
import { diets, languages, religions } from "../../../data";
import AddHobby from "../SurveyComponents/AddHobby";
import MapPopup from "../SurveyComponents/Survey-Map-Popup";
import { getLocation } from "../../API/Location";
import CollegeInput from "../SurveyComponents/CollegeInput";
import { LocationSearching } from "@mui/icons-material";
import { useFormContext } from "react-hook-form";
const SurveyPersonal = ({ userData, setUserData, searchLocation, setSearchLocation }) => {
    const { register, formState: { errors, isValid, isDirty }, setValue, trigger } = useFormContext();
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [locationName, setLocationName] = useState("");
    //Gets times from the component and sets them
    const handleTimeChange = (from, to) => {
        updateUserData("workingTimeFrom", from);
        updateUserData("workingTimeTo", to);
    };
    const handleHobbyChange = (newHobbies) => {
        updateUserData("hobbies", newHobbies);
    };
    const handleSchoolChange = (newSchool) => {
        updateUserData("school", newSchool);
    };
    //Update changes made to the map coordinates
    const handleLocationChange = (latitude, longitude) => {
        setSearchLocation(prevState => ({ ...prevState, latitude, longitude }));
        getLocationName().then(r => console.log());
    };
    //update changes made to map radius
    const handleRadiusChange = (radius) => {
        setSearchLocation(prevState => ({ ...prevState, radius }));
    };
    //update the user data
    const updateUserData = (field, value) => {
        setUserData(prevState => ({
            ...prevState,
            [field]: value
        }));
    };
    //Get location from map coordinates
    const getLocationName = async () => {
        const data = await getLocation(searchLocation.latitude, searchLocation.longitude);
        if (data) {
            //Set location name to input
            setLocationName(`${data.town}, ${data.province}`);
            //Update city and province in user data
            updateUserData("city", data.town);
            updateUserData("province", data.province);
        }
    };
    useEffect(() => {
        setValue('location', searchLocation);
        trigger('location').then(r => console);
    }, [searchLocation, setValue]);
    return (_jsxs("form", { className: "pt-12 space-y-14", children: [_jsx("h2", { className: "header-text-big text-center", children: "About You" }), _jsxs("section", { className: "min-h-40", children: [_jsx("label", { htmlFor: "cities", className: "block header2-text text-center", children: "Please select your city*" }), _jsxs("div", { className: "flex items-center justify-center space-x-2", children: [_jsx("input", { id: "location", value: locationName, contentEditable: false, className: "input-style-survey", ...register("location", {
                                    required: "Location is required"
                                }) }), _jsx("button", { type: "button", className: "bg-text p-3 rounded text-white transition-all duration-200 hover:rounded-2xl hover:bg-red-800", onClick: () => setIsMapOpen(true), children: _jsx(LocationSearching, {}) }), _jsx(MapPopup, { isOpen: isMapOpen, onClose: () => setIsMapOpen(false), latitude: searchLocation.latitude, longitude: searchLocation.longitude, onRadiusChange: handleRadiusChange, onLocationChange: handleLocationChange })] }), errors.location && _jsx("p", { className: "text-red-600 text-center min-h-12", children: errors.location.message })] }), _jsxs("fieldset", { className: "", children: [_jsx("h2", { className: "header2-text text-center", children: "Current housing status" }), _jsxs("div", { className: "flex", children: [_jsxs("div", { className: "flex items-center m-4", children: [_jsx("input", { id: "has-housing-true", type: "radio", name: "countries", value: "USA", className: "w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600", checked: userData.hasHousing, onChange: () => updateUserData("hasHousing", true) }), _jsx("label", { htmlFor: "has-housing-true", className: "block ms-2  text-sm font-medium header4-text", children: "Already have a place" })] }), _jsxs("div", { className: "flex items-center m-4", children: [_jsx("input", { id: "has-housing-false", type: "radio", name: "countries", value: "Germany", className: "w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600", checked: !userData.hasHousing, onChange: () => updateUserData("hasHousing", false) }), _jsx("label", { htmlFor: "has-housing-false", className: "block ms-2 text-sm font-medium header4-text dark:text-gray-300", children: "Looking for housing" })] })] })] }), _jsxs("div", { className: "relative mb-6 ", children: [_jsxs("label", { htmlFor: "budget", className: "block mb-2 header2-text text-center", children: ["Rent Budget: $", userData.budget, "/month"] }), _jsx("input", { id: "budget", type: "range", min: "100", max: "10000", step: "100", value: userData.budget, className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700", onChange: (e) => {
                            updateUserData("budget", +e.target.value);
                        } }), _jsx("span", { className: "text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6", children: "$100" }), _jsx("span", { className: "text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6", children: "$500" }), _jsx("span", { className: "text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6", children: "$1000" }), _jsx("span", { className: "text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6", children: "$10000" })] }), _jsxs("section", { className: "flex justify-center items-end space-x-3", children: [_jsxs("div", { className: "flex flex-col items-center w-full", children: [_jsx("label", { htmlFor: "Profession", className: "block mb-2 header2-text text-center", children: "Profession" }), _jsx("input", { type: "input", id: "profession", className: "input-style-survey", onChange: (event) => {
                                    updateUserData("profession", event.target.value);
                                } })] }), _jsxs("div", { className: "flex flex-col w-full", children: [_jsx("label", { htmlFor: "cities", className: "block mb-2 header2-text text-center", children: "Select School" }), _jsx(CollegeInput, { onSchoolChange: handleSchoolChange })] })] }), _jsxs("div", { children: [_jsx("h2", { className: "block header2-text text-center", children: "Select Working Times" }), _jsx(TimePicker, { onTimeChange: handleTimeChange })] }), _jsxs("section", { className: "flex justify-center items-end space-x-3", children: [_jsxs("div", { className: "flex flex-col w-fit", children: [_jsx("label", { htmlFor: "gender", className: "block mb-2 header2-text text-center", children: "Gender" }), _jsxs("select", { id: "gender", className: "input-style-survey", onChange: (event) => {
                                    updateUserData("gender", event.target.value);
                                }, required: true, children: [_jsx("option", { children: "Male" }), _jsx("option", { children: "Female" }), _jsx("option", { children: "Non-binary" }), _jsx("option", { children: "Other" })] })] }), _jsxs("div", { className: "flex flex-col", children: [_jsx("label", { htmlFor: "language", className: "block mb-2 header2-text text-center", children: "Select language" }), _jsx("select", { id: "language", className: "input-style-survey", onChange: (event) => {
                                    updateUserData("language", event.target.value);
                                }, children: languages.map((lang) => (_jsx("option", { value: lang.code, children: lang.name }, lang.code))) })] })] }), _jsxs("section", { className: "flex justify-center items-end space-x-3", children: [_jsxs("div", { className: "flex flex-col w-full items-center", children: [_jsx("label", { htmlFor: "religion", className: "block mb-2 header2-text text-center", children: "Religion" }), _jsx("select", { id: "religion", value: userData.religion, className: "input-style-survey", onChange: (event) => {
                                    updateUserData("religion", event.target.value);
                                }, children: religions.map((religion) => (_jsx("option", { value: religion.code, children: religion.name }, religion.code))) })] }), _jsxs("div", { className: "flex flex-col w-full items-center space-x-3 md:space-x-0", children: [_jsx("label", { htmlFor: "diet", className: "block mb-2 header2-text text-center", children: "Diet preferences" }), _jsx("select", { id: "diet", value: userData.diet, className: "input-style-survey", onChange: (event) => {
                                    updateUserData("diet", event.target.value);
                                }, children: diets.map((diet) => (_jsx("option", { value: diet.code, children: diet.name }, diet.code))) })] })] }), _jsxs("fieldset", { className: "flex flex-col items-center", children: [_jsx("h2", { className: "header2-text text-center align-bottom", children: "Do you have pets?" }), _jsxs("div", { className: "flex", children: [_jsxs("div", { className: "flex items-center m-4", children: [_jsx("input", { id: "pet-option1", type: "radio", name: "has-pets", value: "yes", className: "w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600", onChange: () => updateUserData("hasPets", true), checked: userData.hasPets }), _jsx("label", { htmlFor: "pet-option1", className: "block ms-2  text-sm font-medium header4-text", children: "Yes!" })] }), _jsxs("div", { className: "flex items-center m-4", children: [_jsx("input", { id: "pet-option2", type: "radio", name: "has-pets", value: "no", className: "w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600", onChange: () => updateUserData("hasPets", false), checked: !userData.hasPets }), _jsx("label", { htmlFor: "pet-option2", className: "block ms-2 text-sm font-medium header4-text dark:text-gray-300", children: "No" })] })] })] }), _jsxs("fieldset", { className: "flex flex-col items-center", children: [_jsx("h2", { className: "header2-text text-center", children: "Do you smoke?" }), _jsxs("div", { className: "flex", children: [_jsxs("div", { className: "flex items-center m-4", children: [_jsx("input", { id: "smoke-option1", type: "radio", name: "smokes", value: "1", onChange: () => updateUserData("smokes", true), checked: userData.smokes, className: "w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" }), _jsx("label", { htmlFor: "smoke-option1", className: "block ms-2 text-sm font-medium header4-text", children: "Yes" })] }), _jsxs("div", { className: "flex items-center m-4", children: [_jsx("input", { id: "smoke-option2", type: "radio", name: "smokes", value: "2", onChange: () => updateUserData("smokes", false), checked: !userData.smokes, className: "w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" }), _jsx("label", { htmlFor: "smoke-option2", className: "block ms-2 text-sm font-medium header4-text", children: "No" })] })] })] }), _jsx("div", { className: "flex justify-center", children: _jsxs("div", { className: "relative mb-6 w-3/4", children: [_jsx("label", { htmlFor: "", className: "block mb-2 header2-text text-center", children: "Rate your sociability from 1-10" }), _jsx("input", { id: "", type: "range", min: "1", max: "10", step: "1", className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700", onChange: (e) => {
                                updateUserData("sociability", +e.target.value);
                            } }), _jsx("span", { className: "text-md font-bold absolute start-0 -bottom-6", children: "1" }), _jsx("span", { className: "text-md font-bold absolute end-0 -bottom-6", children: "10" })] }) }), _jsx("div", { className: "flex justify-center", children: _jsxs("div", { className: "relative mb-6 w-3/4", children: [_jsx("label", { htmlFor: "", className: "block mb-2 header2-text text-center", children: "Rate your cleanliness from 1-10" }), _jsx("input", { id: "", type: "range", min: "1", max: "10", step: "1", className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700", onChange: (e) => {
                                updateUserData("cleanliness", +e.target.value);
                            } }), _jsx("span", { className: "text-md font-bold absolute start-0 -bottom-6", children: "1" }), _jsx("span", { className: "text-md font-bold absolute end-0 -bottom-6", children: "10" })] }) }), _jsx("div", { className: "flex flex-col items-center", children: _jsx(AddHobby, { onHobbyChange: handleHobbyChange }) })] }));
};
export default SurveyPersonal;
