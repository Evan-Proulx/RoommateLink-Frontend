import React from 'react';

const PropertyForm = () => {
    return (
        <div>
            <form className={"pt-12 space-y-18"}>

                <div className={"space-y-3"}><h2 className={"header-text-big text-center"}>About Your Property</h2>
                    <p className={"text-center font-medium"}>Information can be updated later in the profile tab</p>
                </div>

                {/*Property type input*/}
                <div className={"flex flex-col items-center"}>
                    <label htmlFor="Profession" className="block mb-2 header2-text text-center">Property type</label>
                    <input type="input" id="profession"
                           className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-1/2 p-4"/>
                </div>

                <div className="flex justify-center p-4 flex-wrap items-end space-x-8 space-y-8">
                    {/*Bedroom Input*/}
                    <div className={"flex flex-col justify-center items-center"}>
                        <label htmlFor="quantity-input"
                               className="block mb-2 header4-text">Bedrooms: 1</label>
                        <div className="relative flex items-center max-w-[8rem]">
                            <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input"
                                    className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <p className={"text-white"}>-</p>
                            </button>
                            <button type="button" id="increment-button" data-input-counter-increment="quantity-input"
                                    className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <p className={"text-white"}>+</p>
                            </button>
                        </div>
                    </div>

                    {/*Bathroom Input*/}
                    <div className={"flex flex-col justify-center items-center"}>
                        <label htmlFor="quantity-input"
                               className="block mb-2 header4-text">Bathrooms: 1</label>
                        <div className="relative flex items-center max-w-[8rem]">
                            <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input"
                                    className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <p className={"text-white"}>-</p>
                            </button>
                            <button type="button" id="increment-button" data-input-counter-increment="quantity-input"
                                    className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <p className={"text-white"}>+</p>
                            </button>
                        </div>
                    </div>

                    {/*Property type input*/}
                    <div className={"flex items-center"}>
                        <label htmlFor="Profession" className="block mb-2 header4-text text-center">Square ft.</label>
                        <input type="input" id="profession"
                               className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-1/3 p-4"/>

                        {/*Housing status*/}
                        <fieldset className={"flex"}>
                            <h2 className={"header4-text text-center"}>Shared Kitchen</h2>
                            <div className={"flex"}>
                                <div className="flex items-center m-4">
                                    <input id="country-option-1" type="radio" name="countries" value="USA"
                                           className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                           checked/>
                                    <label htmlFor="country-option-1"
                                           className="block ms-2  text-sm font-medium header4-text">
                                        Yes
                                    </label>
                                </div>

                                <div className="flex items-center m-4">
                                    <input id="country-option-2" type="radio" name="countries" value="Germany"
                                           className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="country-option-2"
                                           className="block ms-2 text-sm font-medium header4-text dark:text-gray-300">
                                        No
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>

                {/*Upload property picture file drop*/}
                <div className="flex flex-col items-center justify-center w-full">
                    <h2 className={"header2-text mb-2 text-center"}>Upload pictures of property 0/10</h2>
                    <label htmlFor="dropzone-file"
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
                            <p className="text-xs text-[var(--color-text)]">SVG, PNG, JPG or GIF (MAX.
                                800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden"/>
                    </label>
                </div>

                <div className={"flex flex-col items-center"}>
                    <label htmlFor="message" className="block mb-2 header2-text text-center">Write a short description of the property</label>
                    <textarea id="message" rows="4"
                              className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block lg:w-2/3 p-4"
                              placeholder="Write something..."></textarea>
                </div>
            </form>
        </div>
    );
};

export default PropertyForm;