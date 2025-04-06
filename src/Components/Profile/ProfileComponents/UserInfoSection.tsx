import Video from "../Aside/Video.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPiggyBank} from "@fortawesome/free-solid-svg-icons";
import React, {useContext, useEffect, useState} from "react";
import {ProfileContext} from "../ProfilePage.tsx";
import {UserProfile} from "../../../ProfileData.ts";
import ProfileImg from "../Aside/ProfileImg.tsx";
import {Edit, PersonPinCircle, PinDrop, PinDropOutlined, Search} from "@mui/icons-material";
import {grey} from "@mui/material/colors";
import Modal from "../../Modal.tsx";
import UpdateProfile from "../UpdateForms/UpdateProfile.tsx";
import UpdateFiles from "../UpdateForms/UpdateFiles.tsx";
import UpdateProperty from "../UpdateForms/UpdateProperty.tsx";

interface UserInfoSectionProps{
    myProfileDisplayed: boolean;
};
function UserInfoSection({myProfileDisplayed} : UserInfoSectionProps) {
    const imgUrl = import.meta.env.VITE_ROOT_URL + "/storage/";
    //Get user data
    const userProfile = useContext(ProfileContext);
    const user = userProfile as UserProfile;
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState<"updateProfile" | "updateFiles" | "updateProperty" | null>(null);

    // Allows for modal display and content to be set onClick
    const setModal = (content: "updateProfile" | "updateFiles" | "updateProperty") => {
        setModalContent(content);
        setModalIsOpen(true);
    }

    useEffect(() => {
        console.log("MY PROFILE", myProfileDisplayed)
    }, []);

    // Toggle modal display
    return (
        <div className="p-4 flex justify-between items-start w-full shadow-md">
            <div className={"flex space-x-3 px-4 lg:px-12"}>

                {/* User's profile picture img url and link % is passed if they have one*/}
                <div className={"relative"}>
                    <ProfileImg url={imgUrl + user.profileData.profile_picture}
                               percentage={user.compatibilityScore ? user.compatibilityScore : null}/>

                    {/*Edit icon inside profile picture*/}
                    {myProfileDisplayed &&
                        <div onClick={() => setModal("updateFiles")} title={"Edit Profile Picture"}
                              className="absolute bottom-8 right-0 p-1 rounded-full bg-gray-300 transform
                               -translate-y-8 -translate-x-1/4 cursor-pointer hover:bg-gray-400 ease-in-out">
                            <Edit sx={{fontSize: 28}}/>
                        </div>
                    }
                </div>

                <div className="">
                    {/* User name */}
                    <div className="flex items-center m-3">
                        <div className={"flex"}>
                            {myProfileDisplayed &&
                                <div title={"Edit Personal Info"}><Edit className={"cursor-pointer"} onClick={() => setModal("updateProfile")}/></div>}
                            <h1 className="text-5xl font-bold text-start">{user.profileData.first_name + " " + user.profileData.last_name}</h1>
                        </div>
                        {/*Verified badge*/}
                        <svg className="w-10 h-10 text-gray-800 dark:text-blue-700" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                             viewBox="0 0 24 24">
                            <path fillRule="evenodd"
                                  d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                  clipRule="evenodd"/>
                        </svg>
                    </div>

                    {/* User's City */}
                    <div className="flex items-center m-3">
                        <PersonPinCircle sx={{color: grey[600]}}/>
                        <h1 className="pl-1 text-md lg:text-xl font-semibold text-center text-gray-500">{user.personalData.city + ", " + user.personalData.province}</h1>
                    </div>

                    {/* User's Budget */}
                    <div className="flex items-center m-3">
                        <FontAwesomeIcon icon={faPiggyBank} className="text-gray-500 text-xl"/>
                        <h1 className="pl-2 text-md lg:text-xl font-semibold text-center text-gray-500">
                            Budget: ${user.personalData.budget}/month
                        </h1>
                    </div>

                    {/* User's State */}
                    <div className="flex items-center m-3">
                        <Search sx={{color: grey[600]}}/>
                        <h1 className="pl-1 text-md lg:text-xl font-semibold text-center text-gray-500">Looking
                            for: {user.personalData.has_housing ? "Roommate" : "Roommate + Housing"}</h1>
                    </div>
                </div>
            </div>

            {/* Video Component */}
            <div className="hidden sm:block align-bottom">
                <Video/>
            </div>

            {/*Set modal content with specified components*/}
            <Modal open={modalIsOpen} close={() => setModalIsOpen(false)}>

                {modalContent === "updateProfile" &&
                    <UpdateProfile closeModal={() => setModalIsOpen(false)}/>}

                {modalContent === "updateFiles" &&
                    <UpdateFiles closeModal={() => setModalIsOpen(false)}/>}

                {modalContent === "updateProperty" && user.propertyData &&
                    <UpdateProperty property={user.propertyData} closeModal={() => setModalIsOpen(false)}/>}

            </Modal>
        </div>
    )
}

export default UserInfoSection;
