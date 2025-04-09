import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useFormContext } from "react-hook-form";
//profile data is passed down from the survey parent component
const SurveyProfile = ({ profileData, setProfileData, onSetAvatar, onSetVideo }) => {
    const { register, formState: { errors, isValid, isDirty }, } = useFormContext();
    //Create an array with a length of 82 numbers from 18-100
    const ageArray = Array.from({ length: 82 }, (_, i) => 18 + i);
    // Handles file selection
    const handleFileChange = (event, type) => {
        const file = event.target.files[0];
        if (!file)
            return;
        if (file.size === 0) {
            alert("Selected file is empty. Please choose a valid file.");
            return;
        }
        if (type === "image") {
            onSetAvatar(file);
        }
        else {
            onSetVideo(file);
        }
    };
    const updateProfileData = (field, value) => {
        setProfileData(prevState => ({
            ...prevState,
            [field]: value
        }));
    };
    return (_jsxs("div", { className: "pt-12 space-y-8 w-full", children: [_jsx("h2", { className: "header-text-big text-center", children: "Profile" }), _jsxs("section", { className: "flex justify-center items-end space-x-3", children: [_jsxs("div", { className: "flex flex-col items-center min-h-40", children: [_jsx("label", { htmlFor: "firstname", className: "block mb-2 header2-text text-center", children: "First Name*" }), _jsx("input", { type: "input", id: "firstname", placeholder: "Last Name", min: 2, max: 50, required: true, className: "input-style-survey", ...register("firstname", {
                                    required: "First name is required",
                                    minLength: { value: 2, message: "Must be at least 2 characters" },
                                    maxLength: { value: 50, message: "Cannot exceed 50 characters" },
                                    pattern: {
                                        value: /^[A-Za-z0-9 ]+$/,
                                        message: "No special characters allowed",
                                    },
                                }), onChange: (e) => { updateProfileData("firstName", e.target.value); } }), errors.firstname && _jsx("p", { className: "text-red-600 text-center min-h-12", children: errors.firstname.message.toString() || '' })] }), _jsxs("div", { className: "flex flex-col min-h-40", children: [_jsx("label", { htmlFor: "lastname", className: "block mb-2 header2-text text-center", children: "Last Name*" }), _jsx("input", { type: "input", id: "lastname", placeholder: "Last Name", min: 2, max: 50, required: true, className: "input-style-survey", ...register("lastname", {
                                    required: "Last name is required",
                                    minLength: { value: 2, message: "Must be at least 2 characters" },
                                    maxLength: { value: 50, message: "Cannot exceed 50 characters" },
                                    pattern: {
                                        value: /^[A-Za-z0-9 ]+$/,
                                        message: "No special characters allowed",
                                    },
                                }), onChange: (e) => {
                                    updateProfileData("lastName", e.target.value);
                                } }), errors.lastname && _jsx("p", { className: "text-red-600 text-center min-h-12", children: errors.lastname.message.toString() || '' })] })] }), _jsx("section", { className: "flex justify-center", children: _jsxs("div", { className: "flex justify-center items-center w-fit space-x-3", children: [_jsx("label", { htmlFor: "age", className: "block  header2-text text-center", children: "Age" }), _jsx("select", { id: "age", required: true, className: "input-style-survey", onChange: (e) => {
                                updateProfileData("age", e.target.value);
                            }, children: ageArray.map(age => (_jsx("option", { value: age, children: age }, age))) })] }) }), _jsxs("div", { className: "flex flex-col items-center w-full", children: [_jsx("label", { htmlFor: "message", className: "block mb-2 header2-text text-center", children: "Write a short bio" }), _jsx("textarea", { id: "message", className: "input-style-survey lg:w-1/2 p-4", placeholder: "Write something...", onChange: e => updateProfileData("bio", e.target.value) })] }), _jsxs("div", { className: "flex flex-col items-center justify-center w-full", children: [_jsx("h2", { className: "header2-text mb-2 text-center", children: "Upload a profile picture" }), _jsx("input", { className: "block w-3/4 text-md text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400", id: "large_size", type: "file", accept: "image/jpeg, image/png, image/jpg", onChange: (e) => handleFileChange(e, "image") }), _jsx("p", { className: "mt-1 text-sm text-text text-start", children: "SVG, PNG, JPG or GIF (MAX. 800x400px)." })] }), _jsxs("div", { className: "flex flex-col items-center justify-center w-full", children: [_jsx("h2", { className: "header2-text mb-2 text-center", children: "Upload a video introducing yourself to potential roommates" }), _jsx("input", { className: "block w-3/4 text-md text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400", id: "large_size", type: "file", accept: "video/mp4", onChange: (e) => handleFileChange(e, "video") }), _jsx("p", { className: "mt-1 text-sm text-text text-start", children: "SVG, PNG, JPG or GIF (MAX. 800x400px)." })] }), profileData.profilePicture && (_jsx("img", { src: profileData.profilePicture, alt: "Profile Preview", className: "mt-4 w-4 h-4 object-cover rounded-full border-1 border-black" })), profileData.introductoryVideo && (_jsx("video", { src: profileData.introductoryVideo, controls: true }))] }));
};
export default SurveyProfile;
