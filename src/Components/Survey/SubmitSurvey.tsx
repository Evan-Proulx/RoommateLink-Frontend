import React, {useState} from 'react';
import ShadowButton from "../Shadow-Button.tsx";
import {authenticateUser} from "../API/Auth.ts";
import {createProfile} from "../API/Profile.ts";

const SubmitSurvey = ({personalData, profileData, propertyData, dealBreakerData}) => {
    const [validationWarning, setValidationWarning] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        validateNames()

        //TODO: Add deal breaker data later
        const allData = {
            personalData,
            profileData,
            ...(personalData.hasHousing && {propertyData}),  //Only include housing data if user has property
        }

        const data = JSON.stringify(allData);
        console.log(data);

        await createProfile(data)
    }

    const validateNames = () => {
        const firstName = profileData.firstName
        const lastName = profileData.lastName
        let errorMessage = ""

        //Check string length
        if (firstName.length < 2 || firstName.length > 50) setErrorMessage("First name must be at least 2 characters")
        if (lastName.length < 2 || lastName.length > 50) setErrorMessage("Last name must be at least 2 characters")

        //Check if string has special characters
        const noCharacterPattern = /[^A-Za-z0-9 ]/
        if (noCharacterPattern.test(firstName) || noCharacterPattern.test(lastName)) setErrorMessage("First name and last name can only contain letters and spaces")
    }

    return (
        <form onSubmit={handleSubmit} className={"py-40 content-center"}>
            <h1 className={"header-text-big text-center"}>Survey Complete!</h1>
            <h2 className={"header3-text text-center text-black"}>Your answers can be changed at anytime on the profile
                page. Now its time to find your perfect roommate! Click the “Submit” button to navigate to the
                feed.</h2>
            <div className={"flex justify-center"}>
                <ShadowButton value={"Submit"} width={"2/5"}/>
            </div>
                <div className={"text-red-500 text-center"}>
                    {errorMessage}
                </div>
        </form>
    );
};

export default SubmitSurvey;