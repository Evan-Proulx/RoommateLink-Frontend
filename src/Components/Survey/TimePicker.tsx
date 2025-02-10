import React, {useState} from 'react';

const TimePicker = () => {
    // These values are set when the user selects a time
    // HTML uses 24hr time
    const [timeFrom, setTimeFrom] = useState("09:00");
    const [timeTo, setTimeTo] = useState("17:00");

    return (
        <div className={"flex justify-center"}>
            {/*Input From*/}
            <form className="mx-4">
                <label htmlFor="time" className="block mb-2 text-sm font-medium ">From</label>
                <div className="relative">
                    <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd"
                                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                  clipRule="evenodd"/>
                        </svg>
                    </div>
                    <input type="time" id="time"
                           className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           min="09:00" max="18:00"
                           value={timeFrom} //displays the set time
                           onChange={(e) => setTimeFrom(e.target.value)} //updates new selected time
                    />
                </div>
            </form>

            {/*Input To*/}
            <form className="mx-4">
                <label htmlFor="time" className="block mb-2 text-sm font-medium ">To</label>
                <div className="relative">
                    <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd"
                                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                  clipRule="evenodd"/>
                        </svg>
                    </div>
                    <input type="time" id="time"
                           className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           min="09:00" max="18:00" value={timeTo} //displays the set time
                           onChange={(e) => setTimeTo(e.target.value)} //updates new selected time
                    />
                </div>
            </form>
        </div>
    );
};

export default TimePicker;