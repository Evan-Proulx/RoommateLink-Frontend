import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

//propertyData is passed down from the survey parent component
const PropertyForm = ({ propertyData, setPropertyData, onSetPropertyImages}) => {
    const [displayImages, setDisplayImages] = useState<File[]>([]);

    //update images from file input. Allow for images to be added more than once
    const handleFilesAdd = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (displayImages.length <= 10) {
            if (event.target.files) {
                //Get the files being added
                const files = Array.from(event.target.files);
                if (files.length + displayImages.length < 10){
                    //Update displayImages with new files
                    const updatedFiles: File[] = [...displayImages, ...files];
                    setDisplayImages(updatedFiles);
                    onSetPropertyImages(updatedFiles)
                }
            }
        }
    }

    const updatePropertyData = (field, value) => {
        setPropertyData(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    return (
        <div>
            <form className={"pt-12 space-y-8 pb-8"}>

                <div className={""}>
                    <h2 className={"header-text-big text-center"}>About Your Property</h2>
                </div>

                {/*Property type input*/}
                <div className={"flex flex-col items-center"}>
                    <label htmlFor="property-type" className="block mb-2 header2-text text-center">Property type</label>
                    <select id="property-type"
                           className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-1/2 p-4"
                            onChange={(e) => updatePropertyData("propertyType", e.target.value)}>
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

                <div className="flex justify-center p-4 flex-wrap items-end space-x-8">
                    {/*Bedroom Input*/}
                    <div className={"flex flex-col justify-center items-center pb-8"}>
                        <label htmlFor="quantity-input"
                               className="block mb-2 header4-text">Bedrooms: {propertyData.bedroomCount}</label>
                        <div className="relative flex items-center max-w-[8rem]">
                            <button type="button"
                                    id="decrement-button"
                                    data-input-counter-decrement="quantity-input"
                                    onClick={() => updatePropertyData("bedroomCount", Math.max(0, propertyData.bedroomCount - 1))}//decrement count by 1. Math.max prevents count going below 0
                                    className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <p className={"text-white"}>
                                    <FontAwesomeIcon icon={faMinus}/>
                                </p>
                            </button>
                            <button type="button"
                                    id="increment-button"
                                    data-input-counter-increment="quantity-input"
                                    onClick={() => updatePropertyData("bedroomCount", propertyData.bedroomCount + 1)}//increment count by 1
                                    className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <p className={"text-white"}>
                                    <FontAwesomeIcon className={" text-gray-900 dark:text-white"} icon={faPlus}/>
                                </p>
                            </button>
                        </div>
                    </div>

                    {/*Bathroom Input*/}
                    <div className={"flex flex-col justify-center items-center pb-8"}>
                        <label htmlFor="quantity-input"
                               className="block mb-2 header4-text">Bathrooms: {propertyData.bathroomCount}</label>
                        <div className="relative flex items-center max-w-[8rem]">

                            <button type="button"
                                    id="decrement-button"
                                    data-input-counter-decrement="quantity-input"
                                    onClick={() => updatePropertyData("bathroomCount", Math.max(0, propertyData.bathroomCount - 1))}//decrement count by 1. Math.max prevents count going below 0
                                    className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <p className={"text-white"}>
                                    <FontAwesomeIcon icon={faMinus}/>
                                </p>
                            </button>

                            <button type="button" id="increment-button" data-input-counter-increment="quantity-input"
                                    onClick={() => updatePropertyData("bathroomCount", propertyData.bathroomCount + 1)}//increment count by 1
                                    className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <p className={"text-white"}>
                                    <FontAwesomeIcon className={" text-gray-900 dark:text-white"} icon={faPlus}/>
                                </p>
                            </button>

                        </div>
                    </div>

                    {/*Square feet input*/}
                    <div className={"flex items-center "}>
                        <div className={"flex flex-col"}>
                            <label htmlFor="feet" className="block mb-2 header4-text text-center">Square ft.</label>
                            <input type="number" value={propertyData.squareFeet} min={100} max={100000} step={100} id="feet"
                                   onChange={(e) => updatePropertyData("squareFeet", +e.target.value)}
                                   className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block p-4"/>
                        </div>

                        {/*Housing status*/}
                        <fieldset className={""}>
                            <h2 className={"header4-text text-center"}>Shared Kitchen</h2>
                            <div className={"flex"}>

                                <div className="flex items-center m-4">
                                    <input id="country-option-1" type="radio" name="countries" value="USA"
                                           className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                           onChange={() => updatePropertyData("sharedKitchen", true)}
                                           checked={propertyData.sharedKitchen}/>
                                    <label htmlFor="country-option-1"
                                           className="block ms-2  text-sm font-medium header4-text">
                                        Yes
                                    </label>
                                </div>

                                <div className="flex items-center m-4">
                                    <input id="country-option-2" type="radio" name="countries" value="Germany"
                                           className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                           onChange={() => updatePropertyData("sharedKitchen", false)}
                                           checked={!propertyData.sharedKitchen}/>
                                    <label htmlFor="country-option-2"
                                           className="block ms-2 text-sm font-medium header4-text dark:text-gray-300">
                                        No
                                    </label>
                                </div>
                            </div>
                        </fieldset>

                    </div>
                </div>

                <div className={"flex flex-col items-center"}>
                    <label htmlFor="message" className="block mb-2 header2-text text-center">Write a short description
                        of the property</label>
                    <textarea id="message" rows="4"
                              className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-full lg:w-2/3 p-4"
                              placeholder="Write something..."
                              value={propertyData.description}
                              onChange={(e) => updatePropertyData("description", e.target.value)}/>
                </div>

                {/*Upload property picture file drop*/}
                <div className="flex flex-col items-center justify-center">
                    <h2 className="header2-text mb-2 text-center">Upload pictures of property {displayImages.length}/10</h2>
                    <input
                        multiple
                        className="block w-3/4 text-md text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="large_size"
                        type="file"
                        onChange={handleFilesAdd}
                    />
                    <p className="mt-1 text-sm text-text text-start">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>

                {/*Display images*/}
                <div className="flex gap-3 mt-2 overflow-x-auto">
                    {displayImages.map((image, index) => (
                        <img key={index} src={URL.createObjectURL(image)} alt={`Upload Preview ${index}`}
                             className="w-32 h-32 object-cover rounded-lg"/>
                    ))}
                </div>
            </form>
        </div>
    );
};

export default PropertyForm;