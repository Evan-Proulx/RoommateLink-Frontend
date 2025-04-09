import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../../../App.css';
import { useState } from 'react';
const TimePicker = ({ onTimeChange }) => {
    // These values are set when the user selects a time
    // HTML uses 24hr time
    const [timeFrom, setTimeFrom] = useState("09:00");
    const [timeTo, setTimeTo] = useState("17:00");
    //Send input to parent component
    const handleTimeFromChange = (e) => {
        const newTimeFrom = e.target.value;
        setTimeFrom(newTimeFrom);
        onTimeChange(newTimeFrom, timeTo);
    };
    //Send input to parent component
    const handleTimeToChange = (e) => {
        const newTimeTo = e.target.value;
        setTimeTo(newTimeTo);
        onTimeChange(timeFrom, newTimeTo);
    };
    return (_jsxs("div", { className: "flex justify-center", children: [_jsxs("form", { className: "mx-4", children: [_jsx("label", { htmlFor: "time", className: "block mb-2 text-sm font-medium ", children: "From" }), _jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none", children: _jsx("svg", { className: "w-4 h-4 text-gray-500 dark:text-gray-400", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { fillRule: "evenodd", d: "M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z", clipRule: "evenodd" }) }) }), _jsx("input", { type: "time", id: "time", className: "bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", min: "09:00", max: "18:00", value: timeFrom, onChange: handleTimeFromChange })] })] }), _jsxs("form", { className: "mx-4", children: [_jsx("label", { htmlFor: "time", className: "block mb-2 text-sm font-medium ", children: "To" }), _jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none", children: _jsx("svg", { className: "w-4 h-4 text-gray-500 dark:text-gray-400", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { fillRule: "evenodd", d: "M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z", clipRule: "evenodd" }) }) }), _jsx("input", { type: "time", id: "time", className: "bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", min: "09:00", max: "18:00", value: timeTo, onChange: handleTimeToChange })] })] })] }));
};
export default TimePicker;
