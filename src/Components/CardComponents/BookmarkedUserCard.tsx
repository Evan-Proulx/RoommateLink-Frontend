import React, {useEffect, useState} from "react";
import {UserProfile} from "../../ProfileData";
import {useNavigate} from "react-router-dom";
import {retrievePropertyImages} from "../API/Media";
import CardActions from "./CardActions";

interface BookmarkedUserCardProps {
    user: UserProfile;
    onUnbookmark: (userId: number | undefined) => void;
}
const BookmarkedUserCard: React.FC<BookmarkedUserCardProps> = ({user, onUnbookmark}) => {
    const imgUrl = import.meta.env.VITE_ROOT_URL + "/storage/";
    const navigate = useNavigate();

    const [profileData, setProfileData] = useState<UserProfile | null>(null);
    const [propertyImage, setPropertyImage] = useState("");
    const [saved, setSaved] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    //Link Percentage
    const percentage = 79;
    const LinkPercentageColor = (percentage) => {
        if (percentage >= 80) {
            return 'text-green-500'; // Green for 80-100%
        } else if (percentage >= 65) {
            return 'text-orange-500'; // Orange for 65-79%
        } else {
            return 'text-red-500'; // Red for 64 and below
        }
    };

    useEffect(() => {
        //Set user as state
        if(user){setProfileData(user);}

        //Get property image when profileData is set
        if (profileData){getPropertyImage();}
    }, [user])


    //Unbookmark user when bookmark button is clicked
    const unBookmark = async () => {
            onUnbookmark(profileData?.profileData.account_id);

    }

    const getPropertyImage = async () => {
        //Check if user has housing property before fetching images
        if(profileData?.personalData.has_housing) {
            const propertyID = profileData?.propertyData.id;
            if (!propertyID) {return}

            try {
                const response = await retrievePropertyImages(propertyID);
                //Get first image and add root url
                const fixedImgUrl = imgUrl + response[0];
                setPropertyImage(fixedImgUrl);
            } catch (err) {
                console.log(err);
            }
        }
    }

    //Navigate to profile page with the user's profile.
    // Specify that it is not the logged in user's profile page
    const navigateToProfile = () => {
        navigate('/profile', {state: {profile: profileData, myProfileDisplayed: false}});
    }

    // TODO card should be fixed with a better loader
    if (!profileData) return <div className={"flex flex-col justify-center items-center h-screen w-full bg-gray-300"}>
        <span className={"loader"}></span>
        <h2 className={"header4-text text-center pt-4"}>Loading...</h2>
    </div>


    return (
        <div className="relative bg-white md:w-7/12 p-4 m-2 rounded-lg border-2 border-black">

            <div className={"absolute top-2 right-2 pt-2"}>
            <CardActions
                userId={profileData?.profileData.account_id}
                hasHousing={profileData?.personalData?.has_housing}
                profileView={true}
                bookmarkDisplay={true}//Doesn't display toggle switch
                onBookmarkToggle={unBookmark}
            />
            </div>

            <div className="grid grid-cols-[auto,1fr,auto] gap-x-4 items-start">
                <div className="grid grid-cols-[auto,1fr,auto] gap-x-4 items-start">
                    <div className="relative cursor-pointer" onClick={navigateToProfile}>
                        {/* First Image (Rectangle) */}
                        <img
                            src={profileData.profileData.profile_picture ? imgUrl + profileData.profileData.profile_picture :
                                "https://archive.org/download/instagram-plain-round/instagram%20dip%20in%20hair.jpg"}
                            alt="Profile"
                            className="w-28 h-28 rounded-lg"
                        />

                        {/* Second Image (Circle, Overlapping the First at Bottom-Right) */}
                        {/*Check has housing as a boolean since its stored as 1 or 0*/}
                        {Boolean(profileData.personalData.has_housing) && (
                            <img
                                src={propertyImage}
                                alt="Profile"
                                className="absolute bottom-8 right-0 w-16 h-16 rounded-full border-2 border-blue-600 transform translate-y-1/2 translate-x-1/2"
                            />
                        )}
                    </div>
                </div>

                <div className="flex flex-col w-fit space-y-1">
                    {/* Name, Icon, and Percentage in one row */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <h4 onClick={navigateToProfile} className="font-extrabold text-xl md:text-3xl cursor-pointer hover:underline">{profileData.profileData.first_name + " " + profileData.profileData.last_name}</h4>
                            <svg className="w-5 h-5 text-gray-800 dark:text-blue-700" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clipRule="evenodd"/>
                            </svg>
                        </div>
                        {/*TODO Get link % possibly? Not accessable with the data currently returned*/}
                        {/*<p className={`w-full mt-2 font-semibold text-xl ${LinkPercentageColor(profileData.compatibilityScore)}`}>*/}
                        {/*    {profileData?.compatibilityScore} % Link*/}
                        {/*</p>*/}
                    </div>

                    {/* User Details */}
                    <div className="text-gray-500 font-medium ">
                        <div className="flex items-center space-x-1">
                            <p className="font-semibold">{profileData.personalData.city + ", " + profileData.personalData.province}</p>
                            {/*Verification badge*/}
                            <svg className="w-4 h-4 text-gray-800 dark:text-gray-500" aria-hidden="true" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/>
                            </svg>
                        </div>
                        <p className="font-semibold">${profileData.personalData.budget}</p>
                        <p className="font-semibold">Looking for: {profileData.personalData.has_housing ? "Roommate" : "Roommate + Housing"}</p>
                        {/*Check has housing as a boolean since its stored as 1 or 0*/}
                        {Boolean(profileData.personalData.has_housing) && (
                            <p className="pt-2 text-xs">{`4Km away • ${profileData.propertyData.bedroom_count} rooms + ${profileData.propertyData.bathroom_count} bathrooms • ${profileData.personalData.city}, ${profileData.personalData.province}`}</p>)
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BookmarkedUserCard;

