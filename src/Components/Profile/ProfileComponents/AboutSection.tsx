import { useState } from "react";
import {faBanSmoking, faGlobe, faGraduationCap, faPaw} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function AboutSection() {

    const userPreferences = {
        language: "English",
        smokeFree: true,
        petFree: true,
        student: true,
    };

    const roommatePreferences = [
        <span key="lang">
        <FontAwesomeIcon icon={faGlobe} className="mr-1" /> {userPreferences.language}
    </span>,
        userPreferences.smokeFree ? (
            <span key="smoke">
            <FontAwesomeIcon icon={faBanSmoking} className="mr-1" /> Smoke-free
        </span>
        ) : null,

        userPreferences.petFree ? (
            <span key="pet">
               <FontAwesomeIcon icon={faPaw} /> Pet-free</span>
        ) : null,

        userPreferences.student ? (
            <span key="student">
                <FontAwesomeIcon icon={faGraduationCap} /> Student</span>

            ) : null
    ].filter(Boolean);

    const propertyAmenities = {
        internet: true,
        parking: true,
        petFree: true,
        privateCloset: true,
        laundry: true
    };


    const propertyPreference = [
        propertyAmenities.internet ? "Internet" : null,
        propertyAmenities.parking ? "Parking" : null,
        propertyAmenities.petFree ? "Pet-free" : null,
        propertyAmenities.privateCloset ? "Private Closet" : null,
        propertyAmenities.laundry ? "Laundry" : null

    ].filter(Boolean);

    const [activeTab, setActiveTab] = useState("about");

    return (
        <div className="p-2">
            {/* Tabs */}
            <div className="flex space-x-6 mt-2">
                <button
                    onClick={() => setActiveTab("about")}
                    className={`px-4 py-2 text-xl ${activeTab === "about" ? "border-b-3 border-black text-4xl font-bold" : ""}`}
                >
                    About Me
                </button>
                <button
                    onClick={() => setActiveTab("property")}
                    className={`px-4 text-xl py-2 ${activeTab === "property" ? "border-b-3 border-black text-4xl font-bold" : ""}`}
                >
                    My Property
                </button>

            </div>

            {/* Content */}
            {activeTab === "about" ? (
                <div className="mt-4">
                    <p className="text-gray-600 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis mollis purus posuere fringilla. Aliquam ac vulputate nulla.
                    </p>
                    <h3 className="mt-4 font-bold">My Ideal Roommate</h3>
                    <div className="flex space-x-2 mt-2">
                        {roommatePreferences.map((preference, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-200 rounded-full">
                                {preference}
                            </span>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="mt-4">
                    <h2 className="text-xl pt-4 font-bold">664 Rankin, Windsor, ON</h2>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                        {Array(5).fill("https://photos.gta-homes.com/1544-darfield-road-windsor-x11939538.jpg").map((src, index) => (
                            <img key={index} src={src} alt="House" className="rounded-lg" />
                        ))}
                    </div>
                    <h3 className="mt-4 font-bold">Amenities</h3>
                    <div className="flex space-x-2 mt-2">
                        {propertyPreference.map((preference, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-200 rounded-full">
                                {preference}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default AboutSection;
