import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Video from "../Aside/Video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../ProfilePage";
import ProfileImg from "../Aside/ProfileImg";
import { Edit, PersonPinCircle, Search } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import Modal from "../../Modal";
import UpdateProfile from "../UpdateForms/UpdateProfile";
import UpdateFiles from "../UpdateForms/UpdateFiles";
import UpdateProperty from "../UpdateForms/UpdateProperty";
import { isUserVerified } from "../../API/Verification";
import { Tooltip } from "@mui/material";
;
function UserInfoSection({ myProfileDisplayed }) {
    const imgUrl = import.meta.env.VITE_ROOT_URL + "/storage/";
    //Get user data
    const userProfile = useContext(ProfileContext);
    const user = userProfile;
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [isVerified, setIsVerified] = useState(null);
    // Allows for modal display and content to be set onClick
    const setModal = (content) => {
        setModalContent(content);
        setModalIsOpen(true);
    };
    useEffect(() => {
        console.log("MY PROFILE", myProfileDisplayed);
    }, []);
    // Check user verification status
    useEffect(() => {
        const checkVerification = async () => {
            const verified = await isUserVerified();
            setIsVerified(verified);
        };
        checkVerification();
    }, []);
    // Toggle modal display
    return (_jsxs("div", { className: "p-4 flex justify-between items-start w-full shadow-md", children: [_jsxs("div", { className: "flex space-x-3 px-4 lg:px-12", children: [_jsxs("div", { className: "relative", children: [_jsx(ProfileImg, { url: imgUrl + user.profileData.profile_picture, percentage: user.compatibilityScore ? user.compatibilityScore : null, myProfileDisplayed: myProfileDisplayed }), myProfileDisplayed &&
                                _jsx("div", { onClick: () => setModal("updateFiles"), title: "Edit Profile Picture", className: "absolute bottom-8 right-0 p-1 rounded-full bg-gray-300 transform\r\n                               -translate-y-8 -translate-x-1/4 cursor-pointer hover:bg-gray-400 ease-in-out", children: _jsx(Edit, { sx: { fontSize: 28 } }) })] }), _jsxs("div", { className: "", children: [_jsxs("div", { className: "flex items-center m-3", children: [_jsxs("div", { className: "flex", children: [myProfileDisplayed &&
                                                _jsx("div", { title: "Edit Personal Info", children: _jsx(Edit, { className: "cursor-pointer", onClick: () => setModal("updateProfile") }) }), _jsx("h1", { className: "text-5xl font-bold text-start", children: user.profileData.first_name + " " + user.profileData.last_name })] }), isVerified && (_jsx(Tooltip, { title: "User verified their account with ID", arrow: true, children: _jsx("svg", { className: "w-10 h-10 text-gray-800 dark:text-blue-700", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { fillRule: "evenodd", d: "M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z", clipRule: "evenodd" }) }) }))] }), _jsxs("div", { className: "flex items-center m-3", children: [_jsx(PersonPinCircle, { sx: { color: grey[600] } }), _jsx("h1", { className: "pl-1 text-md lg:text-xl font-semibold text-center text-gray-500", children: user.personalData.city + ", " + user.personalData.province })] }), _jsxs("div", { className: "flex items-center m-3", children: [_jsx(FontAwesomeIcon, { icon: faPiggyBank, className: "text-gray-500 text-xl" }), _jsxs("h1", { className: "pl-2 text-md lg:text-xl font-semibold text-center text-gray-500", children: ["Budget: $", user.personalData.budget, "/month"] })] }), _jsxs("div", { className: "flex items-center m-3", children: [_jsx(Search, { sx: { color: grey[600] } }), _jsxs("h1", { className: "pl-1 text-md lg:text-xl font-semibold text-center text-gray-500", children: ["Looking for: ", user.personalData.has_housing ? "Roommate" : "Roommate + Housing"] })] })] })] }), _jsx("div", { className: "hidden sm:block align-bottom", children: _jsx(Video, {}) }), _jsxs(Modal, { open: modalIsOpen, close: () => setModalIsOpen(false), children: [modalContent === "updateProfile" &&
                        _jsx(UpdateProfile, { closeModal: () => setModalIsOpen(false) }), modalContent === "updateFiles" &&
                        _jsx(UpdateFiles, { closeModal: () => setModalIsOpen(false) }), modalContent === "updateProperty" && user.propertyData &&
                        _jsx(UpdateProperty, { property: user.propertyData, closeModal: () => setModalIsOpen(false) })] })] }));
}
export default UserInfoSection;
