import { useState } from "react";
import {
    faBan,
    faBanSmoking,
    faBoxOpen,
    faCar,
    faGlobe,
    faGraduationCap,
    faPaw, faTshirt,
    faWifi
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import MapSection from "./MapSection.tsx";

function AboutSection() {

    //If the user has a property then the My Property Tab will be displayed
    const hasProperty = true;

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
               <FontAwesomeIcon icon={faPaw} className="mr-1"/> Pet-free</span>
        ) : null,

        userPreferences.student ? (
            <span key="student">
                <FontAwesomeIcon icon={faGraduationCap} className="mr-1"/> Student</span>

            ) : null
    ].filter(Boolean);

    const propertyAmenities = {
        internet: true,
        parking: true,
        privateCloset: true,
        laundry: true
    };


    const propertyPreference = [
        propertyAmenities.internet ? (
            <span key="internet">
            <FontAwesomeIcon icon={faWifi} className="mr-1" />
            Internet
        </span>
        ) : null,
        propertyAmenities.parking ? (
            <span key="parking">
            <FontAwesomeIcon icon={faCar} className="mr-1" />
            Parking
        </span>
        ) : null,

        propertyAmenities.privateCloset ? (
            <span key="private-closet">
            <FontAwesomeIcon icon={faBoxOpen} className="mr-1" />
            Private Closet
        </span>
        ) : null,
        propertyAmenities.laundry ? (
            <span key="laundry">
            <FontAwesomeIcon icon={faTshirt} className="mr-1" />
            Laundry
        </span>
        ) : null
    ].filter(Boolean);


    const [activeTab, setActiveTab] = useState("about");

    return (
        <div className="p-2">
            {/* Tabs */}
            <div className="flex space-x-6 mt-2">
                <button
                    onClick={() => setActiveTab("about")}
                    className={`px-4 py-2 ${activeTab === "about" ? "border-b-4 border-black text-3xl font-bold" : "text-xl"}`}
                >
                    About Me
                </button>

                { hasProperty && (
                    <button
                        onClick={() => setActiveTab("property")}
                        className={`px-4 py-2 ${activeTab === "property" ? "border-b-4 border-black text-3xl font-bold" : "text-xl"}`}
                    >
                        My Property
                    </button>
                )}
            </div>

            {/* Content */}
            {activeTab === "about" ? (
                <div className="mt-4">
                    <p className="text-gray-600 text-xl font-semibold mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper venenatis nulla, vitae congue turpis scelerisque at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in viverra ante. Proin rutrum mi metus, et imperdiet dolor pretium sed. Integer aliquet diam ut tempus elementum. Nullam vel lectus ut dolor egestas placerat. Aliquam tincidunt scelerisque erat, quis pellentesque ligula tristique in. Aliquam molestie malesuada urna ac semper. Mauris ipsum ipsum, pharetra sit amet nisi in, elementum varius diam. Maecenas in tempor turpis, sit amet tempus ipsum. Donec bibendum tempor mauris. Etiam dignissim vestibulum elit, ut bibendum libero. Phasellus congue finibus purus at fringilla. Nulla eget arcu non nisi finibus maximus. Nullam elit velit, pulvinar in arcu quis, bibendum hendrerit felis.
                    </p>
                    <h3 className="mt-4 p-2 font-bold">My Ideal Roommate</h3>
                    <div className="flex space-x-2 mt-2">
                        {roommatePreferences.map((preference, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-200 font-semibold rounded-full shadow-md">
                            {preference}
                        </span>

                        ))}
                    </div>
                </div>
            )  : hasProperty ? (
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
                            <span key={index} className="px-3 py-1 bg-gray-200 font-semibold rounded-full shadow-md">
                                {preference}
                            </span>
                        ))}
                    </div>

                    <MapSection />
                </div>
            ) : null}
        </div>
    );
}

export default AboutSection;
