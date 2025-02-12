import AddHobby from "./AddHobby.tsx";

const SurveyForm3 = () => {
    return (
        <div className={"py-12"}>
            <form className={"space-y-8"}>

                {/*This doesn't get affected by spacing*/}
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

                {/*Sociability Slider*/}
                <div className={"flex justify-center"}>
                    <div className="relative mb-6 w-3/4">
                        <label htmlFor="" className="block mb-2 header2-text text-center">Rate your sociability from
                            1-10</label>
                        <input id="" type="range" min="1" max="10" step="1"
                               className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
                        <span className="text-md font-bold absolute start-0 -bottom-6">1</span>
                        <span className="text-md font-bold absolute end-0 -bottom-6">10</span>
                    </div>
                </div>

                <div className={"flex justify-center"}>
                    <div className="relative mb-6 w-3/4">
                        <label htmlFor="" className="block mb-2 header2-text text-center">Rate your cleanliness from 1-10</label>
                        <input id="" type="range" min="1" max="10" step="1"
                               className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
                        <span className="text-md font-bold absolute start-0 -bottom-6">1</span>
                        <span className="text-md font-bold absolute end-0 -bottom-6">10</span>
                    </div>
                </div>

                <div className={"flex flex-col items-center"}>
                    <AddHobby/>
                </div>
            </form>
        </div>
    );
};

export default SurveyForm3;