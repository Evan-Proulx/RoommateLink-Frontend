import React, {useState} from 'react';
const SurveyStepper = ({ setActiveComponent, activeComponent }) => {

    const steps = [
        { name: "intro", label: "Intro" },
        { name: "form1", label: "About You" },
        { name: "form2", label: "More About You" },
        { name: "form3", label: "Profile" },
        { name: "form4", label: "About Your Roommate" },
    ];

    return (
        <div>
            <ol className="flex items-center justify-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 rounded-lg sm:text-base sm:p-4 sm:space-x-4 rtl:space-x-reverse">

                {/*Loop through steps. Set active step to blue style*/}
                {/*OnClick sends component to the survey component*/}
                {steps.map((step,index) => (
                    <li
                        key={step.name}
                        onClick={() => setActiveComponent(step.name)}
                        className={`flex items-center cursor-pointer ${
                            activeComponent === step.name ? "text-blue-600 font-bold" : "text-gray-500"
                        }`}
                    >
                        <span
                            className={`flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0 ${
                                activeComponent === step.name ? "border-blue-600" : "border-gray-500"
                            }`}>
                            {steps.indexOf(step) + 1}
                        </span>
                        {step.label}

                        {/*Doesn't display icon for last index*/}
                        { index !== steps.length - 1 && (
                        <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
                        </svg>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    );
};


export default SurveyStepper;