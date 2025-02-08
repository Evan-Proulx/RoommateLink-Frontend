import React from 'react';
import ShadowButton from "../Shadow-Button.tsx";
import SurveyIntro from "./Survey-Intro.tsx";
import SurveyForm1 from "./Survey-Form1.tsx";
import ButtonNav from "./Button-Nav.tsx";

const Survey = () => {
    return (
        <>
            <div className={"h-full bg-[var(--color-primary)]"}>
                <div className={"flex items-center justify-center bg-[var(--color-primary)]"}>
                    <div className="flex flex-col items-center justify-center w-1/2 xl:w-1/3">
                        <SurveyForm1/>
                    </div>
                </div>
                <ButtonNav/>
            </div>
        </>
    );
};

export default Survey;