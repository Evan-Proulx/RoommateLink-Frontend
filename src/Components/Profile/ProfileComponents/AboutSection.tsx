import {useContext, useState} from "react";
import {
    faBanSmoking,
    faBoxOpen,
    faCar,
    faGlobe,
    faGraduationCap, faLocationDot,
    faPaw, faTshirt,
    faWifi
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import MapSection from "./MapSection.tsx";
import InterestedPeople from "./InterestedPeople.tsx";
import {ProfileContext} from "../ProfilePage.tsx";
import {UserProfile} from "../../../ProfileData.ts";

// Property Images
// Component to display an image gallery
function ImageGallery({ images }) {
    //Get user data
    const userProfile = useContext(ProfileContext);
    const user = userProfile as UserProfile;

    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);


    // Open the model with the selected image
    const openImage = (index) => {
        setSelectedImage(images[index]);
        setCurrentIndex(index);
    };

    // Close the model
    const closeModal = () => {
        setSelectedImage(null);
    };

    // Navigate to the previous image
    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
        setSelectedImage(images[currentIndex > 0 ? currentIndex - 1 : images.length - 1]);
    };

    // Navigate to the next image
    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
        setSelectedImage(images[currentIndex < images.length - 1 ? currentIndex + 1 : 0]);
    };

    return (
        <div>
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-2 mt-2">
                {/* Main Large Image */}
                <div className="col-span-1">
                    <img
                        src={images[0]}
                        alt="Main Property"
                        className="w-full h-full object-cover rounded-lg cursor-pointer"
                        onClick={() => openImage(0)}
                    />
                </div>

                {/* Smaller Images */}
                <div className="grid grid-cols-2 gap-2">
                    {images.slice(1, 4).map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Property ${index + 2}`}
                            className="w-full h-24 object-cover rounded-lg cursor-pointer"
                            onClick={() => openImage(index + 1)}
                        />
                    ))}

                    {/* Last image with overlay for extra images */}
                    <div className="relative cursor-pointer" onClick={() => openImage(4)}>
                        <img src={images[4]} alt="More Properties" className="w-full h-24 object-cover rounded-lg" />
                        <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center text-white font-bold text-lg">
                            +{images.length - 4}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Enlarged Image */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
                    onClick={closeModal}
                >
                    <button className="absolute left-4 text-white text-3xl" onClick={prevImage}>&#10094;</button>
                    <img src={selectedImage} alt="Enlarged" className="max-w-full max-h-[90vh] rounded-lg shadow-lg" />
                    <button className="absolute right-4 text-white text-3xl" onClick={nextImage}>&#10095;</button>
                </div>
            )}
        </div>
    );
}


function AboutSection() {
    //Get user data
    const userProfile = useContext(ProfileContext);
    const user = userProfile as UserProfile;

    //If the user has a property then the My Property Tab will be displayed
    const hasProperty = true;

    // WE NEED TO ADD MORE ROOMMATE PREFERENCES
    // User preferences for an ideal roommate
    const userPreferences = {
        language: "English",
        smokeFree: true,
        petFree: true,
        student: true,
    };

    //Mapping user preferences
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

    // WE NEED TO ADD MORE
    // Amenities that's available in the property
    const propertyAmenities = {
        internet: true,
        parking: true,
        privateCloset: true,
        laundry: true
    };


    // Mapping property amenities
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

    // Images of the property, it depends on how many images did the user upload
    const propertyImages = [
        "https://photos.gta-homes.com/1544-darfield-road-windsor-x11939538.jpg",
        "https://www.movemeto.com/ontario/img/medium/real-estate.jpg",
        "https://www.movemeto.com/ontario/img/medium/single-family-homes-for-sale.jpg",
        "https://cdn1.zoocasa.com/images/listings/f9988f5e-4ba4-4983-be5b-64c3efc44f14.jpg",
        "https://cdn4.thecanadianhome.com/wecar/Photo25003221-1.jpeg?user=&ml_num=25003221&is_property=1&listing_type=1&width=1920&aspect_ratio=40:33&quality=30",

    ];

    // How far is the property to the user location
    const theLocation = 26;

    //Changing the color based on how far it is
    const getTextColor = (percentage) => {
        if (percentage <= 25) {
            return 'text-green-500'; // Green for less than 25 KM
        } else if (percentage <= 50) {
            return 'text-orange-500'; // Orange for less than 50
        } else {
            return 'text-red-500'; // Red for 51 and above
        }
    };

    const [activeTab, setActiveTab] = useState("about");

    return (
        <div className="p-2">
            {/* Tabs for switching between "About Me" and "My Property" */}
            <div className="flex space-x-6 mt-2">
                <button
                    onClick={() => setActiveTab("about")}
                    className={`px-4 py-2 cursor-pointer ${activeTab === "about" ? "border-b-4 border-black text-3xl font-bold" : "text-xl"}`}
                >
                    About Me
                </button>

                {/* Show "My Property" only if the user has a property */}
                { hasProperty && (
                    <button
                        onClick={() => setActiveTab("property")}
                        className={`px-4 py-2 cursor-pointer ${activeTab === "property" ? "border-b-4 border-black text-3xl font-bold" : "text-xl"}`}
                    >
                        My Property
                    </button>
                )}
            </div>

            {/* Content Section - Displaying the content of "About Me" or "My Property"*/}
            {activeTab === "about" ? (
                <div className="mt-4">
                    {/*About Me Section*/}
                    <p className="text-gray-600 m-2 text-lg font-semibold mt-2">
                        {user.profileData.bio}
                    </p>

                    {/* Roommate Preferences */}
                    <h3 className="mt-4 p-2 font-bold text-xl">My Ideal Roommate</h3>
                    <div className="flex space-x-2 mt-2">
                        {roommatePreferences.map((preference, index) => (
                            <span key={index} className="px-3 py-1 m-3 bg-gray-200 font-semibold rounded-full shadow-md">
                            {preference}
                        </span>
                        ))}
                    </div>

                    <InterestedPeople/>
                </div>
            )  : user.personalData.has_housing ? (
                <div className="mt-4">
                    {/*My Property Section */}
                    <h2 className="text-xl pt-2 font-bold m-2">{user.personalData.city}</h2>

                    <div className="flex items-center justify-between w-128">
                        <h4 className="pl-2 text-gray-600 font-semibold"> {user.propertyData.bedroom_count} bedrooms + {user.propertyData.bathroom_count} Bathroom · {user.propertyData.square_feet} Square Feet</h4>
                        <h4 className={`text-center font-semibold ${getTextColor(theLocation)}`}>
                            {theLocation}Km away
                            <FontAwesomeIcon icon={faLocationDot} className="ml-1"/>
                        </h4>
                    </div>


                    {/* Property Images Gallery */}
                    <div className="w-128 m-2">
                    <ImageGallery images={propertyImages} />
                </div>

                    <h3 className="mt-12 font-bold m-2 text-xl">About My Property</h3>
                    <p className="text-gray-600 m-2 text-lg font-semibold mt-2">
                        {user.propertyData.description}
                    </p>

                    {/* Property Amenities */}
                    <h3 className="mt-10 font-bold m-2 text-xl">Amenities</h3>
                    <div className="flex space-x-2 mt-2">
                        {propertyPreference.map((preference, index) => (
                            <span key={index} className="px-3 m-3 py-1 bg-gray-200 font-semibold rounded-full shadow-md">
                                {preference}
                            </span>
                        ))}
                    </div>

                    {/* Map Section for Property Location */}
                    <MapSection />
                </div>
            ) : null} {/* To display nothing if the user has no property */}
        </div>
    );
}

export default AboutSection;
