import React, {useEffect, useState} from 'react';
import {PersonalData, PropertyData} from "../../../ProfileData";
import {updateProfile} from "../../API/Profile";
import {uploadHouseTour, uploadPropertyImages} from "../../API/Media";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

interface UpdatePropertyProps {
    property: PropertyData,
    //property and personalData are passed
    // when the user doesn't have a property and is creating one for the first time
    newProperty?: boolean,
    personalData?: PersonalData | undefined,
    closeModal: () => void,
}

const UpdateProperty = ({property, newProperty = false, personalData = undefined, closeModal}: UpdatePropertyProps) => {
    const navigate = useNavigate();
    const [updatedPropertyData, setUpdatedPropertyData] = useState<PropertyData | null>(null);
    const [updatedPersonalData, setUpdatedPersonalData] = useState<PersonalData | null>(null);
    const [displayAlert, setDisplayAlert] = useState(false);
    const [propertyImages, setPropertyImages] = useState<File[]>([]);
    const [houseTour, setHouseTour] = useState<File>();

    //Set state for passed properties
    useEffect(() => {
        if (property) {
            setUpdatedPropertyData(property);
        }

        if (newProperty && personalData !== undefined) {
            setUpdatedPersonalData(personalData)
        }
    }, []);

    //update images from file input. Allow for images to be added more than once
    const handleFilesAdd = (event: React.ChangeEvent<HTMLInputElement>, type: string) => {
        if (type === "image") {
            if (propertyImages.length <= 10) {
                if (event.target.files) {
                    //Get the files being added
                    const files = Array.from(event.target.files);
                    if (files.length + propertyImages.length < 10) {
                        //Update propertyImages with new files
                        const updatedFiles: File[] = [...propertyImages, ...files];
                        setPropertyImages(updatedFiles);
                    }
                }
            }
        } else if (type === "video") {
            if (event.target.files) {
                const files = event.target.files;
                const file = files[0];
                setHouseTour(file);
            }
        }
    }

    //////Update the state for property data
    const handleUpdatePropertyData = (field: string, value: any) => {
        setUpdatedPropertyData((prev) => {
            if (!prev) return prev;
            return {
                ...prev,
                [field]: value
            }
        });
        console.log(updatedPropertyData);
    };

    const updateHousingStatus = async () => {
        if (newProperty && updatedPersonalData !== null) {
            // Set housing status to true in the personalData object before updating
            //This isnt done in the state because it is asynchronous.
            // The api call wouldnt get the passed value in time.
            const updatedData: PersonalData = {
                ...updatedPersonalData,
                has_housing: true
            };

            // Update the personal data to set the housing status to true when a property is created
            try {
                const response = await updateProfile("personal", updatedData);
                console.log(response);
            } catch (err) {
                console.log(err)
            }
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Only update if new information is set
        if (updatedPropertyData === property && propertyImages.length === 0) {
            // Alert the user that there is nothing to update
            setDisplayAlert(true);
            return;
        }

        console.log("PROFILE", updatedPropertyData)
        try {
            // Pass the data and the type of data to update
            await updateProfile("property", updatedPropertyData);

            // Upload images if they exist. This also deletes the user's previous images
            if (propertyImages.length > 0) {
                await uploadPropertyImages(propertyImages)
            }
            // Upload tour video
            if (houseTour){
                await uploadHouseTour(houseTour);
            }
            console.log("Profile updated successfully");

            //Once Property is updated, update the user's housing status
            // if they are creating the property for the first time
            if (newProperty) {
                await updateHousingStatus()
            }

            // Send close notification to parent
            closeModal();
            //Refreshes the current page
            navigate(0);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form onSubmit={handleSubmit}
              className={"flex flex-col justify-center items-center border-2 border-black p-10 rounded-lg space-y-8"}>
            <h1 className={"header2-text pb-3"}>Update your profile info</h1>

            {/*Property Type Select*/}
            <div className={"flex items-center space-x-8"}>
                <div className={"flex flex-col items-center"}>
                    <label htmlFor="property-type" className="block mb-2 header4-text text-center">Property type</label>
                    <select id="property-type"
                            className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block p-3"
                            onChange={(e) => handleUpdatePropertyData("property_type", e.target.value)}>
                        <option>Apartment</option>
                        <option>Dorm</option>
                        <option>Condo</option>
                        <option>Townhouse</option>
                        <option>Detached House</option>
                        <option>Studio</option>
                        <option>Loft</option>
                        <option>Basement</option>
                    </select>
                </div>

                {/*Bedroom Stepper*/}
                <div className={"flex flex-col justify-center items-center"}>
                    <label htmlFor="quantity-input"
                           className="block mb-2 header4-text">Bedrooms: {updatedPropertyData?.bedroom_count}</label>
                    <div className="relative flex items-center max-w-[8rem]">

                        <button type="button"
                                id="decrement-button"
                                data-input-counter-decrement="quantity-input"
                                onClick={() => handleUpdatePropertyData("bedroom_count", Math.max(0, updatedPropertyData?.bedroom_count - 1))}//decrement count by 1. Math.max prevents count going below 0
                                className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                            <p className={"text-white"}>
                                <FontAwesomeIcon icon={faMinus}/>
                            </p>
                        </button>

                        <button type="button"
                                id="increment-button"
                                data-input-counter-increment="quantity-input"
                                onClick={() => handleUpdatePropertyData("bedroom_count", updatedPropertyData?.bedroom_count + 1)}//increment count by 1
                                className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                            <p className={"text-white"}>
                                <FontAwesomeIcon className={" text-gray-900 dark:text-white"} icon={faPlus}/>
                            </p>
                        </button>

                    </div>
                </div>

                {/*Bathroom Stepper*/}
                <div className={"flex flex-col justify-center items-center "}>
                    <label htmlFor="quantity-input"
                           className="block mb-2 header4-text">Bathrooms: {updatedPropertyData?.bathroom_count}</label>
                    <div className="relative flex items-center max-w-[8rem]">

                        <button type="button"
                                id="decrement-button"
                                data-input-counter-decrement="quantity-input"
                                onClick={() => handleUpdatePropertyData("bathroom_count", Math.max(0, updatedPropertyData?.bathroom_count - 1))}//decrement count by 1. Math.max prevents count going below 0
                                className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                            <p className={"text-white"}>
                                <FontAwesomeIcon icon={faMinus}/>
                            </p>
                        </button>

                        <button type="button" id="increment-button" data-input-counter-increment="quantity-input"
                                onClick={() => handleUpdatePropertyData("bathroom_count", updatedPropertyData?.bathroom_count + 1)}//increment count by 1
                                className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                            <p className={"text-white"}>
                                <FontAwesomeIcon className={" text-gray-900 dark:text-white"} icon={faPlus}/>
                            </p>
                        </button>
                    </div>
                </div>
            </div>


            <div className="flex justify-center flex-wrap items-end space-x-40">

                {/*Square feet input*/}
                <div className={"flex items-center "}>
                    <div className={"flex flex-col"}>
                        <label htmlFor="feet" className="block mb-2 header4-text text-center">Square ft.</label>
                        <input type="number" value={updatedPropertyData?.square_feet} min={100} max={100000}
                               step={100} id="feet"
                               onChange={(e) => handleUpdatePropertyData("square_feet", +e.target.value)}
                               className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block p-4"/>
                    </div>

                    {/*Shared kitchen select*/}
                    <fieldset className={""}>
                        <h2 className={"header4-text text-center"}>Shared Kitchen</h2>
                        <div className={"flex"}>

                            <div className="flex items-center m-4">
                                <input id="kitchen-option-1" type="radio" name="shared_kitchen" value="true"
                                       className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                       onChange={() => handleUpdatePropertyData("shared_kitchen", true)}
                                       checked={updatedPropertyData?.shared_kitchen}/>
                                <label htmlFor="country-option-1"
                                       className="block ms-2  text-sm font-medium header4-text">
                                    Yes
                                </label>
                            </div>

                            <div className="flex items-center m-4">
                                <input id="kitchen-option-2" type="radio" name="shared_kitchen" value="false"
                                       className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                       onChange={() => handleUpdatePropertyData("shared_kitchen", false)}
                                       checked={!updatedPropertyData?.shared_kitchen}/>
                                <label htmlFor="country-option-2"
                                       className="block ms-2 text-sm font-medium header4-text dark:text-gray-300">
                                    No
                                </label>
                            </div>

                        </div>
                    </fieldset>

                </div>
            </div>

            {/*Property description input*/}
            <div className={"flex flex-col items-center w-full"}>
                <label htmlFor="message" className="block mb-2 header4-text">Write a short description
                    of the property</label>
                <textarea id="message" rows={4}
                          className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-full p-4"
                          placeholder="Write something..."
                          value={updatedPropertyData?.description}
                          onChange={(e) => handleUpdatePropertyData("description", e.target.value)}/>
            </div>

            {/*Upload property picture file drop*/}
            <div className={"w-3/4"}>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="header4-text mb-2 text-center">Upload pictures of
                        property {propertyImages.length}/10</h2>
                    <input
                        multiple
                        className="block w-3/4 text-md text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="large_size"
                        type="file"
                        onChange={(e) => handleFilesAdd(e, "image")}
                    />
                    <p className="mt-1 text-sm text-text text-start">(JPEG/PNG/JPG)</p>
                </div>

                {/*Display images*/}
                <div className="flex gap-3 mt-2 w-fit overflow-x-auto">
                    {propertyImages.map((image, index) => (
                        <img key={index} src={URL.createObjectURL(image)} alt={`Upload Preview ${index}`}
                             className="w-16 h-16 object-cover rounded-lg"/>
                    ))}
                </div>
            </div>

            {/*Upload introductory video uplaod*/}
            <div className="flex flex-col items-center justify-center w-3/4">
                <h2 className={"header4-text mb-2 text-center"}>Upload a tour of your property</h2>
                <input
                    className="block w-3/4 text-md text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="large_size"
                    type="file"
                    accept="video/mp4"
                    onChange={(e) => handleFilesAdd(e, "video")}/>
                <p className="mt-1 text-sm text-text text-start">MP4, AVI, MOV</p>
            </div>

            <div className={"flex flex-col items-center space-y-2"}>
                {displayAlert && <p className={"font-bold text-lg text-center"}>Nothing to update!</p>}

                <button type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default UpdateProperty;