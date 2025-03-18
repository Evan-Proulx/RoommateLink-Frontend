import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const ListingCard = () => {
    const [saved, setSaved] = useState(false);

    // Images of the property, it depends on how many images the user uploaded
    const propertyImages = [
        "https://photos.gta-homes.com/1544-darfield-road-windsor-x11939538.jpg",
        "https://www.movemeto.com/ontario/img/medium/real-estate.jpg",
        "https://www.movemeto.com/ontario/img/medium/single-family-homes-for-sale.jpg",
        "https://cdn1.zoocasa.com/images/listings/f9988f5e-4ba4-4983-be5b-64c3efc44f14.jpg",
        "https://cdn4.thecanadianhome.com/wecar/Photo25003221-1.jpeg?user=&ml_num=25003221&is_property=1&listing_type=1&width=1920&aspect_ratio=40:33&quality=30",
        "https://cdn4.thecanadianhome.com/wecar/Photo25003221-1.jpeg?user=&ml_num=25003221&is_property=1&listing_type=1&width=1920&aspect_ratio=40:33&quality=30",
        "https://cdn4.thecanadianhome.com/wecar/Photo25003221-1.jpeg?user=&ml_num=25003221&is_property=1&listing_type=1&width=1920&aspect_ratio=40:33&quality=30",
        "https://cdn4.thecanadianhome.com/wecar/Photo25003221-1.jpeg?user=&ml_num=25003221&is_property=1&listing_type=1&width=1920&aspect_ratio=40:33&quality=30",
    ];

    // Function to handle image click (for future modal or zoom)
    const openImage = (index) => {
        console.log(`Opening image at index: ${index}`);
    };

    // How far is the property to the user location
    const theLocation = 26;

    // Changing the color based on how far it is
    const getTextColor = (percentage) => {
        if (percentage <= 25) {
            return 'text-green-500'; // Green for less than 25 KM
        } else if (percentage <= 50) {
            return 'text-orange-500'; // Orange for less than 50
        } else {
            return 'text-red-500'; // Red for 51 and above
        }
    };

    // Setting a Max Characters for the description
    const ListingDescription = () => {
        const text = "Lorem ipsum dolor sit amet, consectetur adipiscindolor sit amet, consectetur adipiscindolor sit amet, consectetur adipiscindolor sit amet, consectetur adipiscindolor sit amet, consectetur adipiscindolor sit amet, consectetur adipiscin "

        const maxLength = 150; // Max characters before truncating
        const truncatedText = text.length > maxLength ? text.substring(0, maxLength) + '...' : text;



        //Link Percentage
        const percentage = 79;
        const LinkPercentageColor = (percentage) => {
            if (percentage >= 80) {
                return 'text-green-500'; // Green for 80-100%
            } else if (percentage >= 65) {
                return 'text-orange-500'; // Orange for 65-79%
            } else {
                return 'text-red-500'; // Red for 64 and below
            }
        };


        return (
            <div
                className="bg-white w-[650px] p-4 rounded-lg  flex flex-col gap-4 border-2 border-black">
                {/* Profile & Listing Details */}
                <div className="flex gap-4">
                    {/* Profile Section */}
                    <div className="w-[150px] flex flex-col items-start">
                        <img
                            src="https://images.surferseo.art/3e8e3027-36da-4ca6-8d77-76b74405d002.webp"
                            alt="Profile"
                            className="w-28 h-28 rounded-lg"
                    />
                        <div className="flex items-center space-x-2 mt-2">
                            <h4 className="font-bold">John Doe</h4>
                            <svg className="w-5 h-5 text-gray-800 dark:text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clipRule="evenodd"/>
                            </svg>
                        </div>

                        <p className={`w-full mt-2 font-semibold text-xl ${LinkPercentageColor(percentage)}`}>
                            {percentage} % Link
                        </p>

                        <div className="flex flex-col items-start mt-2">
                            <p className="text-gray-500 font-semibold">Windsor, ON</p>
                            <p className="text-gray-500 font-semibold">Age: 31</p>
                            <p className="text-gray-500 font-semibold">$ 1,800</p>
                        </div>
                    </div>


                    {/* Listing Section */}
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <h2 className="text-lg font-semibold">123 Placeholder St.</h2>

                            <div className="flex items-center gap-2">
                                <button className="flex items-center">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-gray-500 leading-none"
                                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round"
                                              strokeLinejoin="round" strokeWidth="2"
                                              d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"/>
                                    </svg>
                                </button>

                                <button onClick={() => setSaved(!saved)} className="flex items-center">
                                    {saved ? (
                                        <FaBookmark className="text-red-500 text-xl leading-none"/>
                                    ) : (
                                        <FaRegBookmark className="text-gray-500 text-xl leading-none"/>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-24">
                            <p className="text-gray-600 text-sm">1 Bedroom + 1 Bathroom • 4km away</p>
                            <h4 className={`text-center font-semibold ${getTextColor(theLocation)}`}>
                                {theLocation}Km away
                                <FontAwesomeIcon icon={faLocationDot} className="ml-1"/>
                            </h4>
                        </div>

                        <div className="flex gap-2 mt-2">
                            {/* Image Grid */}
                            <div className="grid grid-cols-2 gap-2">
                                {/* Main Large Image */}
                                <div className="col-span-1">
                                    <img
                                        src={propertyImages[0]}
                                        alt="Main Property"
                                        className="w-full h-full object-cover rounded-lg cursor-pointer"
                                        onClick={() => openImage(0)}
                                    />
                                </div>

                                {/* Smaller Images */}
                                <div className="grid grid-cols-2 gap-2">
                                    {propertyImages.slice(1, 4).map((src, index) => (
                                        <img
                                            key={index}
                                            src={src}
                                            alt={`Property ${index + 2}`}
                                            className="w-full h-24 object-cover rounded-lg cursor-pointer"
                                            onClick={() => openImage(index + 1)}
                                        />
                                    ))}

                                    {/* Last image with overlay for extra images */}
                                    {propertyImages.length > 5 && (
                                        <div className="relative cursor-pointer" onClick={() => openImage(4)}>
                                            <img src={propertyImages[4]} alt="More Properties"
                                                 className="w-full h-24 object-cover rounded-lg"/>
                                            <div
                                                className="absolute inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center text-white font-bold text-lg">
                                                +{propertyImages.length - 4}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <p className="text-gray-700 text-sm mt-2">
                                {truncatedText}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return <ListingDescription />;
};

export default ListingCard;

