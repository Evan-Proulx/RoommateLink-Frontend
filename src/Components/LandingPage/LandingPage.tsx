import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments, faMagnifyingGlassPlus, faUser} from "@fortawesome/free-solid-svg-icons";
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
        <section className="bg-gradient-to-r from-white to-yellow-100 text-center pb-10 pl-5 pr-5 md:pl-10 md:pr-10 lg:pl-20 lg:pr-20">
            <div className="flex justify-between items-center w-full py-4 px-5 md:px-10 lg:px-20">
                {/* Language Toggle (Left Side) */}
                <div className="flex items-center space-x-3">
                    <span className="text-gray-700 font-semibold text-lg md:text-xl">En</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={isOn}
                            onChange={() => setIsOn(!isOn)}
                        />
                        <div className="w-12 md:w-14 h-6 md:h-7 bg-red-500 rounded-full peer-checked:bg-blue-400 transition-colors duration-300">
                            <div
                                className={`absolute top-0.5 md:top-1 left-0.5 md:left-1 h-5 md:h-5 w-5 md:w-5 bg-white rounded-full transition-all duration-300 ${
                                    isOn ? "translate-x-6 md:translate-x-7" : ""
                                }`}
                            ></div>
                        </div>
                    </label>
                    <span className="text-gray-700 font-semibold text-lg md:text-xl">Fr</span>
                </div>

                {/* Account Section (Right Side) */}
                <div className="flex items-center space-x-4 md:space-x-6" onClick={handleOpenPopup}>
                    <button className="px-3 py-1.5 md:px-4 md:py-2 bg-red-500 text-white font-semibold text-lg md:text-xl rounded-full
                        hover:bg-red-600 transition-transform duration-300 hover:scale-110"
                    >
                        Log in
                    </button>
                    <LoginPopup isOpen={isPopupOpen} onClose={handleClosePopup}/>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center text-center mt-6 md:mt-0">
                <h1 className="landingPageLogo mt-[-10px] md:mt-[-30px] text-5xl md:text-6xl">Roommate Link</h1>
                <h1 className="text-xl md:text-3xl font-bold text-red-600 mt-2 md:mt-[-20px] lg:text-4xl">Find the Perfect Roommate or Place with Ease!</h1>

                <div className="flex flex-col lg:flex-row items-center justify-between mt-6 md:mt-8 max-w-6xl mx-auto">
                    {/* Image for Phone Mode (Above Text) */}
                    <div className="lg:hidden mb-4 p-3 md:p-5">
                        <img src="/src/Components/LandingPage/img4.jpg" alt="Create Profile" className="mx-auto" style={{ width: '90%', maxWidth: '500px'}} />
                    </div>
                    <div className="max-w-md md:max-w-2xl">
                        <div className="bg-yellow-100 p-4 rounded-lg shadow-2xl m-3 md:m-5 text-left transition-transform duration-300 hover:scale-105">
                            <div className="p-2">
                                <p className="text-lg md:text-xl font-normal text-red-600 lg:text-1xl">
                                    Easily find a like-minded roommate or the perfect place with our smart matching system. Hassle-free, fast, and tailored to your lifestyle.
                                </p>
                            </div>
                        </div>
                        <div className="bg-yellow-100 p-4 rounded-lg shadow-2xl m-3 md:m-5 text-left transition-transform duration-300 hover:scale-105">
                            <div className="p-2">
                                <p className="text-lg md:text-xl font-normal text-red-600 lg:text-1xl">
                                    Stay safe with verified listings and secure chats. Join thousands who found their ideal living situation—quick, easy, and stress-free!
                                </p>
                            </div>
                        </div>
                        <div className="bg-yellow-100 p-4 rounded-lg shadow-2xl m-3 md:m-5 text-left transition-transform duration-300 hover:scale-105">
                            <div className="p-2">
                                <p className="text-lg md:text-xl font-normal text-red-600 lg:text-1xl">
                                    Find your next home effortlessly and start living comfortably with a roommate who truly matches your vibe!
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Image for Normal Mode (Right Side) */}
                    <div className="hidden lg:block mt-4 lg:mt-0">
                        <img src="/src/Components/LandingPage/img4.jpg" alt="Create Profile" className="mx-auto mb-4 p-3 md:p-5" style={{ width: '500px'}} />
                    </div>
                </div>
            </div>
        </section>
    );
};


