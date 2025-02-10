import React from 'react';
import ShadowButton from "../Shadow-Button.tsx";
import SurveyIntro from "./Survey-Intro.tsx";
import SurveyForm1 from "./Survey-Form1.tsx";
import ButtonNav from "./Button-Nav.tsx";
import SurveyForm2 from "./SurveyForm2.tsx";
import SurveyForm3 from "./SurveyForm3.tsx";

const Survey = () => {
    return (
        <>
            <div className={"bg-[var(--color-primary)] min-h-screen"}>
                <div className={"flex items-center justify-center"}>
                    <div className="flex flex-col items-center justify-center w-1/2 xl:w-1/3">
                        <SurveyForm3/>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Survey;