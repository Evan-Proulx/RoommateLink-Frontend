import React, {useEffect, useState} from "react";
import SurveyIntro from "./Survey-Intro.tsx";
import SurveyStepper from "./SurveyStepper.tsx";
import SurveyFormProfile from "./SurveyFormProfile.tsx";
import SurveyFormRoommate from "./SurveyFormRoommate.tsx";
import ShadowButton from "../Shadow-Button.tsx";
import { Element, scroller } from "react-scroll";
import PropertyForm from "./PropertyForm.tsx";
import SurveyAbout from "./SurveyAbout.tsx";
import SubmitSurvey from "./SubmitSurvey.tsx";


const Survey = () => {
    //User Search radius
    const [searchLocation, setSearchLocation] = useState({
        latitude: 42.251236522852885,
        longitude: -83.01928920731788,
        radius: 8000
    })
    //User Data
    const [personalData, setPersonalData] = useState({
        city: "",
        hasHousing: false,
        budget: 1200,
        school: "",
        profession: "",
        workingTimeFrom: "",
        workingTimeTo: "",
        gender: "",
        language: "",
        religion: "",
        diet: "",
        hasPets: false,
        smokes: false,
        sociability: 5,
        cleanliness: 5,
        hobbies: []
    });
    const [propertyData, setPropertyData] = useState({
        propertyType: "",
        bedroomCount: 2,
        bathroomCount: 1,
        squareFeet: 1000,
        sharedKitchen: true,
        description: "",
        images: [] as File[]
    });
    const [dealBreakerData, setDealBreakerData] = useState({
        hasPets: false,
        smokes: false,
        differentDiet: false,
        differentGender: false,
        differentCollege: false,
        noPlace: false,
        differentSociability: false,
        differentCleanliness: false,
        differentReligion: false
    });
    const [profileData, setProfileData] = useState({
        bio: "",
        profilePicture: "",
        introductoryVideo: ""
    })

    //Index of current survey component being viewed
    const [currentIndex, setCurrentIndex] = useState(0)
    //All component keys. Allows for navigation between components
    const surveySections = ["intro", "form1", "form2", "form3", "form4", "submit"];


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

    // Log when data is updated
    useEffect(() => {
        console.log("Updated userData:", searchLocation);
    }, [personalData, propertyData, dealBreakerData, profileData, searchLocation]);

    return (
        <>
            <div className={"bg-primary min-h-screen"}>
                <nav className="sticky top-0 bg-primary shadow-sm z-50"><h1 className={"logo"}>Roommate Link</h1>
                    <SurveyStepper setActiveComponent={scrollTo} activeComponent={surveySections[currentIndex]}/></nav>

                <div className={"flex items-center justify-center"}>
                    <div className="flex flex-col items-center justify-center w-1/2 xl:w-1/3 space-y-20">
                        <Element name="intro" id="intro" className={"h-screen"}>
                            <SurveyIntro/>
                        </Element>
                        <Element name="form1" id="form1" className={"py-20"}>
                            <SurveyAbout userData={personalData} setUserData={setPersonalData} searchLocation={searchLocation} setSearchLocation={setSearchLocation}/>
                        </Element>
                        <Element name="form2" id="form2" className={"py-20"}>
                            <SurveyFormProfile profileData={profileData} setProfileData={setProfileData}/>
                        </Element>
                        <Element name="form3" id="form3" className={"py-20"}>
                            <PropertyForm propertyData={propertyData} setPropertyData={setPropertyData}/>
                        </Element>
                        <Element name="form4" id="form4" className={"py-20"}>
                            <SurveyFormRoommate dealBreakerData={dealBreakerData} setDealBreakerData={setDealBreakerData}/>
                        </Element>
                        <Element name="submit" id="submit" className={"py-20"}>
                            <SubmitSurvey personalData={personalData} profileData={profileData} propertyData={propertyData} dealBreakerData={dealBreakerData} />
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
