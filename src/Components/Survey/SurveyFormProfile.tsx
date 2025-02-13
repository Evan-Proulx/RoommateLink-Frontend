import {useState} from "react";

const SurveyFormProfile = () => {
    const [bio, setBio] = useState("")
    const [profileImage, setProfileImage] = useState("");
    const [introductoryVideo, setIntroductoryVideo] = useState("");

    // Handles file selection
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };
    const handleVideoUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const videoUrl = URL.createObjectURL(file);
            setIntroductoryVideo(videoUrl);
        }
    };
    return (
        <form method="post" className={"pt-12 space-y-8 w-full"}>
                <h2 className={"header-text-big text-center"}>Profile</h2>

            <div className={"flex flex-col items-center"}>
                <label htmlFor="message" className="block mb-2 header2-text text-center">Write a short bio</label>
                <textarea id="message"
                          className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block lg:w-2/3 p-4"
                          placeholder="Write something..."
                          onChange={e => setBio(e.target.value)}/>
            </div>

            {/*Upload profile picture file drop*/}
            <div className="flex flex-col items-center justify-center w-full">
                <h2 className={"header2-text mb-2 text-center"}>Upload a profile picture</h2>
                <label htmlFor="profile-dropzone"
                       className="flex flex-col items-center justify-center w-full h-64 border-2 border-[var(--color-text)] border-dashed rounded-lg cursor-pointer hover:bg-[var(--color-primary-hovered)] transition duration-200 ease-in-out">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-[var(--color-text)]" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-[var(--color-text)]"><span
                            className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-text">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="profile-dropzone" type="file" name="file" className="hidden" onChange={(e) => handleImageUpload(e)}/>
                </label>
            </div>

            {/*Upload profile picture file drop*/}
            <div className="flex flex-col items-center justify-center w-full">
                <h2 className={"header2-text mb-2 text-center"}>Upload a video introducing yourself to potential roommates</h2>
                <label htmlFor="video-dropzone"
                       className="flex flex-col items-center justify-center w-full h-64 border-2 border-[var(--color-text)] border-dashed rounded-lg cursor-pointer hover:bg-[var(--color-primary-hovered)] transition duration-200 ease-in-out">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-text" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-[var(--color-text)]"><span
                            className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-[var(--color-text)]">SVG, PNG, JPG or GIF (MAX.
                            800x400px)</p>
                    </div>
                    <input id="video-dropzone" type="file" name="file" className="hidden" onChange={(e) => handleVideoUpload(e)}/>
                </label>
            </div>

            {/* Display Image*/}
            {profileImage && (
                <img
                    src={profileImage}
                    alt="Profile Preview"
                    className="mt-4 w-4 h-4 object-cover rounded-full border-1 border-black"
                />
            )}
            {introductoryVideo && (
                <video src={introductoryVideo} controls/>
            )}
        </form>
    );
};

export default SurveyFormProfile;