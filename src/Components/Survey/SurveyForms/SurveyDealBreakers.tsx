import React, {useState} from 'react';

//deal-breaker data is passed down from the parent survey component
const SurveyDealBreakers = ({dealBreakerData, setDealBreakerData}) => {

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
        { name: "differentDiet", label: "Different diet" },
        { name: "differentGender", label: "Different gender" },
        { name: "differentCollege", label: "Doesn't go to your college/university" },
        { name: "noPlace", label: "Doesn't have a place" },
        { name: "differentSociability", label: "Doesn't match your sociability" },
        { name: "differentCleanliness", label: "Doesn't match your cleanliness" },
        { name: "differentReligion", label: "Doesn't match your religion" }
    ];

    return (
        <div>
            <form action="" className={"flex flex-col items-center pt-12 space-y-2"}>

                {/*Header*/}
                <div>
                    <h2 className={"header-text-big text-center"}>Deal Breakers</h2>
                    <h2 className={"text-black font-bold text-center"}>Specify any details about your roommate that would
                        be a deal-breaker. We won't match you with users that have these attributes</h2>
                </div>

                <div className={"items-start py-12"}>
                    {checkboxLabels.map((option) => (
                        <div key={option.name} className="flex items-center mb-4">
                            {/*loop through the array of checkbox information and display it*/}
                            <input
                                id={option.name}
                                name={option.name}
                                type="checkbox"
                                checked={dealBreakerData[option.name]}
                                onChange={handleCheckboxChange}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label htmlFor={option.name} className="ms-2 header3-text">
                                {option.label}
                            </label>
                        </div>
                    ))}
                </div>
            </form>
        </div>
    );
};

export default SurveyDealBreakers;