import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { uploadProfileMedia } from "../../API/Media";
import { useNavigate } from "react-router-dom";
const UpdateFiles = ({ closeModal }) => {
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [displayAlert, setDisplayAlert] = useState("");
    const handleFileChange = (event, type) => {
        const file = event.target.files[0];
        if (!file)
            return;
        if (type === "image") {
            setImage(file);
        }
        else {
            setVideo(file);
        }
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!image && !video) {
            setDisplayAlert("Please select at least one file to upload.");
            return;
        }
        setUploading(true);
        try {
            const response = await uploadProfileMedia(image, video);
            if (!response) {
                setDisplayAlert("Upload Failed.");
            }
            setImage(null);
            setVideo(null);
            // Send close notification to parent
            closeModal();
            //Refreshes the current page
            navigate(0);
        }
        catch (error) {
            console.error("Error uploading media:", error);
            setDisplayAlert("Upload Failed.");
        }
        finally {
            setUploading(false);
        }
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col items-center justify-center  border-2 border-black p-10 w-full rounded-lg space-y-4", children: [_jsx("h1", { className: "header2-text pb-3", children: "Update your profile files" }), _jsxs("div", { className: "flex flex-col w-5/6", children: [_jsx("h2", { className: "header4-text mb-2", children: "Upload a profile picture" }), _jsx("input", { className: "block w-3/4 text-md text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400", id: "large_size", type: "file", accept: "image/jpeg, image/png, image/jpg", onChange: (e) => handleFileChange(e, "image") }), _jsx("p", { className: "mt-1 text-sm text-start", children: "(JPEG/PNG/JPG)" })] }), _jsxs("div", { className: "flex flex-col w-5/6", children: [_jsx("h2", { className: "header4-text mb-2 w-3/4", children: "Upload a video introducing yourself to potential roommates" }), _jsx("input", { className: "block w-3/4 text-md text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400", id: "large_size", type: "file", accept: "video/mp4", onChange: (e) => handleFileChange(e, "video") }), _jsx("p", { className: "mt-1 text-sm text-start", children: "(MP4/AVI/MOV)" })] }), _jsxs("div", { className: "flex flex-col items-center space-y-2", children: [displayAlert && _jsx("p", { className: "font-bold text-lg text-center", children: "Nothing to update!" }), _jsx("button", { type: "submit", className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800", children: uploading ? "Uploading..." : "Update Files" })] })] }));
};
export default UpdateFiles;
