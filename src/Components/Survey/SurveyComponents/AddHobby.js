import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { hobbies } from "../../../data";
import { Add, Close } from "@mui/icons-material";
const AddHobby = ({ onHobbyChange }) => {
    const [selectedHobbies, setSelectedHobbies] = useState([]);
    const [inputValue, setInputValue] = useState('');
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
    return (_jsx("div", { children: _jsxs("div", { className: "flex flex-col items-center", children: [_jsx("label", { htmlFor: "profession", className: "block mb-2 header2-text text-center", children: "Add some of your Hobbies/interests" }), _jsxs("div", { className: "flex space-x-3", children: [_jsxs("select", { id: "hobby-select", value: inputValue, onChange: (event) => setInputValue(event.target.value), className: "bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-2/3 p-4", children: [_jsx("option", { value: "", children: "Select a hobby" }), hobbies.map((hobby) => (_jsx("option", { value: hobby.code, children: hobby.name }, hobby.code)))] }), _jsx("button", { type: "button", onClick: handleNewHobby, className: "cursor-pointer", children: _jsx(Add, { sx: { fontSize: 42, color: "#FF4000" } }) })] }), _jsx("ul", { className: " w-3/4 h-20 p-4 flex flex-wrap gap-2 justify-center", children: selectedHobbies.map((hobby, index) => (_jsx("li", { children: _jsxs("span", { id: "badge-dismiss-default", className: "inline-flex items-center px-2 py-1 me-2 text-sm border-2 font-medium text-gray-700 bg-white rounded-sm", children: [hobby.name, _jsxs("button", { type: "button", onClick: () => handleDeleteHobby(index), className: "inline-flex items-center p-1 ms-2 text-sm text-text bg-transparent rounded-xs hover:bg-gray-300 hover:text-gray-700", "data-dismiss-target": "#badge-dismiss-default", "aria-label": "Remove", children: [_jsx(Close, { sx: { fontSize: 16 } }), _jsx("span", { className: "sr-only", children: "Remove badge" })] })] }, index) }, index))) })] }) }));
};
export default AddHobby;
