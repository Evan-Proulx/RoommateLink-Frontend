import React, {useState} from 'react';
import {uploadProfileMedia} from './API/Profile.ts'
const ImageUploadTest = () => {
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (event, type) => {
        const file = event.target.files[0];
        if (!file) return;

        if (type === "image") {
            setImage(file);
        } else {
            setVideo(file);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!image && !video) {
            alert("Please select at least one file to upload.");
            return;
        }

        setUploading(true);
        try {
            const response = await uploadProfileMedia(image, video);

            if (!response) {
                throw new Error("Upload failed");
            }

            alert("Files uploaded successfully!");
            setImage(null);
            setVideo(null);
        } catch (error) {
            alert("Error uploading files: " + error.message);
        } finally {
            setUploading(false);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg shadow-md max-w-md mx-auto">
            <div>
                <label className="block text-sm font-medium">Profile Picture (JPEG/PNG/JPG)</label>
                <input type="file" accept="image/jpeg, image/png, image/jpg"
                       onChange={(e) => handleFileChange(e, "image")} className="mt-1 block w-full"/>
            </div>
            <div>
                <label className="block text-sm font-medium">Introductory Video (MP4/AVI/MOV)</label>
                <input type="file" accept="video/mp4, video/avi, video/quicktime"
                       onChange={(e) => handleFileChange(e, "video")} className="mt-1 block w-full"/>
            </div>
            <button type="submit" disabled={uploading} className="w-full">
                {uploading ? "Uploading..." : "Upload Files"}
            </button>
        </form>
    );
};

export default ImageUploadTest;