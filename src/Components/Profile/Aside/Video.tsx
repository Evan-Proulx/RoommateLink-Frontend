import {useContext, useEffect} from "react";
import {ProfileContext} from "../ProfilePage.tsx";

function Video() {
    const imgUrl = import.meta.env.VITE_ROOT_URL + "/storage/";

    {/* This component displays user's video */}
    const userProfile = useContext(ProfileContext);

    useEffect(() => {
        console.log("TOUR", userProfile?.propertyData.house_tour)
    }, [userProfile]);
    return (
        <div className="flex space-x-4 p-4">
            {/* First video */}
            {userProfile?.profileData.introductory_video &&
                <div>
                    <iframe
                        width="100px"
                        height="150px"
                        className="max-w-4xl rounded"
                        src={imgUrl + userProfile?.profileData.introductory_video}
                        title="My Video"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            }

            {/* Second video */}
            {userProfile?.propertyData.house_tour &&
                <iframe
                width="100px"
                height="150px"
                className="max-w-4xl rounded"
                src={imgUrl + userProfile?.propertyData.house_tour}
                title="My Video"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            }
        </div>
    );
}

export default Video;
