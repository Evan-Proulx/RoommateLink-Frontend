import React from 'react';

const SurveyFormProfile = () => {
    return (
        <div className={"pt-12 space-y-8 w-full"}>
            <h2 className={"header-text-big text-center"}>Profile</h2>

            <div className={"flex flex-col items-center"}>
                <label htmlFor="message" className="block mb-2 header2-text text-center">Write a short bio</label>
                <textarea id="message" rows="4"
                          className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block lg:w-2/3 p-4"
                          placeholder="Write something..."></textarea>
            </div>

            {/*Upload profile picture file drop*/}
            <div className="flex flex-col items-center justify-center w-full">
                <h2 className={"header2-text mb-2 text-center"}>Upload a profile picture</h2>
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
                        <p className="text-xs text-text">SVG, PNG, JPG or GIF (MAX.
                            800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden"/>
                </label>
            </div>

            {/*Upload profile picture file drop*/}
            <div className="flex flex-col items-center justify-center w-full">
                <h2 className={"header2-text mb-2 text-center"}>Upload a video introducing yourself to potential roommates</h2>
                <label htmlFor="dropzone-file"
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
                    <input id="dropzone-file" type="file" className="hidden"/>
                </label>
            </div>
        </div>
    );
};

export default SurveyFormProfile;