import React from 'react';

const SurveyForm2 = () => {
    return (
        <div>
            <div className={"h-screen pt-24"}>
                <form className={"space-y-24"}>
                    <h2 className={"header-text-big text-center"}>About You</h2>

                    <div className={"flex space-x-12"}>
                        <div className={"flex flex-col"}>
                            {/*Education dropdown*/}
                            <label htmlFor="education" className="block mb-2 header2-text text-center">Education
                                Status*</label>
                            <select id="education"
                                    className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-full p-4"
                                    required>

                                <option>Enrolled College/University</option>
                                <option>Not In School</option>
                            </select>
                        </div>

                        <div className={"flex flex-col"}>
                            <label htmlFor="cities" className="block mb-2 header2-text text-center">Select
                                School</label>
                            <select id="cities"
                                    className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-full p-4">
                                <option>St.Clair College</option>
                                <option>University Of Windsor</option>
                            </select>
                        </div>
                    </div>

                    <label htmlFor="Profession" className="block mb-2 header2-text text-center">Profession</label>
                    <input type="input" id="profession"
                           className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-full p-4"/>

                    <label htmlFor="Profession" className="block mb-2 header2-text text-center">Profession</label>
                    <input type="input" id="profession"
                           className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-full p-4"/>


                </form>
                

            </div>
        </div>
    );
};

export default SurveyForm2;