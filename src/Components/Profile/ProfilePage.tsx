import Aside from "./Aside/Aside.tsx";
import React, {createContext, useEffect, useRef, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {getProfileData} from "../API/Profile.ts";
import {UserProfile} from "../../ProfileData.ts"
import UserInfoSection from "./ProfileComponents/UserInfoSection.tsx";
import AboutSection from "./ProfileComponents/AboutSection.tsx";
import Navbar from "../Navbar.tsx";
import {getInterestedUsers} from "../API/Profile.ts";
import UpdateProfile from "./UpdateForms/UpdateProfile.tsx";
import Modal from "../Modal.tsx";
import {retrievePropertyImages} from "../API/Media.ts";
import Video from "./Aside/Video.tsx";
export const ProfileContext = createContext<UserProfile | null>(null)

function ProfilePage() {
    const navigate = useNavigate();
    //This is the state passed when the page is navigated to
    //It sends the user's profile and if it is the logged in user's profile or a different user's profile
    //This allows us to use the same component for different types of users
    const {state} = useLocation();
    const profile = state?.profile;
    const myProfileDisplayed = state?.myProfileDisplayed ?? true;

    const hasRun = useRef(false)
    const imgUrl = import.meta.env.VITE_ROOT_URL + "/storage/";

    const [profileData, setProfileData] = useState<UserProfile>();
    const [propertyImages, setPropertyImages] = useState<string[]>([]);
    const [interestedUsers, setInterestedUsers] = useState<UserProfile[]>([]);

    //Fetch profile data from the api when the page first loads
    useEffect(() => {
        //Stop rerun
        if (hasRun.current) return;
        hasRun.current = true;

        //Get the logged in user's data if they are on their profile page
        if (myProfileDisplayed) {
            getData();
        }else{
            console.log("Profile",profile)
            if (profile) {
                //Get the profile data for the given user id if selected from a feed
                setProfileData(profile);
            }
        }
    }, [navigate]);

    //Fetch profile data with token
    const getData = async () =>{
        const token = localStorage.getItem('token');
        if (!token) {return}

        try {
            const response = await getProfileData();
            console.log(response)
            setProfileData(response);
        }catch (err) {
            console.log(err)
        }
    }

    //Get images once the profile is set
    useEffect(() => {
        if (profileData?.propertyData.id){
            getPropertyImages();
            handleInterestedUsers();
        }

        console.log("PROFILE", profileData)
    },[profileData]);

    //Gets array of property image urls
    const getPropertyImages = async () => {
        //Check if user has housing property before fetching images
        if(profileData?.personalData.has_housing) {
            const propertyID = profileData?.propertyData.id;
            if (!propertyID) {return}

            try {
                const response = await retrievePropertyImages(propertyID);
                //Add url root to urls
                const fixedImgUrls = response.map(image => imgUrl + image)
                setPropertyImages(fixedImgUrls);
            } catch (err) {
                console.log(err);
            }
        }
    }

    const handleInterestedUsers = async () => {
        const id = profileData?.profileData.account_id;
        try {
            const response = await getInterestedUsers(id);
            console.log(response);
            setInterestedUsers(response.interested_people);
        } catch (err) {
            console.log(err);
        }
    }

    //Show loading screen if profile data is not loaded yet
    if (!profileData) return <div className={"flex flex-col justify-center items-center h-screen w-full bg-primary"}>
        <span className={"loader"}></span>
        <h2 className={"header4-text text-center pt-4"}>Loading...</h2>
    </div>

    //pass profile data to child components
    return (
        <ProfileContext.Provider value={profileData}>
            <div className="flex flex-col overflow-y-hidden">
                <Navbar/>
                <div className="flex justify-center bg-primary">
                    <div className="items-center overflow-y-auto h-screen bg-profile xl:w-2/3 shadow-2xl">
                        <UserInfoSection myProfileDisplayed={myProfileDisplayed}/>
                        <div className="sm:flex ">
                            <Aside myProfileDisplayed={myProfileDisplayed}/>
                            <AboutSection propertyImages={propertyImages} myProfileDisplayed={myProfileDisplayed} interestedPeople={interestedUsers}/>
                            {/* Video Component */}
                            <div className="sm:hidden align-bottom">
                                <Video/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProfileContext.Provider>
    );
}

export default ProfilePage;

