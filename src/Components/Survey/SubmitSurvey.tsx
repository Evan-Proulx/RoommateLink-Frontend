import React from 'react';
import ShadowButton from "../Shadow-Button.tsx";
import {authenticateUser} from "../API/Auth.ts";
import {createProfile} from "../API/Profile.ts";

const SubmitSurvey = ({personalData, profileData, propertyData, dealBreakerData}) => {
    const handleSubmit = async ( event: React.FormEvent) => {
        event.preventDefault();

        //TODO: Add deal breaker data later
        const allData = {
            personalData,
            profileData,
            ...(personalData.hasHousing && { propertyData }),  //Only include housing data if user has property
        }

        const data = JSON.stringify(allData);
        console.log(data);

        await createProfile(data)
    }

    return (
        <form onSubmit={handleSubmit} className={"py-40 content-center"}>
            <h1 className={"header-text-big text-center"}>Survey Complete!</h1>
            <h2 className={"header3-text text-center text-black"}>Your answers can be changed at anytime on the profile page. Now its time to find your perfect roommate! Click the “Submit” button to navigate to the feed.</h2>
            <div className={"flex justify-center"}>
                <ShadowButton value={"Submit"} width={"2/5"}/>
            </div>
        </form>
    );
};

export default SubmitSurvey;