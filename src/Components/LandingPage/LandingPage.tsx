import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments, faMagnifyingGlassPlus, faUser} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const FirstSection = () => {
    return (
        <section className="bg-gradient-to-r from-white to-yellow-100 text-center pb-10 pl-0 pr-10">

            <div className="flex justify-end items-center space-x-4 pr-10">
                <h2 className="text-xl px-6 pt-4 font-bold text-red-600">Have an account?</h2>
                <Link to="/login">
                    <button className="mt-2 px-3 py-2 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition-transform duration-300 hover:scale-110">
                        Login
                    </button>
                </Link>
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

                        <Link to="/register">
                            <button className="mt-2 px-6 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition-transform duration-300 hover:scale-125">
                                Join Now
                            </button>
                        </Link>
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
                <button className="mt-2 px-6 py-4 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition-transform duration-300 hover:scale-105">
                    Get Started Now
                </button>
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

                    <Link to="/register">
                        <button className="px-12 py-6 text-white font-semibold transition-transform duration-300 hover:scale-125">
                            Privacy Policy
                        </button>
                    </Link>
                </div>

                <p className="pt-4">RoommateLink &copy; 2025</p>
            </footer>
        </div>
    );
};

export default LandingPage;
