import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//deal-breaker data is passed down from the parent survey component
const SurveyDealBreakers = ({ dealBreakerData, setDealBreakerData }) => {
    //Update checkboxes
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        // update the state with the new value of the checkbox along with the old values
        setDealBreakerData((prev) => ({
            ...prev,
            [name]: checked
        }));
    };
    //List of checkbox information. Prevents us from repeating code.
    // Names must match variable names in the state object
    const checkboxLabels = [
        { name: "hasPets", label: "Has Pets" },
        { name: "smokes", label: "Smokes" },
        { name: "differentGender", label: "Different gender" },
        { name: "differentDiet", label: "Different diet" },
        { name: "differentSchool", label: "Doesn't go to your college/university" },
        { name: "differentReligion", label: "Doesn't match your religion" },
        { name: "hasKids", label: "Has children" },
        { name: "nightOwl", label: "Night Owl" }
    ];
    return (_jsx("div", { children: _jsxs("form", { action: "", className: "flex flex-col items-center pt-12 space-y-2", children: [_jsxs("div", { children: [_jsx("h2", { className: "header-text-big text-center", children: "Deal Breakers" }), _jsx("h2", { className: "text-black font-bold text-center", children: "Specify any details about your roommate that would be a deal-breaker. We won't match you with users that have these attributes" })] }), _jsx("div", { className: "items-start py-12", children: checkboxLabels.map((option) => (_jsxs("div", { className: "flex items-center mb-4", children: [_jsx("input", { id: option.name, name: option.name, type: "checkbox", checked: dealBreakerData[option.name], onChange: handleCheckboxChange, className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" }), _jsx("label", { htmlFor: option.name, className: "ms-2 header3-text", children: option.label })] }, option.name))) })] }) }));
};
export default SurveyDealBreakers;
