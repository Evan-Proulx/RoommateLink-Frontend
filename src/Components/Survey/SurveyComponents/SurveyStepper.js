import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const SurveyStepper = ({ setActiveComponent, activeComponent, displayPropertyForm }) => {
    //Holds values of steps in the stepper
    //We filter out the property step so it isn't displayed if the user specifies they don't have a property
    const steps = [
        { name: "intro", label: "Intro" },
        { name: "form1", label: "About You" },
        { name: "form2", label: "Profile" },
        { name: "form3", label: "About your property" },
        { name: "form4", label: "About Your Roommate" },
    ].filter(step => displayPropertyForm || step.name !== "form3");
    return (_jsx("div", { children: _jsx("ol", { className: "flex items-center justify-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 rounded-lg sm:text-base sm:p-4 sm:space-x-4 rtl:space-x-reverse", children: steps.map((step, index) => (_jsxs("li", { onClick: () => setActiveComponent(index), className: `flex items-center cursor-pointer ${activeComponent === step.name ? "text-blue-600 font-bold" : "text-gray-500"}`, children: [_jsx("span", { className: `flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0 ${activeComponent === step.name ? "border-blue-600" : "border-gray-500"}`, children: steps.indexOf(step) + 1 }), step.label, index !== steps.length - 1 && (_jsx("svg", { className: "w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 12 10", children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m7 9 4-4-4-4M1 9l4-4-4-4" }) }))] }, step.name))) }) }));
};
export default SurveyStepper;
