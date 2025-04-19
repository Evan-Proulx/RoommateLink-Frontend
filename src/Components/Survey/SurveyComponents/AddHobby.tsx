import React, {useState} from 'react';
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import {hobbies} from "../../../data"
import {Add, Close} from "@mui/icons-material";

const AddHobby = ({onHobbyChange}) => {
    const [selectedHobbies, setSelectedHobbies] = useState([])
    const [inputValue, setInputValue] = useState('')

    //Adds a new hobby to the hobby array
    const handleNewHobby = () => {
        if (selectedHobbies.length < 5 && inputValue.trim() !== '') {
            //Get hobby from the hobby array from the code
            const selectedHobby = hobbies.find(hobby => hobby.code === inputValue);

            if (selectedHobby) {
                // Set hobby with code and name
                const updatedSelectedHobbies = [...selectedHobbies, {
                    code: selectedHobby.code,
                    name: selectedHobby.name
                }];
                setSelectedHobbies(updatedSelectedHobbies);
                // Only pass hobby codes to the parent
                onHobbyChange(updatedSelectedHobbies.map(hobby => hobby.code));
                setInputValue('');
            }
        }
    };

    // Creates a new array with all the indexes in selectedHobbies except the passed index
    const handleDeleteHobby = (index) => {
        const updatedSelectedHobbies = selectedHobbies.filter((_, i) => i !== index);
        setSelectedHobbies(updatedSelectedHobbies);
        // Only pass hobby codes to the parent
        onHobbyChange(updatedSelectedHobbies.map(hobby => hobby.code));
    };

    return (
        <div>
            <div className={"flex flex-col items-center"}>
                {/*Hobby input*/}
                <label htmlFor="profession" className="block mb-2 header2-text text-center">Add some of your
                    Hobbies/interests</label>
                <div className={"flex space-x-3"}>
                    <select
                        id="hobby-select"
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                        className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-2/3 p-4"
                    >
                        <option value="">Select a hobby</option>
                        {hobbies.map((hobby) => (
                            <option key={hobby.code} value={hobby.code}>
                                {hobby.name}
                            </option>
                        ))}
                    </select>
                    <button type="button" onClick={handleNewHobby} className={"cursor-pointer"}>
                        <Add sx={{fontSize: 42, color: "#FF3033"}}/>
                    </button>
                </div>

                {/*Hobby list*/}
                <ul className={" w-3/4 h-20 p-4 flex flex-wrap gap-2 justify-center"}>
                    {selectedHobbies.map((hobby, index) => (
                        <li key={index}>
                        <span key={index} id="badge-dismiss-default"
                              className="inline-flex items-center px-2 py-1 me-2 text-sm border-2 font-medium text-gray-700 bg-white rounded-sm">
                        {hobby.name}
                            {/*Hobby delete button*/}
                            <button type="button" onClick={() => handleDeleteHobby(index)}
                                    className="inline-flex items-center p-1 ms-2 text-sm text-text bg-transparent rounded-xs hover:bg-gray-300 hover:text-gray-700"
                                    data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                                <Close sx={{fontSize: 16}}/>
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