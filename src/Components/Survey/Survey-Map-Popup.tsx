import React, {useState, useEffect} from "react";
import {CircleF, GoogleMap, LoadScriptNext, Marker} from "@react-google-maps/api";
//Styling the map container
const containerStyle = {
    width: "100%",
    height: "500px",
};

//Set Windsor as the default center of the map if no coordinates are passed
const defaultCenter = {lat: 42.251236522852885, lng: -83.01928920731788}; // Default: Windsor

interface MapPopupProps {
    isOpen: boolean; //To check if the popup is open
    onClose: () => void; // A function to close the popup if it is open
    latitude?: number; // latitude to set initial value
    longitude?: number; // longitude to set initial value
    onLocationChange?: (lat: number, lng: number) => void; // Callback when location is changed
    onRadiusChange?: (radius: number) => void; // Callback when radius is changed
}

// Map popup component
const MapPopup: React.FC<MapPopupProps> = ({isOpen, onClose, latitude, longitude, onLocationChange, onRadiusChange}) => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    //Set initial map center either to Windsor or passed as props
    const initialCenter = latitude && longitude ? {lat: latitude, lng: longitude} : defaultCenter;
    const [circleCenter, setCircleCenter] = useState(initialCenter); // State to track circle's center position
    //Radius in meters
    const [circleRadius, setCircleRadius] = useState(8000); // State to track circle's radius'

    // To disables scroll when the map is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"; // To disable body scroll when the popup is open
        } else {
            document.body.style.overflow = "auto"; // To enable body scroll when the popup is close
        }
    }, [isOpen]);


    // to update the center position when latitude/longitude props change
    useEffect(() => {
        if (latitude && longitude) {
            setCircleCenter({lat: latitude, lng: longitude});
        }
    }, [latitude, longitude]);


    // to update the center of the circle when the user clicks on the map
    const handleMapClick = (event: google.maps.MapMouseEvent) => {
        if (event.latLng) {
            const newCenter = {lat: event.latLng.lat(), lng: event.latLng.lng()};
            setCircleCenter(newCenter);
            if (onLocationChange) {
                onLocationChange(newCenter.lat, newCenter.lng);
            }
        }
    };

    // to drag the circle and update its center
    const handleCircleDrag = (event: google.maps.MapMouseEvent) => {
        if (event.latLng) {
            const newCenter = {lat: event.latLng.lat(), lng: event.latLng.lng()};
            setCircleCenter(newCenter);
            if (onLocationChange) {
                onLocationChange(newCenter.lat, newCenter.lng);
            }
        }
    };

    //set radius on change
    const handleRadiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newRadius = +event.target.value;
        setCircleRadius(newRadius);
        if (onRadiusChange) {
            onRadiusChange(newRadius);
        }
    }

    // return null if the popup is not open
    if (!isOpen) return null;


    return (
        <div
            className="popup-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
            <div className="popup-content bg-white p-6 rounded-lg shadow-lg w-[80vw] max-w-lg relative z-60">

                {/*Close button which is an icon X */}
                <button className="absolute top-2 right-2 text-xl m-4 font-bold" onClick={onClose}>
                    <svg className="w-8 h-8 text-gray-800 dark:text-red-500 hover:w-10 hover:h-10 hover:text-red-900"
                         aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg"
                         width="24" height="24" fill="none"
                         viewBox="0 0 24 24">
                        <path stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                </button>

                {/*Title of the popup*/}
                <h2 className="text-center mb-4 text-2xl">Please select your area</h2>

                {/*Google maps component*/}
                <LoadScriptNext googleMapsApiKey={apiKey}>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={circleCenter}
                        zoom={10}
                        options={{
                            gestureHandling: "greedy",
                        }}
                        onClick={handleMapClick}
                    >

                        {/*The circle on the map*/}
                        <CircleF
                            center={circleCenter}
                            radius={circleRadius}
                            draggable={true}
                            onDragEnd={handleCircleDrag}
                            options={{
                                fillColor: "#42008a",
                                fillOpacity: 0.2,
                                strokeColor: "#003aff",
                                strokeOpacity: 0.5,
                                strokeWeight: 2,
                            }}
                        />
                    </GoogleMap>
                </LoadScriptNext>
                <div className="relative mb-6 w-full">
                    <label htmlFor="radius-range-range" className="pt-4 block mb-2 font-medium text-black">Location range in km</label>
                    <input id="radius-range" type="range" min="500" max="100000" step="1"
                           className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                           onChange={handleRadiusChange}/>
                    <span className="text-md font-bold absolute start-0 -bottom-6">0.5</span>
                    <span className="text-md font-bold absolute end-0 -bottom-6">100</span></div>
            </div>
        </div>
    );
};

export default MapPopup;
