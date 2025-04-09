import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { LocationSearching } from "@mui/icons-material";
import MapPopup from "../Survey/SurveyComponents/Survey-Map-Popup";
import { getLocation } from "../API/Location";
import { diets, religions } from "../../data";
import CollegeInput from "../Survey/SurveyComponents/CollegeInput";
const DiscoveryModal = ({ onSearch, parentData, closeModal }) => {
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [locationName, setLocationName] = useState("");
    const [formData, setFormData] = useState(parentData); // Initialize with received formData
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    const handleLocationChange = (latitude, longitude) => {
        setFormData(prev => ({
            ...prev,
            latitude: latitude,
            longitude: longitude
        }));
        getLocationName(latitude, longitude);
    };
    const handleSchoolChange = (schoolValue) => {
        setFormData(prevState => ({
            ...prevState,
            school: schoolValue
        }));
    };
    const getLocationName = async (latitude, longitude) => {
        const data = await getLocation(latitude, longitude);
        if (data) {
            //Set location name to input
            setLocationName(`${data.town}, ${data.province}`);
            console.log(locationName);
        }
    };
    useEffect(() => {
        console.log("FORM", formData);
    }, [formData]);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // Send formdata to parent and run search query
        onSearch(formData);
        // Close modal after form submission
        closeModal();
    };
    return (_jsxs("div", { className: "max-w-md mx-auto p-6 bg-white rounded-lg shadow-md", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: "Filters" }), _jsx("form", { onSubmit: handleSubmit, className: "space-y-4", children: _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Location" }), _jsxs("div", { className: "flex", children: [_jsx("input", { id: "location", value: locationName, contentEditable: false, className: "mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500" }), _jsx("button", { type: "button", onClick: () => setIsMapOpen(true), children: _jsx("button", { type: "button", className: " p-1 rounded transition-all duration-200 hover:bg-text", onClick: () => setIsMapOpen(true), children: _jsx(LocationSearching, { sx: { fontSize: 18, color: "black" } }) }) })] }), _jsx(MapPopup, { isOpen: isMapOpen, onClose: () => setIsMapOpen(false), onLocationChange: handleLocationChange })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Budget" }), _jsxs("div", { className: "mt-1 relative rounded-md shadow-sm", children: [_jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: _jsx("span", { className: "text-gray-500 sm:text-sm", children: "$" }) }), _jsx("input", { type: "number", name: "budget", value: formData.budget, onChange: handleChange, className: "pl-7 block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500", placeholder: "0.00", min: 100, max: 10000, step: 100 })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Gender" }), _jsxs("select", { name: "gender", value: formData.gender, onChange: handleChange, className: "mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500", children: [_jsx("option", { value: "", children: "Select Gender" }), _jsx("option", { value: "male", children: "Male" }), _jsx("option", { value: "female", children: "Female" }), _jsx("option", { value: "other", children: "Other" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Religion" }), _jsx("select", { name: "religion", value: formData.religion, onChange: handleChange, className: "mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500", children: religions.map((religion => (_jsx("option", { value: religion.code, children: religion.name }, religion.code)))) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Diet" }), _jsx("select", { name: "diet", value: formData.diet, onChange: handleChange, className: "mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500", children: diets.map((diet => (_jsx("option", { value: diet.code, children: diet.name }, diet.code)))) })] }), _jsxs("div", { children: [_jsx("label", { className: " pt-1 block text-sm font-medium text-gray-700", children: "School" }), _jsx(CollegeInput, { onSchoolChange: handleSchoolChange, customStyles: {
                                        control: (provided, state) => ({
                                            ...provided,
                                            backgroundColor: 'white',
                                            borderColor: state.isFocused ? '#3b82f6' : '#d1d5db', // focus:border-blue-500, default:border-gray-300
                                            borderWidth: '1px',
                                            boxShadow: state.isFocused ? '0 0 0 3px rgba(59, 130, 246, 0.5)' : '0px', // focus:ring-blue-500
                                            borderRadius: '0.375rem', // rounded-md
                                            width: '100%', // w-full
                                            transition: 'border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out', // Smooth focus transition
                                        }),
                                    } })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("input", { type: "checkbox", id: "pet_free", name: "pet_free", checked: formData.pet_free, onChange: handleChange, className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" }), _jsx("label", { htmlFor: "pet_free", className: "ml-2 block text-sm text-gray-700", children: "Pet Free" })] }), _jsxs("div", { className: "flex items-center", children: [_jsx("input", { type: "checkbox", id: "smokes", name: "smokes", checked: formData.smokes, onChange: handleChange, className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" }), _jsx("label", { htmlFor: "smokes", className: "ml-2 block text-sm text-gray-700", children: "Smoke Free" })] }), _jsxs("div", { className: "flex items-center", children: [_jsx("input", { type: "checkbox", id: "verified", name: "verified", checked: formData.verified, onChange: handleChange, className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" }), _jsx("label", { htmlFor: "verified", className: "ml-2 block text-sm text-gray-700", children: "Verified" })] }), _jsxs("div", { className: "flex items-center", children: [_jsx("input", { type: "checkbox", id: "has_housing", name: "has_housing", checked: formData.has_housing, onChange: handleChange, className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" }), _jsx("label", { htmlFor: "has_housing", className: "ml-2 block text-sm text-gray-700", children: "Has Housing" })] })] }), _jsx("div", { className: "flex items-end pt-2 ", children: _jsx("button", { type: "submit", className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500", children: "Submit" }) })] }) })] }));
};
export default DiscoveryModal;
