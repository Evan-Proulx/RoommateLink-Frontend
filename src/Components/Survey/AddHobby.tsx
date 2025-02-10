import React, {useState} from 'react';
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

const AddHobby = () => {
    const [hobbies, setHobbies] = useState([])
    const [inputValue, setInputValue] = useState('')

    //Adds a new hobby to the hobby array
    const handleNewHobby = () => {
        if (hobbies.length <= 5) {
            if (inputValue.trim() !== '') {
                setHobbies([...hobbies, inputValue]);
                setInputValue('');
            }
        }
    }

    // Creates a new array with all the indexes in hobbies except the passed index
    const handleDeleteHobby = (index) => {
        setHobbies(hobbies.filter((_, i) => i !== index));
        console.log(hobbies)
    }

    return (
        <div>
            <div className={"flex flex-col items-center"}>
                {/*Hobby input*/}
                <label htmlFor="profession" className="block mb-2 header2-text text-center">Add some of your
                    hobbies</label>
                <div className={"flex space-x-3"}>
                    <input type="input" id="profession" value={inputValue}
                           onChange={(event) => setInputValue(event.target.value)}
                           className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-2/3 p-4"/>
                    <button type="button" onClick={handleNewHobby} className={"cursor-pointer"}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#FF4000"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                    </button>
                </div>
                <ul className={" w-3/4 h-20 p-4 flex flex-wrap gap-2 justify-center"}>
                    {hobbies.map((hobby, index) => (
                        <li>
                        <span key={index} id="badge-dismiss-default"
                              className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-blue-800 bg-blue-100 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                        {hobby}
                            {/*Hobby delete button*/}
                            <button type="button" onClick={() => handleDeleteHobby(index)}
                                    className="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-xs hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
                                    data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                                <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                        <span className="sr-only">Remove badge</span>
                        </button>
                        </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AddHobby;