import Aside from "./Aside/Aside.tsx";
import ProfileComponents from "./ProfileComponents/ProfileComponents.tsx";
import {createContext, useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getProfileData, retrievePropertyImages} from "../API/Profile.ts";
import {UserProfile} from "../../ProfileData.ts"
import UserInfoSection from "./ProfileComponents/UserInfoSection.tsx";
import AboutSection from "./ProfileComponents/AboutSection.tsx";
import Navbar from "../Navbar.tsx";
export const ProfileContext = createContext(null)
function ProfilePage() {
    const [profileData, setProfileData] = useState<UserProfile>();
    const [propertyImages, setPropertyImages] = useState<string[]>([]);
    const navigate = useNavigate();
    const hasRun = useRef(false)
    const imgUrl = import.meta.env.VITE_ROOT_URL + "/storage/";


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

    //Get images once the profile is set
    useEffect(() => {
        if (profileData?.propertyData.id){
            getPropertyImages();
        }
    },[profileData]);

    const getPropertyImages = async () => {
        const propertyID = profileData?.propertyData.id;
        if (!propertyID) {return}

        try{
            const response = await retrievePropertyImages(propertyID);

            const fixedImgUrls = response.map(image => imgUrl + image)
            console.log(fixedImgUrls)
            setPropertyImages(fixedImgUrls);
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
                    <div className="items-center overflow-y-auto h-screen bg-profile xl:w-2/3 shadow-2xl">
                        <UserInfoSection/>
                        <div className="flex">
                            <Aside/>
                            <AboutSection propertyImages={propertyImages}/>
                        </div>
                    </div>
                </div>
            </div>
        </ProfileContext.Provider>
    );
}

export default ProfilePage;

