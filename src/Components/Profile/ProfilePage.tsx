import Aside from "./Aside/Aside.tsx";
import ProfileComponents from "./ProfileComponents/ProfileComponents.tsx";
import {createContext, useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getProfileData} from "../API/Profile.ts";
import {UserProfile} from "../../ProfileData.ts"
import UserInfoSection from "./ProfileComponents/UserInfoSection.tsx";
import AboutSection from "./ProfileComponents/AboutSection.tsx";
import Navbar from "../Navbar.tsx";
export const ProfileContext = createContext(null)
function ProfilePage() {
    const [profileData, setProfileData] = useState<UserProfile>();
    const navigate = useNavigate();
    const hasRun = useRef(false)


    //Fetch profile data from the api when the page first loads
    useEffect(() => {
        //Stop rerun
        if (hasRun.current) return;
        hasRun.current = true;

        getData()
    }, [navigate])

    //Fetch profile data with token
    const getData = async () =>{
        const token = localStorage.getItem('token');
        if (!token) {return}

        try {
            const response = await getProfileData(token);
            console.log(response)
            setProfileData(response);
        }catch (err) {
            console.log(err)
        }
    }

    //Show loading screen if profile data is not loaded yet
    if (!profileData) return <div className={"flex flex-col justify-center items-center h-screen w-full bg-gray-300"}>
        <span className={"loader"}></span>
        <h2 className={"header4-text text-center pt-4"}>Loading...</h2>
    </div>

    //pass profile data to child components
    return (
        <ProfileContext.Provider value={profileData}>
            <div className="flex flex-col h-screen overflow-y-hidden">
                <Navbar/>
                <div className="flex justify-center bg-primary">
                    <div className="items-center overflow-y-auto h-screen bg-profile lg:w-2/3 shadow-2xl">
                        <UserInfoSection/>
                        <div className="flex">
                            <Aside/>
                            <AboutSection/>
                        </div>
                    </div>
                </div>
            </div>
        </ProfileContext.Provider>
    );
}

export default ProfilePage;

