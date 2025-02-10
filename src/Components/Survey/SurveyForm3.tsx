import React from 'react';

const SurveyForm3 = () => {
    return (
        <div className={"pt-12"}>
            <form className={"space-y-8"}>

                {/*This doesnt get affected by spacing*/}
                <div><h2 className={"header-text-big text-center"}>About You</h2>
                    <p className={"text-center font-bold"}>Please answer honestly</p></div>

                {/*Pets radio*/}
                <fieldset className={"flex items-center"}>
                    <h2 className={"header2-text text-center align-bottom"}>Do you have pets?</h2>
                    <div className={"flex"}>
                        <div className="flex items-center m-4">
                            <input id="pet-option1" type="radio" name="has-pets" value="yes"
                                   className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                   checked/>
                            <label htmlFor="pet-option1"
                                   className="block ms-2  text-sm font-medium header4-text">
                                Yes!
                            </label>
                        </div>

                        <div className="flex items-center m-4">
                            <input id="pet-option2" type="radio" name="has-pets" value="no"
                                   className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="pet-option2"
                                   className="block ms-2 text-sm font-medium header4-text dark:text-gray-300">
                                No
                            </label>
                        </div>
                    </div>
                </fieldset>

                {/*Smoke radio*/}
                <fieldset className={"flex items-center"}>
                    <h2 className={"header2-text text-center align-bottom"}>Do you smoke?</h2>
                    <div className={"flex"}>
                        <div className="flex items-center m-4">
                            <input id="smoke-option1" type="radio" name="smokes" value="yes"
                                   className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                   checked/>
                            <label htmlFor="smoke-option1"
                                   className="block ms-2  text-sm font-medium header4-text">
                                Yes
                            </label>
                        </div>
                        <div className="flex items-center m-4">
                            <input id="smoke-option2" type="radio" name="smokes" value="no"
                                   className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="smoke-option2"
                                   className="block ms-2 text-sm font-medium header4-text dark:text-gray-300">
                                Sometimes
                            </label>
                        </div>
                        <div className="flex items-center m-4">
                            <input id="smoke-option3" type="radio" name="smokes" value="no"
                                   className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="smoke-option3"
                                   className="block ms-2 text-sm font-medium header4-text dark:text-gray-300">
                                Never
                            </label>
                        </div>
                    </div>

                </fieldset>
                {/*Budget Slider*/}

                <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default range</label>
                <input id="default-range" type="range" value="50" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"></input>

            </form>
        </div>
    );
};

export default SurveyForm3;