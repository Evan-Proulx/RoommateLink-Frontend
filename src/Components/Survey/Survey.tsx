import React, {useState} from "react";
import SurveyIntro from "./Survey-Intro.tsx";
import SurveyForm1 from "./Survey-Form1.tsx";
import SurveyForm3 from "./SurveyForm3.tsx";
import SurveyStepper from "./SurveyStepper.tsx";
import SurveyFormProfile from "./SurveyFormProfile.tsx";
import SurveyFormRoommate from "./SurveyFormRoommate.tsx";
import ShadowButton from "../Shadow-Button.tsx";
import { Link, Element, scroller } from "react-scroll";
import PropertyForm from "./PropertyForm.tsx";


const Survey = () => {

    const [currentIndex, setCurrentIndex] = useState(0
    )
    //All component keys. Allows for navigation between components
    const surveySections = ["intro", "form1", "form2", "form3", "form4"];

    //Navigate to next component in list
    const navNext = () => {
        if (currentIndex < surveySections.length - 1){
            scrollTo(currentIndex + 1)
        }
    }

    //Navigate to previous component in list
    const navBack = () => {
        if (currentIndex > 0){
            scrollTo(currentIndex - 1)
        }
    }

    //Component is scrolled to based on passed index
    const scrollTo = (index) => {
        if(index >= 0 && index < surveySections.length) {
            scroller.scrollTo(surveySections[index], {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart",
            });
            setCurrentIndex(index)
        }
    };

    return (
        <>
            <div className={"bg-primary min-h-screen pb-8 "}>
                <h1 className={"logo"}>Roommate Link</h1>
                <SurveyStepper setActiveComponent={scrollTo} activeComponent={surveySections[currentIndex]} />

                <div className={"flex items-center justify-center"}>
                    <div className="flex flex-col items-center justify-center w-1/2 xl:w-1/3 space-y-44">
                        <Element name="intro" id="intro" className={"h-screen"}>
                            <SurveyIntro />
                        </Element>
                        <Element name="form1" id="form1" className={"h-screen"}>
                            <SurveyForm1 />
                        </Element>
                        <Element name="form2" id="form2" className={"h-screen"}>
                            <SurveyForm3 />
                        </Element>
                        <Element name="form3" id="form3" className={"h-screen"}>
                            <SurveyFormProfile />
                        </Element>
                        <Element name="form4" id="form4" className={"h-screen"}>
                            <PropertyForm />
                        </Element>
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
