import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments, faMagnifyingGlassPlus, faUser} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import MapPopup from "../Survey/Survey-Map-Popup.tsx";
import LoginPopup from "./LoginPopup.tsx";



const FirstSection = () => {
    const [isOn, setIsOn] = useState(false);

    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setPopupOpen(true);
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
    };

    return (
        <section className="bg-gradient-to-r from-white to-yellow-100 text-center pb-10 pl-0 pr-10">

            <div className="flex justify-between items-center w-full px-10 py-4">
                {/* Language Toggle (Left Side) */}
                <div className="flex items-center space-x-3">
                    <span className="text-gray-700 font-semibold text-xl">En</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={isOn}
                            onChange={() => setIsOn(!isOn)}
                        />
                        <div className="w-14 h-7 bg-red-500 rounded-full peer-checked:bg-blue-400 transition-colors duration-300">
                            <div
                                className={`absolute top-1 left-1 h-5 w-5 bg-white rounded-full transition-all duration-300 ${
                                    isOn ? "translate-x-7" : ""
                                }`}
                            ></div>
                        </div>
                    </label>
                    <span className="text-gray-700 font-semibold text-xl">Fr</span>
                </div>

                {/* Account Section (Right Side) */}
                <div className="flex items-center space-x-6" onClick={handleOpenPopup}>
                        <button className="px-4 py-2 bg-red-500 text-white font-semibold text-xl rounded-full
                        hover:bg-red-600 transition-transform duration-300 hover:scale-110"
                        >
                            Log in
                        </button>
                    <LoginPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="landingPageLogo mt-[-30px]">Roommate Link</h1>
                <h1 className="text-3xl font-bold text-red-600 mt-[-20px]">Find the Perfect Roommate or Place with Ease!</h1>

                <div className="flex items-center justify-between mt-8 max-w-6xl mx-auto">
                    <div className="max-w-2xl">
                        <div className="bg-yellow-100 w-[500px] p-4 rounded-lg shadow-2xl m-5 text-left transition-transform duration-300 hover:scale-105">
                            <div className="p-2">
                                <p className="text-xl font-normal text-red-600">
                                    Easily find a like-minded roommate or the perfect place with our smart matching system. Hassle-free, fast, and tailored to your lifestyle.
                                </p>
                            </div>
                        </div>
                        <div className="bg-yellow-100 w-[500px] p-4 rounded-lg shadow-2xl m-5 text-left transition-transform duration-300 hover:scale-105">
                            <div className="p-2">
                                <p className="text-xl font-normal text-red-600">
                                    Stay safe with verified listings and secure chats. Join thousands who found their ideal living situation—quick, easy, and stress-free!
                                </p>
                            </div>
                        </div>
                        <div className="bg-yellow-100 w-[500px] p-4 rounded-lg shadow-2xl m-5 text-left transition-transform duration-300 hover:scale-105">
                            <div className="p-2">
                                <p className="text-xl font-normal text-red-600">
                                    Find your next home effortlessly and start living comfortably with a roommate who truly matches your vibe!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="/src/Components/LandingPage/img4.jpg" alt="Create Profile" className="mx-auto mb-4 p-5" style={{ width: '500px'}} />
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
                    <img src="/src/Components/LandingPage/img3.jpg" alt="Create Profile" className="mx-auto mb-4" style={{ width: '310px'  }} />
                </div>
                <div className="flex flex-col gap-6">
                    <h2 className="text-3xl font-bold text-red-600 text-left">How It Works</h2>

                    <div className="bg-yellow-100 p-6 rounded-lg shadow-2xl max-w-md bg-gradient-to-r from-yellow-100 to-white transition-transform duration-300 hover:scale-105">
                        <div className="flex items-left gap-2 ">
                            <FontAwesomeIcon icon={faUser} className="text-2xl text-red-600" />
                            <h3 className="text-xl font-bold text-left text-red-600">Create Your Profile</h3>
                        </div>
                        <p className="text-gray-700 mt-2">Tell us about yourself and what you're looking for.</p>
                    </div>
                    <div className="bg-yellow-100 p-6 rounded-lg shadow-2xl max-w-md bg-gradient-to-r from-yellow-100 to-white transition-transform duration-300 hover:scale-105">
                        <div className="flex items-left gap-2 ">
                            <FontAwesomeIcon icon={faMagnifyingGlassPlus} className="text-2xl text-red-600 "/>
                            <h3 className="text-xl font-bold text-left text-red-600">Discover Matches</h3>
                        </div>
                        <p className="text-gray-700 mt-2">Get matched with compatible roommates or listings.</p>
                    </div>
                    <div className="bg-yellow-100 p-6 rounded-lg shadow-2xl max-w-md bg-gradient-to-r from-yellow-100 to-white transition-transform duration-300 hover:scale-105">
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

const WhyChooseUs = () => {
    const [isOn, setIsOn] = useState(false);

    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setPopupOpen(true);
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
    };
    return (
        <section className="py-16 text-center bg-gradient-to-r from-white to-yellow-100">
            <h2 className="text-3xl font-bold text-red-600">Why Choose Us?</h2>
            <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
                <div className="bg-yellow-100 p-10 rounded-lg shadow-2xl w-72 transition-transform duration-300 hover:scale-105 ">
                    <h3 className="text-2xl p-2 font-bold text-red-600">Smart Matching</h3>
                    <p className="text-gray-700 mt-2">Algorithm that connects you with ideal roommates.</p>
                </div>
                <div className="bg-white p-10 rounded-lg shadow-2xl w-72 bg-gradient-to-r from-yellow-100 to-white transition-transform duration-300 hover:scale-105">
                    <h3 className="text-2xl p-2 font-bold text-red-600">Budget-Friendly</h3>
                    <p className="text-gray-700 mt-2">Filter by rent, location, and amenities.</p>
                </div>
                <div className="bg-white p-10 rounded-lg shadow-2xl w-72 transition-transform duration-300 hover:scale-105">
                    <h3 className="text-2xl p-2 font-bold text-red-600">Verified Listings</h3>
                    <p className="text-gray-700 mt-2">No scams, only real people & places.</p>
                </div>
            </div>

            <div className="flex items-center justify-center text-center space-x-4 mt-8">
                <h2 className="text-xl px-6 py-4 font-bold text-red-600">So, What are you waiting for?</h2>
                <div onClick={handleOpenPopup}>
                    <button className="px-4 py-2 bg-red-500 text-white font-semibold text-xl rounded-full
                        hover:bg-red-600 transition-transform duration-300 hover:scale-110"
                    >
                        Join Now
                    </button>
                    <LoginPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
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
            <WhyChooseUs />
            <footer className="text-center py-6 bg-red-600 text-white">
                <div className="mb-5 flex justify-center space-x-16">
                    <button className="px-12 py-6 text-white font-semibold transition-transform duration-300 hover:scale-125">
                        Terms of Use
                    </button>
                    <button className="px-12 py-6 text-white font-semibold transition-transform duration-300 hover:scale-125">
                        FAQ
                    </button>

                        <button className="px-12 py-6 text-white font-semibold transition-transform duration-300 hover:scale-125">
                            Privacy Policy
                        </button>
                </div>

                <p className="pt-4">RoommateLink &copy; 2025</p>
            </footer>
        </div>
    );
};

export default LandingPage;
