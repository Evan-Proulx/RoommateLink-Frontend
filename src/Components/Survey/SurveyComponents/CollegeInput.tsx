import React, {useEffect, useState} from 'react';
import Select from 'react-select';
import axios from "axios";

//Custom styles for the select
const defaultStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: 'white', // bg-white
        borderColor: 'black', // border-2 border-black
        border: '2px solid black',
        fontSize: '0.875rem', // text-sm
        borderRadius: '0.5rem', // rounded-lg
        padding: '.5rem', // p-4
    }),
}
const CollegeInput = ({onSchoolChange, customStyles = {}}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [colleges, setColleges] = useState([]);
    const [selectedCollege, setSelectedCollege] = useState(null);

    useEffect(() => {
        //API fetches all the colleges in Canada and stores their names
        const fetchColleges = async () => {
            setIsLoading(true);
            try {
                // Get all canadian colleges
                const response = await axios.get('http://universities.hipolabs.com/search?country=canada')
                const data = await response;
                //convert data to map of names. The autocomplete input takes in an object so we have to convert the data as a list of objects.
                const allColleges = data.data.map(college => ({
                    label: college.name,
                    value: college.name
                }))

                setColleges(allColleges);
            } catch (error) {
                console.error('Error fetching colleges:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchColleges().then(r => console.log());
    }, []);


    //pass set school to parent
    const handleSetSchool = (school) =>{
        console.log("Test")
        //Handles when school is null when the input is cleared.
        if (school) {
            setSelectedCollege(school);
            onSchoolChange(school.value)
        }else{
            setSelectedCollege(null);
            onSchoolChange("none")
        }
    }

    //This select uses autocomplete and allows for easy searching for colleges
    return (
            <Select
                styles={{ ...defaultStyles, ...customStyles }}
                classNamePrefix="select"
                options={colleges}
                isLoading={isLoading}
                isClearable={true}
                isSearchable={true}
                name="colleges"
                value={selectedCollege}
                onChange={handleSetSchool} //send set value to parent component
            />
    );
};

export default CollegeInput;