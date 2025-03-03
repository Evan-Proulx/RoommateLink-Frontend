import React, {useState} from "react";
import {useForm} from "react-hook-form";

//profile data is passed down from the survey parent component
const SurveyFormProfile = ({profileData, setProfileData, setValidationError}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger
    } = useForm({ mode: "onBlur" });

    //Create an array with a length of 82 numbers from 18-100
    const ageArray = Array.from({ length: 82 }, (_, i) => 18 + i)

    // Handles file selection
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            updateProfileData("profilePicture",imageUrl);
        }
    };
    const handleVideoUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const videoUrl = URL.createObjectURL(file);
            updateProfileData("introductoryVideo", videoUrl);
        }
    };

    const updateProfileData = (field, value) => {
        setProfileData(prevState => ({
            ...prevState,
            [field]: value
        }));
    };


    return (
        <form method="post" className={"pt-12 space-y-8 w-full"}>
            <h2 className={"header-text-big text-center"}>Profile</h2>

            {/*Name input*/}
            <section className={"flex justify-center items-end space-x-3"}>
                {/*Firstname input -- validation ensures it is required, length is between 2 and 50 and has no special characters*/}
                <div className={"flex flex-col items-center min-h-40"}>
                    <label htmlFor="firstname" className="block mb-2 header2-text text-center">First Name</label>
                    <input type="input" id="firstname" placeholder={"Last Name"} min={2} max={50} required
                           className="input-style-survey"
                           {...register("firstname", {
                               required: "First name is required",
                               minLength: { value: 2, message: "Must be at least 2 characters" },
                               maxLength: { value: 50, message: "Cannot exceed 50 characters" },
                               pattern: {
                                   value: /^[A-Za-z0-9 ]+$/,
                                   message: "No special characters allowed",
                               },
                           })}
                           onChange={(e) => {updateProfileData("firstName", e.target.value);}}/>
                    {/*Display validation error*/}
                    {errors.firstname && <p className={"text-red-600 text-center min-h-12"}>{errors.firstname.message}</p>}
                </div>

                {/*Lastname input validation ensures it is required, length is between 2 and 50 and has no special characters*/}
                <div className={"flex flex-col min-h-40"}>
                    <label htmlFor="lastname" className="block mb-2 header2-text text-center">Last Name</label>
                    <input type="input" id="lastname" placeholder={"Last Name"} min={2} max={50} required
                           className="input-style-survey"
                           {...register("lastname", {
                               required: "Last name is required",
                               minLength: { value: 2, message: "Must be at least 2 characters" },
                               maxLength: { value: 50, message: "Cannot exceed 50 characters" },
                               pattern: {
                                   value: /^[A-Za-z0-9 ]+$/,
                                   message: "No special characters allowed",
                               },
                           })}
                           onChange={(e) => {updateProfileData("lastName", e.target.value);
                           }}/>
                    {/*Display validation error*/}
                    {errors.lastname && <p className={"text-red-600 text-center min-h-12"}>{errors.lastname.message}</p>}
                </div>
            </section>


            <section className={"flex justify-center"}>
                <div className={"flex justify-center items-center w-fit space-x-3"}>
                    {/*Age dropdown*/}
                    <label htmlFor="age" className="block  header2-text text-center">Age</label>
                    <select id="age" required
                            className="input-style-survey"
                            onChange={(e) => {
                                updateProfileData("age", e.target.value);
                            }}>
                        {/* Map through age array and set age option for each index */}
                        {ageArray.map(age => (
                            <option key={age} value={age}>{age}</option>
                        ))}
                    </select>
                </div>
            </section>

            <div className={"flex flex-col items-center w-full"}>
                <label htmlFor="message" className="block mb-2 header2-text text-center">Write a short bio</label>
                <textarea id="message"
                          className="input-style-survey lg:w-1/2 p-4"
                          placeholder="Write something..."
                          onChange={e => updateProfileData("bio", e.target.value)}/>
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
                profileData.profilePicture && (
                    <img
                        src={profileData.profilePicture}
                        alt="Profile Preview"
                        className="mt-4 w-4 h-4 object-cover rounded-full border-1 border-black"
                    />
                )
            }
            {
                profileData.introductoryVideo && (
                    <video src={profileData.introductoryVideo} controls/>
                )
            }
        </form>
    )
        ;
};

export default SurveyFormProfile;