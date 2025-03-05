import Video from "../Aside/Video.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPiggyBank} from "@fortawesome/free-solid-svg-icons";
import {useContext} from "react";
import {ProfileContext} from "../ProfilePage.tsx";
import {UserProfile} from "../../../ProfileData.ts";
import ProfileImg from "../Aside/ProfileImg.tsx";

function UserInfoSection() {
    //Get user data
    const userProfile = useContext(ProfileContext);
    const user = userProfile as UserProfile;

    return (
        <div className="p-4 flex justify-between items-start w-full shadow-md">
            <div className={"flex space-x-3 px-4 lg:px-12"}>
                <ProfileImg/>
                <div className="">
                    {/* User name */}
                    <div className="flex items-center m-3">
                        <h1 className="text-5xl font-bold text-start">{user.profileData.first_name + " " + user.profileData.last_name}</h1>
                        <svg className="w-10 h-10 text-gray-800 dark:text-blue-700" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                             viewBox="0 0 24 24">
                            <path fillRule="evenodd"
                                  d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                  clip-rule="evenodd"/>
                        </svg>
                    </div>

                    {/* User's City */}
                    <div className="flex items-center m-3">
                        <svg className="w-6 h-6 text-gray-800 dark:text-gray-500" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/>
                        </svg>
                        <h1 className="pl-1 text-md lg:text-xl font-semibold text-center text-gray-500">{user.personalData.city}</h1>
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
                        <svg className="w-6 h-6 text-gray-800 dark:text-gray-500" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2"
                                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                        </svg>

                        <h1 className="pl-1 text-md lg:text-xl font-semibold text-center text-gray-500">Looking
                            for: {user.personalData.has_housing ? "roommate" : "roommate + housing"}</h1>
                    </div>
                </div>
            </div>

            {/* Video Component */}
            <div className="hidden sm:block align-bottom">
                <Video/>
            </div>

        </div>
    )
}

export default UserInfoSection;
