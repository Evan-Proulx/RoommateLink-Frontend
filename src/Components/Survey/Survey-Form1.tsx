import TimePicker from "./TimePicker.tsx";
import {languages} from "../../Languages.ts";
import React, {useState} from "react";

const SurveyForm1 = () => {

    ////////////////////////////////////////////////////////////////
    const [city, setCity] = useState("");
    const [hasHousing, setHasHousing] = useState(false);
    const [budget, setBudget] = useState(1200);
    const [school, setSchool] = useState("");
    const [profession, setProfession] = useState("");
    const [workingTimeFrom, setWorkingTimeFrom] = useState("");
    const [workingTimeTo, setWorkingTimeTo] = useState("");
    const [gender, setGender] = useState("");
    const [language, setLanguage] = useState("");
    const [religion, setReligion] = useState("");
    const [diet, setDiet] = useState("");
    ////////////////////////////////////////////////////////////////

    const diets = ["No preference", "Vegetarian", "Vegan", "Halal", "Kosher", "Pescatarian"];

    //Gets times from the component and sets them
    const handleTimeChange = (from: string, to: string) => {
        setWorkingTimeFrom(from);
        setWorkingTimeTo(to);
    };
    const getData = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log({city, hasHousing, budget, school, profession, workingTimeFrom, workingTimeTo, gender, language, religion, diet})
    }
    return (
        <div className={"pt-24"}>
            <form className={"space-y-14"}>
                <h2 className={"header-text-big text-center"}>About You</h2>

                <div>
                    {/*City dropdown*/}
                    <label htmlFor="cities" className="block mb-2 header2-text text-center">Please
                        enter your city</label>
                    <select id="cities"
                            className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-full p-4"
                            onChange={(event) => setCity(event.target.value)}>
                        {/*Temporary*/}
                        <option>Windsor</option>
                        <option>Toronto</option>
                    </select>
                </div>

                {/*Housing status*/}
                <fieldset className={""}>
                    <h2 className={"header2-text text-center"}>Current housing status</h2>
                    <div className={"flex"}>

                        <div className="flex items-center m-4">
                            <input id="has-housing-true" type="radio" name="countries" value="USA"
                                   className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                   checked={hasHousing}
                                   onChange={(event) => setHasHousing(true)}
                            />
                            <label htmlFor="has-housing-true"
                                   className="block ms-2  text-sm font-medium header4-text">
                                Already have a place
                            </label>
                        </div>

                        <div className="flex items-center m-4">
                            <input id="has-housing-false" type="radio" name="countries" value="Germany"
                                   className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                   checked={!hasHousing}
                                   onChange={(event) => setHasHousing(false)}
                            />
                            <label htmlFor="has-housing-false"
                                   className="block ms-2 text-sm font-medium header4-text dark:text-gray-300">
                                Looking for housing
                            </label>
                        </div>

                    </div>
                </fieldset>

                {/*Budget Slider*/}
                <div className="relative mb-6 ">
                    <label htmlFor="budget"
                           className={"block mb-2 header2-text text-center"}>Budget: ${budget}</label>
                    <input id="budget" type="range" min="100" max="10000" step="300" value={budget}
                           className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                           onChange={(e) => {
                               setBudget(+e.target.value)}}/>
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">$100</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$500</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$1000</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">$10000</span>
                </div>

                <section className={"flex justify-center items-end"}>
                    {/*Profession input*/}
                    <div className={"flex flex-col items-center w-full"}>
                        <label htmlFor="Profession" className="block mb-2 header2-text text-center">Profession</label>
                        <input type="input" id="profession"
                               className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block p-4"
                               onChange={(event) => {
                                   setProfession(event.target.value)
                               }}/>
                    </div>

                    {/*School dropdown*/}
                    <div className={"flex flex-col w-full"}>
                        <label htmlFor="cities" className="block mb-2 header2-text text-center">Select
                            School</label>
                        <select id="cities"
                                className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-full p-4"
                                onChange={(event) => {
                                    setSchool(event.target.value)
                                }}>
                            <option>St.Clair College</option>
                            <option>University Of Windsor</option>
                        </select>
                    </div>
                </section>

                {/*Time Picker*/}
                <div>
                    <h2 className={"block header2-text text-center"}>Select Working Times</h2>
                    <TimePicker onTimeChange={handleTimeChange}/>
                </div>

                {/*Gender and language*/}
                <section className={"flex justify-center items-end space-x-12"}>
                    <div className={"flex flex-col w-fit"}>
                        {/*gender dropdown*/}
                        <label htmlFor="gender" className="block mb-2 header2-text text-center">Gender</label>
                        <select id="gender"
                                className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-full p-4"
                                onChange={(event) => {
                                    setGender(event.target.value)
                                }}
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
                                className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-full p-4"
                                onChange={(event) => {
                                    setLanguage(event.target.value)
                                }}>
                            {languages.map((lang) => (
                                <option key={lang.code} value={lang.code}>
                                    {lang.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </section>

                {/*Religion and diet*/}
                <section className={"flex justify-center items-end"}>
                    {/*religion input*/}
                    <div className={"flex flex-col w-full items-center"}>
                        <label htmlFor="religion" className="block header2-text text-center">Religion</label>
                        <label htmlFor="religion" className="text-end">*if applicable</label>
                        <input type="input" id="religion" value={religion}
                               className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block p-4"
                               onChange={(event) => {
                                   setReligion(event.target.value)
                               }}/>
                    </div>

                    {/*diet dropdown*/}
                    <div className={"flex flex-col w-full items-center space-x-3 md:space-x-0"}>
                        <label htmlFor="diet" className="block mb-2 header2-text text-center">Diet preferences</label>
                        <select id="diet" value={diet}
                                className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-full p-4"
                                onChange={(event) => {
                                    setDiet(event.target.value)
                                }}>
                            {diets.map((diet) => (
                                <option key={diet} value={diet}>
                                    {diet}
                                </option>
                            ))}
                        </select>
                    </div>
                </section>

                <button onClick={getData} type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SurveyForm1;