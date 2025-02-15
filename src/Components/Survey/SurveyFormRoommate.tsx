import React, {useState} from 'react';

const SurveyFormRoommate = () => {
    // all states as an object
    const [checkboxes, setCheckboxes] = useState({
        hasPets: false,
        smokes: false,
        differentDiet: false,
        differentGender: false,
        notSameCollege: false,
        noPlace: false,
        notSameSociability: false,
        notSameCleanliness: false,
        notSameReligion: false
    });



    //Update checkboxes
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        // update the state with the new value of the checkbox with the old values
        setCheckboxes((prev) => ({
            ...prev,
            [name]: checked
        }));

        console.log(checkboxes)
    };

    const checkboxLabels = [
        { name: "pets", label: "Has Pets" },
        { name: "smokes", label: "Smokes" },
        { name: "diet", label: "Different diet" },
        { name: "gender", label: "Different gender" },
        { name: "college", label: "Doesn't go to your college/university" },
        { name: "place", label: "Doesn't have a place" },
        { name: "sociability", label: "Doesn't match your sociability" },
        { name: "cleanliness", label: "Doesn't match your cleanliness" },
        { name: "religion", label: "Doesn't match your religion" }
    ];

    return (
        <div>
            <form action="" className={"flex flex-col items-center space-y-2"}>

                {/*Header*/}
                <div>
                    <h2 className={"header-text-big text-center"}>Deal Breakers</h2>
                    <h2 className={"text-black font-bold text-center"}>Specify any details about your roommate that would
                        be a deal-breaker. We won't match you with users that have these attributes</h2>
                </div>

                <div className={"items-start pt-12"}>
                    {checkboxLabels.map((option) => (
                        <div key={option.name} className="flex items-center mb-4">
                            <input
                                id={option.name}
                                name={option.name}
                                type="checkbox"
                                checked={checkboxes[option.name]}
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

export default SurveyFormRoommate;