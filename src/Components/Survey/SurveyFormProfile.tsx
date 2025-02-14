import React, {useState} from "react";

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

            {/*Upload profile picture*/}
            <div className="flex flex-col items-center justify-center w-full">
                <h2 className={"header2-text mb-2 text-center"}>Upload a profile picture</h2>
                 <input
                        multiple
                        className="block w-3/4 text-md text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="large_size"
                        type="file"
                        onChange={handleImageUpload}
                    />
                    <p className="mt-1 text-sm text-text text-start">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>

                    <input id="profile-dropzone" type="file" name="file" className="hidden"
                           onChange={(e) => handleImageUpload(e)}/>
                </div>

                {/*Upload profile picture file uplaod*/}
                <div className="flex flex-col items-center justify-center w-full">
                    <h2 className={"header2-text mb-2 text-center"}>Upload a video introducing yourself to potential
                        roommates</h2>
                    <input
                        multiple
                        className="block w-3/4 text-md text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="large_size"
                        type="file"
                        onChange={handleVideoUpload}
                    />
                    <p className="mt-1 text-sm text-text text-start">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>

                {/* Display Image*/
                }
                {
                    profileImage && (
                        <img
                            src={profileImage}
                            alt="Profile Preview"
                            className="mt-4 w-4 h-4 object-cover rounded-full border-1 border-black"
                        />
                    )
                }
                {
                    introductoryVideo && (
                        <video src={introductoryVideo} controls/>
                    )
                }
        </form>
)
;
};

export default SurveyFormProfile;