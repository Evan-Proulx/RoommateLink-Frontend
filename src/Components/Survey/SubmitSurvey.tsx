import React from 'react';
import ShadowButton from "../Shadow-Button.tsx";

const SubmitSurvey = ({personalData, profileData, propertyData, dealBreakerData}) => {
    const handleSubmit = async ( event: React.FormEvent) => {
        event.preventDefault();

        const allData = {
            personalData,
            profileData,
            propertyData,
            dealBreakerData
        }

        //TODO: Send data to server

        console.log(allData);
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