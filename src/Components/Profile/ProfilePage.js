import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Aside from "./Aside/Aside";
import { createContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getProfileData } from "../API/Profile";
import UserInfoSection from "./ProfileComponents/UserInfoSection";
import AboutSection from "./ProfileComponents/AboutSection";
import Navbar from "../Navbar";
import { getInterestedUsers } from "../API/Profile";
import { retrievePropertyImages } from "../API/Media";
import Video from "./Aside/Video";
export const ProfileContext = createContext(null);
function ProfilePage() {
    const navigate = useNavigate();
    //This is the state passed when the page is navigated to
    //It sends the user's profile and if it is the logged in user's profile or a different user's profile
    //This allows us to use the same component for different types of users
    const { state } = useLocation();
    const profile = state?.profile;
    const myProfileDisplayed = state?.myProfileDisplayed ?? true;
    const hasRun = useRef(false);
    const imgUrl = import.meta.env.VITE_ROOT_URL + "/storage/";
    const [profileData, setProfileData] = useState();
    const [propertyImages, setPropertyImages] = useState([]);
    const [interestedUsers, setInterestedUsers] = useState([]);
    //Fetch profile data from the api when the page first loads
    useEffect(() => {
        //Stop rerun
        if (hasRun.current)
            return;
        hasRun.current = true;
        //Get the logged in user's data if they are on their profile page
        if (myProfileDisplayed) {
            getData();
        }
        else {
            console.log("Profile", profile);
            if (profile) {
                //Get the profile data for the given user id if selected from a feed
                setProfileData(profile);
            }
        }
    }, [navigate]);
    //Fetch profile data with token
    const getData = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            return;
        }
        try {
            const response = await getProfileData();
            console.log(response);
            setProfileData(response);
        }
        catch (err) {
            console.log(err);
        }
    };
    //Get images once the profile is set
    useEffect(() => {
        if (profileData?.propertyData.id) {
            getPropertyImages();
            handleInterestedUsers();
        }
        console.log("PROFILE", profileData);
    }, [profileData]);
    //Gets array of property image urls
    const getPropertyImages = async () => {
        //Check if user has housing property before fetching images
        if (profileData?.personalData.has_housing) {
            const propertyID = profileData?.propertyData.id;
            if (!propertyID) {
                return;
            }
            try {
                const response = await retrievePropertyImages(propertyID);
                //Add url root to urls
                const fixedImgUrls = response.map(image => imgUrl + image);
                setPropertyImages(fixedImgUrls);
            }
            catch (err) {
                console.log(err);
            }
        }
    };
    const handleInterestedUsers = async () => {
        const id = profileData?.profileData.account_id;
        try {
            const response = await getInterestedUsers(id);
            console.log(response);
            setInterestedUsers(response.interested_people);
        }
        catch (err) {
            console.log(err);
        }
    };
    //Show loading screen if profile data is not loaded yet
    if (!profileData)
        return _jsxs("div", { className: "flex flex-col justify-center items-center h-screen w-full bg-primary", children: [_jsx("span", { className: "loader" }), _jsx("h2", { className: "header4-text text-center pt-4", children: "Loading..." })] });
    //pass profile data to child components
    return (_jsx(ProfileContext.Provider, { value: profileData, children: _jsxs("div", { className: "flex flex-col overflow-y-hidden", children: [_jsx(Navbar, {}), _jsx("div", { className: "flex justify-center bg-primary", children: _jsxs("div", { className: "items-center overflow-y-auto h-screen bg-profile xl:w-2/3 shadow-2xl", children: [_jsx(UserInfoSection, { myProfileDisplayed: myProfileDisplayed }), _jsxs("div", { className: "sm:flex ", children: [_jsx(Aside, { myProfileDisplayed: myProfileDisplayed }), _jsx(AboutSection, { propertyImages: propertyImages, myProfileDisplayed: myProfileDisplayed, interestedPeople: interestedUsers }), _jsx("div", { className: "sm:hidden align-bottom", children: _jsx(Video, {}) })] })] }) })] }) }));
}
export default ProfilePage;
