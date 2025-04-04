import React, {useEffect, useState} from 'react';
import {DiscoveryData, discoverySearch} from "../API/Discovery.ts";
import {LocationSearching} from "@mui/icons-material";
import MapPopup from "../Survey/SurveyComponents/Survey-Map-Popup.tsx";
import {getLocation} from "../API/Location.ts";
import {diets, religions} from "../../data.ts";
import CollegeInput from "../Survey/SurveyComponents/CollegeInput.tsx";

interface DiscoveryModalProps{
    onSearch: (data: DiscoveryData) => void;
    parentData: DiscoveryData;
    closeModal: () => void;
}
const DiscoveryModal = ({onSearch, parentData,  closeModal}: DiscoveryModalProps) => {
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [locationName, setLocationName] = useState("")
    const [formData, setFormData] = useState(parentData); // Initialize with received formData

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleLocationChange = (latitude: number, longitude: number) => {
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
        }))
    }
    const getLocationName = async (latitude: number, longitude: number) => {
        const data = await getLocation(latitude, longitude);
        if (data) {
            //Set location name to input
            setLocationName(`${data.town}, ${data.province}`);
            console.log(locationName)
        }
    }

    useEffect(() => {
        console.log("FORM", formData);
    }, [formData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);

        // Send formdata to parent and run search query
        onSearch(formData)
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Location</label>
                        <div className={"flex"}>
                            <input id="location" value={locationName} contentEditable={false}
                                                       className="mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"/>

                            <button type="button" onClick={() => setIsMapOpen(true)}>
                                <button type="button"
                                        className={" p-1 rounded transition-all duration-200 hover:bg-text"}
                                        onClick={() => setIsMapOpen(true)}>
                                    <LocationSearching sx={{fontSize: 18, color: "black"}}/>
                                </button>
                            </button>
                        </div>

                        {/* Map Popup */}
                        <MapPopup
                            isOpen={isMapOpen}
                            onClose={() => setIsMapOpen(false)}
                            onLocationChange={handleLocationChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Budget</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="text-gray-500 sm:text-sm">$</span>
                            </div>
                            <input
                                type="number"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                className="pl-7 block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="0.00"
                                min={100} max={10000} step={100}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Gender</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Religion</label>
                        <select
                            name="religion"
                            value={formData.religion}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        >
                            {religions.map((religion => (
                                <option key={religion.code} value={religion.code}>{religion.name}</option>
                            )))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Diet</label>
                        <select
                            name="diet"
                            value={formData.diet}
                            onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        >
                            {diets.map((diet => (
                                <option key={diet.code} value={diet.code}>{diet.name}</option>
                            )))}
                        </select>
                    </div>

                    <div>
                        <label className=" pt-1 block text-sm font-medium text-gray-700">School</label>
                        <CollegeInput onSchoolChange={handleSchoolChange}
                            customStyles={{
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
                            }}
                        /></div>

                    <div className="space-y-2">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="pet_free"
                                name="pet_free"
                                checked={formData.pet_free}
                                onChange={handleChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="pet_free" className="ml-2 block text-sm text-gray-700">
                                Pet Free
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="smokes"
                                name="smokes"
                                checked={formData.smokes}
                                onChange={handleChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="smokes" className="ml-2 block text-sm text-gray-700">
                                Smoke Free
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="verified"
                                name="verified"
                                checked={formData.verified}
                                onChange={handleChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="verified" className="ml-2 block text-sm text-gray-700">
                                Verified
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="has_housing"
                                name="has_housing"
                                checked={formData.has_housing}
                                onChange={handleChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="has_housing" className="ml-2 block text-sm text-gray-700">
                                Has Housing
                            </label>
                        </div>
                    </div>

                    <div className="flex items-end pt-2 ">
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default DiscoveryModal;