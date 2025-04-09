import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import SurveyIntro from "./SurveyForms/SurveyIntro";
import SurveyStepper from "./SurveyComponents/SurveyStepper";
import SurveyProfile from "./SurveyForms/SurveyProfile";
import SurveyDealBreakers from "./SurveyForms/SurveyDealBreakers";
import ShadowButton from "../Shadow-Button";
import { Element, scroller } from "react-scroll";
import SurveyProperty from "./SurveyForms/SurveyProperty";
import SurveyPersonal from "./SurveyForms/SurveyPersonal";
import SubmitSurvey from "./SurveyForms/SubmitSurvey";
import { FormProvider, useForm } from "react-hook-form";
import { createProfile } from "../API/Profile";
import { useNavigate } from "react-router-dom";
import { uploadHouseTour, uploadProfileMedia, uploadPropertyImages } from "../API/Media";
const Survey = () => {
    //Data from map
    const [searchLocation, setSearchLocation] = useState({
        latitude: 42.251236522852885,
        longitude: -83.01928920731788,
        radius: 8000
    });
    //User Data
    const [personalData, setPersonalData] = useState({
        city: "",
        province: "",
        hasHousing: false,
        budget: 1200,
        school: "",
        profession: "",
        workingTimeFrom: "09:00",
        workingTimeTo: "18:00",
        gender: "Male",
        language: "English",
        religion: "Non-religious",
        diet: "No preference",
        hasPets: false,
        smokes: false,
        sociability: 5,
        cleanliness: 5,
        hobbies: []
    });
    //Data from property form
    const [propertyData, setPropertyData] = useState({
        propertyType: "",
        bedroomCount: 2,
        bathroomCount: 1,
        squareFeet: 1000,
        sharedKitchen: true,
        description: "",
        images: []
    });
    //Data from profile form
    const [profileData, setProfileData] = useState({
        firstName: "",
        lastName: "",
        age: 18,
        bio: "",
        profilePicture: "",
        introductoryVideo: ""
    });
    //Data from deal breaker form
    const [dealBreakers, setDealBreakers] = useState({
        hasPets: false,
        smokes: false,
        differentGender: false,
        differentDiet: false,
        differentSchool: false,
        differentReligion: false,
        hasKids: false,
        nightOwl: false
    });
    const navigate = useNavigate();
    //Files set separately from the rest of the data
    const [profilePicture, setProfilePicture] = useState(null);
    const [introductoryVideo, setIntroductoryVideo] = useState(null);
    const [propertyImages, setPropertyImages] = useState([]);
    const [houseTour, setHouseTour] = useState(null);
    //useForm describes how the form validation should behave. This is passed to the FormProvider
    const methods = useForm({ mode: "onBlur" });
    //Index of current survey component being viewed
    const [currentIndex, setCurrentIndex] = useState(0);
    // Pass this value to the submit component to display an alert to the user
    const [submissionError, setSubmissionError] = useState(false);
    //All component keys. Allows for navigation between components in the survey
    //Filter out property section if the user specifies they don't have a property
    const surveySections = ["intro", "form1", "form2", "form3", "form4", "submit"]
        .filter(section => personalData.hasHousing || section !== "form3");
    //Navigate to next component in list
    const navNext = () => {
        if (currentIndex < surveySections.length - 1) {
            scrollTo(currentIndex + 1);
        }
    };
    //Navigate to previous component in list
    const navBack = () => {
        if (currentIndex > 0) {
            scrollTo(currentIndex - 1);
        }
    };
    //Component is scrolled to based on passed index
    const scrollTo = (index) => {
        if (index >= 0 && index < surveySections.length) {
            scroller.scrollTo(surveySections[index], {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart",
            });
            setCurrentIndex(index);
        }
    };
    //Updates image and video state sent from profile form
    const onSetAvatar = (image) => { setProfilePicture(image); };
    const onSetVideo = (video) => { setIntroductoryVideo(video); };
    //Updates property images state sent from property form
    const onSetPropertyImages = (images) => { setPropertyImages(images); };
    //Updates houseTour state sent from property form
    const onSetHouseTour = (tour) => { setHouseTour(tour); };
    //Submits file data to server. Files are handled separately from the rest of the profile data.
    const handleFileSubmission = async () => {
        // Check profile picture and video and send files to server
        if (profilePicture && introductoryVideo) {
            try {
                const response = await uploadProfileMedia(profilePicture, introductoryVideo);
                console.log(response);
            }
            catch (error) {
                alert("Error uploading files: " + error.message);
            }
        }
        // Check property images and send files to server
        if (propertyImages && personalData.hasHousing) {
            console.log(propertyImages);
            try {
                const response = await uploadPropertyImages(propertyImages);
                console.log(response);
            }
            catch (error) {
                console.log(error);
            }
        }
        if (houseTour && personalData.hasHousing) {
            //Send house tour data to server
            try {
                const response = await uploadHouseTour(houseTour);
                console.log(response);
            }
            catch (error) {
                console.log(error);
            }
        }
    };
    // Log when data is updated
    useEffect(() => {
        console.log("Updated userData:", dealBreakers);
    }, [personalData, propertyData, dealBreakers, profileData, searchLocation]);
    const onSubmit = async () => {
        //TODO: Add deal breaker data later
        //combine all data into one object
        const allData = {
            searchLocation,
            personalData,
            profileData,
            // TODO: FIX this. Property data shouldn't be set if they dont have a property
            // ...(personalData.hasHousing && {propertyData}),  //Only include housing data if user has property
            propertyData,
            dealBreakers
        };
        const data = JSON.stringify(allData);
        console.log(data);
        try { //Send profile data to server
            await createProfile(data);
            //Send file data to server
            await handleFileSubmission();
            navigate('/feed');
        }
        catch (error) {
            console.log(error);
            setSubmissionError(true);
        }
    };
    return (
    //use form provider for form validation for the location and names
    _jsx(FormProvider, { ...methods, children: _jsxs("form", { onSubmit: methods.handleSubmit(onSubmit), className: "bg-primary min-h-screen", children: [_jsxs("nav", { className: "sticky top-0 bg-primary shadow-sm z-50", children: [_jsx("h1", { className: "logo", children: "Roommate Link" }), _jsx(SurveyStepper, { setActiveComponent: scrollTo, activeComponent: surveySections[currentIndex], displayPropertyForm: personalData.hasHousing })] }), _jsx("div", { className: "flex items-center justify-center", children: _jsxs("div", { className: "flex flex-col items-center justify-center w-1/2 xl:w-1/3 space-y-20", children: [_jsx(Element, { name: "intro", id: "intro", className: "h-screen", children: _jsx(SurveyIntro, { onBtnClicked: () => scrollTo(1) }) }), _jsx(Element, { name: "form1", id: "form1", className: "py-20", children: _jsx(SurveyPersonal, { userData: personalData, setUserData: setPersonalData, searchLocation: searchLocation, setSearchLocation: setSearchLocation }) }), _jsx(Element, { name: "form2", id: "form2", className: "py-20", children: _jsx(SurveyProfile, { profileData: profileData, setProfileData: setProfileData, onSetAvatar: onSetAvatar, onSetVideo: onSetVideo }) }), personalData.hasHousing &&
                                _jsx(Element, { name: "form3", id: "form3", className: "py-20", children: _jsx(SurveyProperty, { propertyData: propertyData, setPropertyData: setPropertyData, onSetPropertyImages: onSetPropertyImages, onSetHouseTour: onSetHouseTour }) }), _jsx(Element, { name: "form4", id: "form4", className: "py-20", children: _jsx(SurveyDealBreakers, { dealBreakerData: dealBreakers, setDealBreakerData: setDealBreakers }) }), _jsx(Element, { name: "submit", id: "submit", className: "py-20", children: _jsx(SubmitSurvey, { personalData: personalData, profileData: profileData, propertyData: propertyData, dealBreakerData: dealBreakers, submissionError: submissionError }) })] }) }), _jsx("div", { className: "fixed bottom-1 w-full hidden md:block", children: _jsxs("div", { className: "flex justify-between mx-5 p-8", children: [_jsx(ShadowButton, { value: "Back", onClick: navBack, color: "text" }), _jsx(ShadowButton, { value: "Next", onClick: navNext })] }) })] }) }));
};
export default Survey;
