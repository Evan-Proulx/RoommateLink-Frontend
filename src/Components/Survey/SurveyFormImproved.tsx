import TimePicker from "./TimePicker.tsx";
import {languages} from "../../Languages.ts";
import React, {useEffect, useState} from "react";
import AddHobby from "./AddHobby.tsx";

//userdata is passed down from the parent survey component
const SurveyFormImproved = ({ userData, setUserData }) => {

    const diets = ["No preference", "Vegetarian", "Vegan", "Halal", "Kosher", "Pescatarian"];

    //Gets times from the component and sets them
    const handleTimeChange = (from: string, to: string) => {
        updateUserData("workingTimeFrom", from);
        updateUserData("workingTimeTo", to);
    };

    const handleHobbyChange = (newHobbies) => {
        updateUserData("hobbies", newHobbies);
    };


    //update the user data
    const updateUserData = (field, value) => {
        setUserData(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    return (
        <div>
            <form className={"space-y-14"}>
                <h2 className={"header-text-big text-center"}>About You</h2>

                <div>
                    {/*City dropdown*/}
                    <label htmlFor="cities" className="block mb-2 header2-text text-center">Please
                        enter your city</label>
                    <select id="cities"
                            className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-full p-4"
                            onChange={(event) => updateUserData("city", event.target.value)}>
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
                                   checked={userData.hasHousing}
                                   onChange={(event) => updateUserData("hasHousing",true)}
                            />
                            <label htmlFor="has-housing-true"
                                   className="block ms-2  text-sm font-medium header4-text">
                                Already have a place
                            </label>
                        </div>

                        <div className="flex items-center m-4">
                            <input id="has-housing-false" type="radio" name="countries" value="Germany"
                                   className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                   checked={!userData.hasHousing}
                                   onChange={(event) => updateUserData("hasHousing",false)}
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
                           className={"block mb-2 header2-text text-center"}>Budget: ${userData.budget}</label>
                    <input id="budget" type="range" min="100" max="10000" step="300" value={userData.budget}
                           className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                           onChange={(e) => {
                               updateUserData("budget",+e.target.value)}}/>
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
                                   updateUserData("profession",event.target.value)
                               }}/>
                    </div>

                    {/*School dropdown*/}
                    <div className={"flex flex-col w-full"}>
                        <label htmlFor="cities" className="block mb-2 header2-text text-center">Select
                            School</label>
                        <select id="cities"
                                className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-full p-4"
                                onChange={(event) => {
                                    updateUserData("school",event.target.value)
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
                                    updateUserData("gender",event.target.value)
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
                                    updateUserData("language",event.target.value)
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
                        <input type="input" id="religion" value={userData.religion}
                               className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block p-4"
                               onChange={(event) => {
                                   updateUserData("religion",event.target.value)
                               }}/>
                    </div>

                    {/*diet dropdown*/}
                    <div className={"flex flex-col w-full items-center space-x-3 md:space-x-0"}>
                        <label htmlFor="diet" className="block mb-2 header2-text text-center">Diet preferences</label>
                        <select id="diet" value={userData.diet}
                                className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-full p-4"
                                onChange={(event) => {
                                    updateUserData("diet",event.target.value)
                                }}>
                            {diets.map((diet) => (
                                <option key={diet} value={diet}>
                                    {diet}
                                </option>
                            ))}
                        </select>
                    </div>
                </section>

                {/*Pets radio*/}
                <fieldset className={"flex flex-col items-center"}>
                    <h2 className={"header2-text text-center align-bottom"}>Do you have pets?</h2>
                    <div className={"flex"}>
                        <div className="flex items-center m-4">
                            <input id="pet-option1" type="radio" name="has-pets" value="yes"
                                   className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                   onChange={() => updateUserData("hasPets",true)}
                                   checked={userData.hasPets}/>
                            <label htmlFor="pet-option1"
                                   className="block ms-2  text-sm font-medium header4-text">
                                Yes!
                            </label>
                        </div>

                        <div className="flex items-center m-4">
                            <input id="pet-option2" type="radio" name="has-pets" value="no"
                                   className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                   onChange={() => updateUserData("hasPets",false)}
                                   checked={!userData.hasPets}/>
                            <label htmlFor="pet-option2"
                                   className="block ms-2 text-sm font-medium header4-text dark:text-gray-300">
                                No
                            </label>
                        </div>
                    </div>
                </fieldset>

                {/*Smoke radio*/}
                <fieldset className="flex flex-col items-center">
                    <h2 className="header2-text text-center">Do you smoke?</h2>
                    <div className="flex">
                        <div className="flex items-center m-4">
                            <input
                                id="smoke-option1"
                                type="radio"
                                name="smokes"
                                value="1"
                                onChange={() => updateUserData("smokes",1)}
                                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                            />
                            <label htmlFor="smoke-option1" className="block ms-2 text-sm font-medium header4-text">
                                Yes
                            </label>
                        </div>
                        <div className="flex items-center m-4">
                            <input
                                id="smoke-option2"
                                type="radio"
                                name="smokes"
                                value="2"
                                onChange={() => updateUserData("smokes",2)}
                                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                            />
                            <label htmlFor="smoke-option2" className="block ms-2 text-sm font-medium header4-text">
                                Sometimes
                            </label>
                        </div>
                        <div className="flex items-center m-4">
                            <input
                                id="smoke-option3"
                                type="radio"
                                name="smokes"
                                value="3"
                                onChange={() => updateUserData("smokes",3)}
                                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                            />
                            <label htmlFor="smoke-option3" className="block ms-2 text-sm font-medium header4-text">
                                Never
                            </label>
                        </div>
                    </div>
                </fieldset>

                {/*Sociability Slider*/}
                <div className={"flex justify-center"}>
                    <div className="relative mb-6 w-3/4">
                        <label htmlFor="" className="block mb-2 header2-text text-center">Rate your sociability from
                            1-10</label>
                        <input id="" type="range" min="1" max="10" step="1"
                               className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                               onChange={(e) => {
                                   updateUserData("sociability",+e.target.value)}}/>
                        <span className="text-md font-bold absolute start-0 -bottom-6">1</span>
                        <span className="text-md font-bold absolute end-0 -bottom-6">10</span>
                    </div>
                </div>

                <div className={"flex justify-center"}>
                    <div className="relative mb-6 w-3/4">
                        <label htmlFor="" className="block mb-2 header2-text text-center">Rate your cleanliness from
                            1-10</label>
                        <input id="" type="range" min="1" max="10" step="1"
                               className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                               onChange={(e) => {
                                   updateUserData("cleanliness",+e.target.value)}}/>
                        <span className="text-md font-bold absolute start-0 -bottom-6">1</span>
                        <span className="text-md font-bold absolute end-0 -bottom-6">10</span>
                    </div>
                </div>

                <div className={"flex flex-col items-center"}>
                    {/*<p>{...hobbies}</p>*/}
                    <AddHobby onHobbyChange={handleHobbyChange}/>
                </div>
            </form>
        </div>
    );
};

export default SurveyFormImproved