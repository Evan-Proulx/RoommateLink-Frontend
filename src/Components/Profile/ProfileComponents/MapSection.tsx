import { CircleF, GoogleMap, LoadScript } from "@react-google-maps/api";


    //Map's container size
const containerStyle = {
    width: "100%",
    height: "500px",
};

    // The center of the map, Using user location
const center = {
    lat: 42.247761465974456,
    lng: -83.01825077014597
};
    // Appearance of the circle and radius
const circleOptions = {
    strokeColor: "#42008a",
    strokeOpacity: 0.8,
    strokeWeight: 2, // Border thickness
    fillColor: "#003aff",
    fillOpacity: 0.20,
    radius: 5000, // Radius of the circle in meter
};

function MapSection() {
    return (
        <div className="pt-6">
            <h1 className="text-lg font-bold mb-2 flex items-center">
                {/* Location Icon */}
                <svg
                    className="w-6 h-6 text-gray-800 dark:text-black mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    />
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                    />
                </svg>
                Location
            </h1>

            {/* Displaying the Location here*/}
            <h2 className="text-gray-600 flex items-center ml-2">
                664 Rankin, Windsor, ON
            </h2>
            <div className="bg-white p-4 m-2 border border-black max-w-[580px]">
                <LoadScript googleMapsApiKey="API_KEY">
                    <GoogleMap
                        options={{
                            //Allowing the user only to zoom in & out
                            disableDefaultUI: false,
                            draggable: false,
                            scrollwheel: false,
                            keyboardShortcuts: false,
                        }}
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={12} // Zoom level for better visibility
                    >
                        <CircleF center={center} options={circleOptions} />
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
}

export default MapSection;