const HowItWorks = () => {
    return (
        <section className="bg-gradient-to-r from-white to-yellow-100 text-center py-8 md:py-10 pl-5 pr-5 md:pl-0 md:pr-0 lg:pl-10 lg:pr-10">
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-6 lg:text-4xl">How It Works</h2>
            <div className="mt-4 flex flex-col lg:flex-row items-center justify-center gap-6">
                {/* Image for Phone Mode (Above Text) */}
                <div className="md:hidden mb-4">
                    <img src="/src/Components/LandingPage/img3.jpg" alt="Create Profile" className="mx-auto" style={{ width: '90%', maxWidth: '310px'  }} />
                </div>
                {/* Image for Normal Mode (Left Side) */}
                <div className="hidden md:block lg:order-1">
                    <img src="/src/Components/LandingPage/img3.jpg" alt="Create Profile" className="mx-auto mb-4" style={{ width: '310px'  }} />
                </div>
                <div className="flex flex-col gap-4 md:gap-6 max-w-md lg:max-w-lg lg:order-2">
                    <div className="bg-yellow-100 p-4 md:p-6 rounded-lg shadow-2xl bg-gradient-to-r from-yellow-100 to-white transition-transform duration-300 hover:scale-105">
                        <div className="flex items-left gap-2">
                            <FontAwesomeIcon icon={faUser} className="text-xl md:text-2xl text-red-600 lg:text-3xl"/>
                            <h3 className="text-lg md:text-xl font-bold text-left text-red-600 lg:text-2xl">Create Your Profile</h3>
                        </div>
                        <p className="text-gray-700 mt-2 text-sm md:text-base text-left lg:text-lg">Tell us about yourself and what you're looking for.</p>
                    </div>
                    <div className="bg-yellow-100 p-4 md:p-6 rounded-lg shadow-2xl bg-gradient-to-r from-yellow-100 to-white transition-transform duration-300 hover:scale-105">
                        <div className="flex items-left gap-2">
                            <FontAwesomeIcon icon={faMagnifyingGlassPlus} className="text-xl md:text-2xl text-red-600 lg:text-3xl"/>
                            <h3 className="text-lg md:text-xl font-bold text-left text-red-600 lg:text-2xl">Discover Matches</h3>
                        </div>
                        <p className="text-gray-700 mt-2 text-sm md:text-base text-left lg:text-lg">Get matched with compatible roommates or listings.</p>
                    </div>
                    <div className="bg-yellow-100 p-4 md:p-6 rounded-lg shadow-2xl bg-gradient-to-r from-yellow-100 to-white transition-transform duration-300 hover:scale-105">
                        <div className="flex items-left gap-2">
                            <FontAwesomeIcon icon={faComments} className="text-xl md:text-2xl text-red-600 lg:text-3xl"/>
                            <h3 className="text-lg md:text-xl font-bold text-left text-red-600 lg:text-2xl">Connect & Move In</h3>
                        </div>
                        <p className="text-gray-700 mt-2 text-sm md:text-base text-left lg:text-lg">Chat securely, schedule visits, and finalize your plans.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const WhyChooseUs = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setPopupOpen(true);
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
    };

    return (
        <section className="py-12 md:py-16 text-center bg-gradient-to-r from-white to-yellow-100">
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-6 lg:text-4xl">Why Choose Us?</h2>
            <div className="mt-4 flex flex-col md:flex-row justify-center gap-4 md:gap-6 max-w-6xl mx-auto lg:gap-8">
                <div className="bg-yellow-100 p-6 md:p-10 rounded-lg shadow-2xl w-full max-w-sm transition-transform duration-300 hover:scale-105 self-center">
                    <h3 className="text-xl md:text-2xl p-2 font-bold text-red-600 lg:text-3xl">Smart Matching</h3>
                    <p className="text-gray-700 mt-2 text-sm md:text-base lg:text-lg">Algorithm that connects you with ideal roommates.</p>
                </div>
                <div className="bg-white p-6 md:p-10 rounded-lg shadow-2xl w-full max-w-sm bg-gradient-to-r from-yellow-100 to-white transition-transform duration-300 hover:scale-105 self-center">
                    <h3 className="text-xl md:text-2xl p-2 font-bold text-red-600 lg:text-3xl">Budget-Friendly</h3>
                    <p className="text-gray-700 mt-2 text-sm md:text-base lg:text-lg">Filter by rent, location, and amenities.</p>
                </div>
                <div className="bg-white p-6 md:p-10 rounded-lg shadow-2xl w-full max-w-sm transition-transform duration-300 hover:scale-105 self-center">
                    <h3 className="text-xl md:text-2xl p-2 font-bold text-red-600 lg:text-3xl">Verified Listings</h3>
                    <p className="text-gray-700 mt-2 text-sm md:text-base lg:text-lg">No scams, only real people & places.</p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center text-center space-y-4 mt-6 md:mt-8">
                <h2 className="text-lg md:text-xl px-4 py-2 font-bold text-red-600 lg:text-2xl">So, What are you waiting for?</h2>
                <div onClick={handleOpenPopup}>
                    <button className="px-6 py-3 bg-red-500 text-white font-semibold text-lg md:text-xl rounded-full
                        hover:bg-red-600 transition-transform duration-300 hover:scale-110 lg:px-8 lg:py-4 lg:text-2xl"
                    >
                        Join Now
                    </button>
                    <LoginPopup isOpen={isPopupOpen} onClose={handleClosePopup}/>
                </div>
            </div>
        </section>
    );
};

const LandingPage = () => {
    return (
        <div>
            <FirstSection/>
            <HowItWorks/>
            <WhyChooseUs/>
            <footer className="text-center py-4 md:py-6 bg-red-600 text-white">
                <div className="mb-4 md:mb-5 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 lg:space-x-16">
                    <button className="px-8 py-3 text-white font-semibold transition-transform duration-300 hover:scale-110 lg:px-12 lg:py-4 lg:text-lg">
                        Terms of Use
                    </button>
                    <button className="px-8 py-3 text-white font-semibold transition-transform duration-300 hover:scale-110 lg:px-12 lg:py-4 lg:text-lg">
                        FAQ
                    </button>
                    <button className="px-8 py-3 text-white font-semibold transition-transform duration-300 hover:scale-110 lg:px-12 lg:py-4 lg:text-lg">
                        Privacy Policy
                    </button>
                </div>
                <p className="pt-2 text-sm md:text-base lg:text-lg">RoommateLink &copy; 2025</p>
            </footer>
        </div>
    );
};

export default LandingPage;

