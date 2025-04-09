import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useEffect } from "react";
import { ProfileContext } from "../ProfilePage";
function Video() {
    const imgUrl = import.meta.env.VITE_ROOT_URL + "/storage/";
    { /* This component displays user's video */ }
    const userProfile = useContext(ProfileContext);
    useEffect(() => {
        console.log("TOUR", userProfile?.propertyData.house_tour);
    }, [userProfile]);
    return (_jsxs("div", { className: "flex space-x-4 p-4", children: [userProfile?.profileData.introductory_video &&
                _jsx("div", { children: _jsx("iframe", { width: "100px", height: "150px", className: "max-w-4xl rounded", src: imgUrl + userProfile?.profileData.introductory_video, title: "My Video", allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }) }), userProfile?.propertyData.house_tour &&
                _jsx("iframe", { width: "100px", height: "150px", className: "max-w-4xl rounded", src: imgUrl + userProfile?.propertyData.house_tour, title: "My Video", allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true })] }));
}
export default Video;
