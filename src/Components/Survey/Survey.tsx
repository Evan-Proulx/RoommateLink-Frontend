import React, {useState} from "react";
import SurveyIntro from "./Survey-Intro.tsx";
import SurveyForm1 from "./Survey-Form1.tsx";
import SurveyForm3 from "./SurveyForm3.tsx";
import SurveyStepper from "./SurveyStepper.tsx";
import SurveyFormProfile from "./SurveyFormProfile.tsx";
import SurveyFormRoommate from "./SurveyFormRoommate.tsx";
import PropertyForm from "./PropertyForm.tsx";
import ButtonNav from "./Button-Nav.tsx";
import ShadowButton from "../Shadow-Button.tsx";


const Survey = () => {
    const [activeComponent, setActiveComponent] = useState("intro");

    const components = {
        intro: <SurveyIntro/>,
        form1: <SurveyForm1/>,
        form2: <SurveyForm3/>,
        form3: <SurveyFormProfile/>,
        form4: <SurveyFormRoommate/>
    }
    //All component keys. Allows for navigation between components
    const componentKeys = ["intro", "form1", "form2", "form3", "form4"];

    //Navigate to next component in list
    const navNext = () => {
        const currentIndex = componentKeys.indexOf(activeComponent);
        if (currentIndex < componentKeys.length - 1) {
            setActiveComponent(componentKeys[currentIndex + 1]);
        }
    }

    //Navigate to previous component in list
    const navBack = () => {
        const currentIndex = componentKeys.indexOf(activeComponent);
        if (currentIndex > 0) {
            setActiveComponent(componentKeys[currentIndex - 1]);
        }
    }

    return (
        <>
            <div className={"bg-primary min-h-screen pb-8 "}>
                <h1 className={"logo"}>Roommate Link</h1>
                <SurveyStepper setActiveComponent={setActiveComponent} activeComponent={activeComponent}/>
                <div className={"flex items-center justify-center"}>
                    <div className="flex flex-col items-center justify-center w-1/2 xl:w-1/3">
                        {components[activeComponent]}
                    </div>
                </div>

                {/*Bottom button navigation*/}
                <div className={"fixed bottom-1 w-full hidden md:block"}>
                    <div className={"flex justify-between mx-5 p-8"}>
                        <ShadowButton value={"Back"} onClick={navBack} color={"red"}/>
                        <ShadowButton value={"Next"} onClick={navNext}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Survey;
