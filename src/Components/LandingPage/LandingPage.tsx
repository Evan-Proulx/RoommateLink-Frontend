import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments, faMagnifyingGlassPlus, faUser} from "@fortawesome/free-solid-svg-icons";

const FirstSection = () => {
    return (
        <section className="bg-gradient-to-r from-white to-yellow-100 text-center py-10 pl-0 pr-10">
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl m-3 pb-12 font-bold text-red-600">RoommateLink</h1>
                <h1 className="text-4xl font-bold text-red-600">Find the Perfect Roommate or Place with Ease!</h1>

                <div className="flex items-center justify-between mt-8 max-w-6xl mx-auto">
                    <div className="max-w-2xl">
                        <div className="bg-yellow-100 w-[470px] p-7 rounded-lg shadow-2xl m-5 text-left">
                            <p className="text-4xl font-normal text-red-600">
                                Connect with like-minded roommates or discover the perfect place in minutes. Fast, safe, and easy!
                            </p>
                        </div>


                        <button className="mt-2 px-6 py-3 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-red-600">
                            Join Now
                        </button>
                    </div>
                    <div>
                        <img src="/src/Components/LandingPage/img1.jpg" alt="Create Profile" className="mx-auto mb-4 p-5 shadow-2xl" style={{ width: '520px', filter: 'blur(2px)' }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

const HowItWorks = () => {
    return (
        <section className="bg-gradient-to-r from-white to-yellow-100 text-center py-10 pl-0 pr-10">
            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6">
                <div>
                    <img src="/src/Components/LandingPage/img2.jpg" alt="Create Profile" className="mx-auto mb-4" style={{ width: '320px' ,  filter: 'blur(2px)' }} />
                </div>
                <div className="flex flex-col gap-6">
                    <h2 className="text-3xl font-bold text-red-600 text-left">How It Works</h2>

                    <div className="bg-yellow-100 p-6 rounded-lg shadow-2xl max-w-md ">
                        <div className="flex items-left gap-2 ">
                            <FontAwesomeIcon icon={faUser} className="text-2xl text-red-600" />
                            <h3 className="text-xl font-bold text-left text-red-600">Create Your Profile</h3>
                        </div>
                        <p className="text-gray-700 mt-2">Tell us about yourself and what you're looking for.</p>
                    </div>
                    <div className="bg-yellow-100 p-6 rounded-lg shadow-2xl max-w-md">
                        <div className="flex items-left gap-2 ">
                            <FontAwesomeIcon icon={faMagnifyingGlassPlus} className="text-2xl text-red-600"/>
                            <h3 className="text-xl font-bold text-left text-red-600">Discover Matches</h3>
                        </div>
                        <p className="text-gray-700 mt-2">Get matched with compatible roommates or listings.</p>
                    </div>
                    <div className="bg-yellow-100 p-6 rounded-lg shadow-2xl max-w-md">
                        <div className="flex items-left gap-2 ">
                            <FontAwesomeIcon icon={faComments} className="text-2xl text-red-600 " />
                            <h3 className="text-xl font-bold text-left text-red-600">Connect & Move In</h3>
                        </div>
                        <p className="text-gray-700 mt-2 text-left">Chat securely, schedule visits, and finalize your plans.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};



const LandingPage = () => {
    return (
        <div>
            <FirstSection />
            <HowItWorks />

        </div>
    );
};

export default LandingPage;
