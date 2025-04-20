import React from 'react';
import ShadowButton from "../../Shadow-Button";

const SurveyIntro = ({onBtnClicked}) => {
    return (
        <div className={"pt-40 content-center"}>
            <h1 className={"header2-text text-center"}>We need to know a bit more about you before we can find
                your dream roommate.</h1>
            <div className={"flex justify-center"}>
                <ShadowButton onClick={onBtnClicked} value={"Get Started"} submitButton={false}/>
            </div>
        </div>
    );
};

export default SurveyIntro;