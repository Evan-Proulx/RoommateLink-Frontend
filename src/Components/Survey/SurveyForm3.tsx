import AddHobby from "./AddHobby.tsx";
import {useState} from "react";

const SurveyForm3 = () => {
    const [hasPets, setHasPets] = useState(false);
    const [smokes, setSmokes] = useState(1);
    const [sociability, setSociability] = useState(5);
    const [cleanliness, setCleanliness] = useState(5);
    const [hobbies, setHobbies] = useState([]);

    const handleHobbyChange = (newHobbies) => {
        setHobbies(newHobbies);
    };
    return (
        <div className={"py-12"}>
            <form className={"space-y-8"}>

                {/*This doesn't get affected by spacing*/}
                <div><h2 className={"header-text-big text-center"}>About You</h2>
                    <p className={"text-center font-bold"}>Please answer honestly</p></div>

                {/*Pets radio*/}
                <fieldset className={"flex flex-col items-center"}>
                    <h2 className={"header2-text text-center align-bottom"}>Do you have pets?</h2>
                    <div className={"flex"}>
                        <div className="flex items-center m-4">
                            <input id="pet-option1" type="radio" name="has-pets" value="yes"
                                   className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                   onChange={() => setHasPets(true)}
                                   checked={hasPets}/>
                            <label htmlFor="pet-option1"
                                   className="block ms-2  text-sm font-medium header4-text">
                                Yes!
                            </label>
                        </div>

                        <div className="flex items-center m-4">
                            <input id="pet-option2" type="radio" name="has-pets" value="no"
                                   className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                   onChange={() => setHasPets(false)}
                                   checked={!hasPets}/>
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
                                onChange={() => setSmokes(1)}
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
                                onChange={() => setSmokes(2)}
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
                                onChange={() => setSmokes(3)}
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
                                   setSociability(+e.target.value)}}/>
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
                                   setCleanliness(+e.target.value)}}/>
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

export default SurveyForm3;