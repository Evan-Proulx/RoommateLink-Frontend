import React, {useState} from "react";
import SurveyIntro from "./Survey-Intro.tsx";
import SurveyForm1 from "./Survey-Form1.tsx";
import SurveyForm3 from "./SurveyForm3.tsx";
import SurveyStepper from "./SurveyStepper.tsx";
import SurveyFormProfile from "./SurveyFormProfile.tsx";
import SurveyFormRoommate from "./SurveyFormRoommate.tsx";
import PropertyForm from "./PropertyForm.tsx";


const Survey = () => {
    const [activeComponent, setActiveComponent] = useState("intro")

    const components = {
        intro: <SurveyIntro/>,
        form1: <SurveyForm1/>,
        form2: <SurveyForm3/>,
        form3: <SurveyFormProfile/>,
        form4: <PropertyForm/>
    }

    return (
        <>
            <div className={"bg-red-700 min-h-screen "}>
                <h1 className={"logo"}>Roommate Link</h1>
                <SurveyStepper setActiveComponent={setActiveComponent} activeComponent={activeComponent}/>
                <div className={"flex items-center justify-center"}>
                    <div className="flex flex-col items-center justify-center w-1/2 xl:w-1/3"
                         >
                        {components[activeComponent]}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Survey;
