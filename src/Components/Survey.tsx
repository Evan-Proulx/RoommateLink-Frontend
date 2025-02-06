import React from 'react';
import ShadowButton from "./Shadow-Button.tsx";

const Survey = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-1/2 xl:w-1/4">
                <h1 className={"header2-text text-center"}>We need to know a bit more about you before we can find
                    your dream roommate.</h1>
                <ShadowButton value={"Get Started"}/>

                <div className={"w-2/3 pt-24"}>
                    <form className={"space-y-7"}>

                        {/*City dropdown*/}
                        <label htmlFor="cities" className="block mb-2 header2-text text-center">Please
                            enter your city</label>
                        <select id="cities"
                                className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-full p-4">
                            {/*Temporary*/}
                            <option>Windsor</option>
                            <option>Toronto</option>
                        </select>


                        {/*Gender dropdown*/}
                        <label htmlFor="cities" className="block mb-2 header2-text text-center">Gender</label>
                        <select id="cities"
                                className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-full p-4">
                            {/*Temporary*/}
                            <option>Windsor</option>
                            <option>Toronto</option>
                        </select>


                        {/*Budget Slider*/}
                        <div className="relative mb-6">
                            <label htmlFor="labels-range-input"
                                   className={"block mb-2 header2-text text-center"}>Budget</label>
                            <input id="labels-range-input" type="range" value="1000" min="100" max="1500"
                                   className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
                            <span
                                className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">$100</span>
                            <span
                                className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$500</span>
                            <span
                                className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$1000</span>
                            <span
                                className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">$10000</span>
                        </div>


                        {/*Housing status*/}
                        <fieldset className={"pt-24 "}>
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
                    </form>


                </div>
            </div>
        </>
    );
};

export default Survey;