import React, {useState} from 'react';
import ShadowButton from "../Shadow-Button.tsx";
import ButtonNav from "./Button-Nav.tsx";
import TimePicker from "./TimePicker.tsx";
import MapPopup from "./Survey-Map-Popup.tsx";

const SurveyForm1 = () => {
    const languages = [
        {code: "en", name: "English"},
        {code: "es", name: "Spanish"},
        {code: "fr", name: "French"},
        {code: "de", name: "German"},
        {code: "zh", name: "Chinese"},
        {code: "hi", name: "Hindi"},
        {code: "ar", name: "Arabic"},
        {code: "pt", name: "Portuguese"},
        {code: "ja", name: "Japanese"},
        {code: "ko", name: "Korean"},
        {code: "ru", name: "Russian"},
        {code: "it", name: "Italian"},
        {code: "tr", name: "Turkish"},
        {code: "nl", name: "Dutch"},
        {code: "sv", name: "Swedish"},
        {code: "fi", name: "Finnish"},
        {code: "da", name: "Danish"},
        {code: "no", name: "Norwegian"},
        {code: "pl", name: "Polish"},
        {code: "cs", name: "Czech"},
        {code: "hu", name: "Hungarian"},
        {code: "id", name: "Indonesian"},
        {code: "th", name: "Thai"},
    ];

    const diets = ["No preference", "Vegetarian", "Vegan", "Halal", "Kosher", "Pescatarian"];

    const [isMapOpen, setIsMapOpen] = useState(false);


    return (
        <div className={"pt-24"}>
            <form className={"space-y-18"}>
                <h2 className={"header-text-big text-center"}>About You</h2>

                {/*City dropdown*/}
                <label htmlFor="cities" className="block mb-2 header2-text text-center">Please
                    enter your city</label>

                <div className="flex items-center space-x-2">
                    <select id="cities" className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg p-4 w-[400px]">
                        <option>Windsor</option>
                        <option>Toronto</option>
                    </select>

                    <button type="button" onClick={() => setIsMapOpen(true)}>
                        <svg
                            className="w-10 h-10 text-gray-800 dark:text-red-500 transition-all duration-200 hover:w-12 hover:h-12 hover:text-blue-500"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    </button>

                    {/* Map Popup */}
                    <MapPopup
                        isOpen={isMapOpen}
                        onClose={() => setIsMapOpen(false)}
                    />
                </div>


                {/*Housing status*/}
                <fieldset className={""}>
                    <h2 className={"header2-text text-center"}>Current housing status</h2>
                    <div className={"flex"}>
                        <div className="flex items-center m-4">
                            <input id="country-option-1" type="radio" name="countries" value="USA"
                                   className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                   checked/>
                            <label htmlFor="country-option-1"
                                   className="block ms-2  text-sm font-medium header4-text">
                                Already have a place
                            </label>
                        </div>

                        <div className="flex items-center m-4">
                            <input id="country-option-2" type="radio" name="countries" value="Germany"
                                   className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="country-option-2"
                                   className="block ms-2 text-sm font-medium header4-text dark:text-gray-300">
                                Looking for housing
                            </label>
                        </div>
                    </div>
                </fieldset>

                {/*Budget Slider*/}
                <div className="relative mb-6 ">
                    <label htmlFor="labels-range-input"
                           className={"block mb-2 header2-text text-center"}>Budget</label>
                    <input id="labels-range-input" type="range" value="1000" min="100" max="1500"
                           className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">$100</span>
                    <span
                        className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$500</span>
                    <span
                        className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$1000</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">$10000</span>
                </div>

                <div className={"flex space-x-12 pt-20"}>
                    <div className={"flex flex-col"}>
                        {/*Education dropdown*/}
                        <label htmlFor="education" className="block mb-2 header2-text text-center">Education
                            Status*</label>
                        <select id="education"
                                className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-full p-4"
                                required>

                            <option>Enrolled College/University</option>
                            <option>Not In School</option>
                        </select>
                    </div>

                    {/*School dropdown*/}
                    <div className={"flex flex-col"}>
                        <label htmlFor="cities" className="block mb-2 header2-text text-center">Select
                            School</label>
                        <select id="cities"
                                className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-full p-4">
                            <option>St.Clair College</option>
                            <option>University Of Windsor</option>
                        </select>
                    </div>
                </div>

                {/*Profession input*/}
                <div className={"flex flex-col items-center"}>
                    <label htmlFor="Profession" className="block mb-2 header2-text text-center">Profession</label>
                    <input type="input" id="profession"
                           className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-1/2 p-4"/>
                </div>

                {/*Time Picker*/}
                <h2 className={"block mb-2 header2-text text-center"}>Select Working Times</h2>
                <TimePicker/>

                {/*Gender and language*/}
                <div className={"flex justify-center items-end space-x-12"}>
                    <div className={"flex flex-col w-fit"}>
                        {/*gender dropdown*/}
                        <label htmlFor="gender" className="block mb-2 header2-text text-center">Gender</label>
                        <select id="gender"
                                className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-full p-4"
                                required>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Non-binary</option>
                            <option>Other</option>
                        </select>
                    </div>

                    {/*language dropdown*/}
                    <div className={"flex flex-col"}>
                        <label htmlFor="language" className="block mb-2 header2-text text-center">Select
                            language</label>
                        <select id="language"
                                className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-full p-4">
                            {languages.map((lang) => (
                                <option key={lang.code} value={lang.code}>
                                    {lang.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/*Religion and diet*/}
                <div className={"flex justify-center items-end"}>
                    {/*religion input*/}
                    <div className={"flex flex-col w-full items-center"}>
                        <label htmlFor="religion" className="block header2-text text-center">Religion</label>
                        <label htmlFor="religion" className="text-end">*if applicable</label>
                        <input type="input" id="religion"
                               className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block p-4"/>
                    </div>

                    {/*diet dropdown*/}
                    <div className={"flex flex-col w-full items-center space-x-12"}>
                        <label htmlFor="diet" className="block mb-2 header2-text text-center">Diet preferences</label>
                        <select id="diet"
                                className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-full p-4">
                            {diets.map((diet) => (
                                <option key={diet} value={diet}>
                                    {diet}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default SurveyForm1;