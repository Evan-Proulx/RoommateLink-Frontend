import React, {useEffect} from "react";
import {CircleF, GoogleMap, LoadScript, LoadScriptNext, Marker} from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "500px",
};

const defaultCenter = { lat: 42.251236522852885, lng:-83.01928920731788  }; // Default: Windsor

interface MapPopupProps {
    isOpen: boolean;
    onClose: () => void;
    latitude?: number;
    longitude?: number;
}

const MapPopup: React.FC<MapPopupProps> = ({ isOpen, onClose, latitude, longitude }) => {
    const center = latitude && longitude ? { lat: latitude, lng: longitude } : defaultCenter;

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);


    if (!isOpen) return null;

    return (
        <div className="popup-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
            <div className="popup-content bg-white p-6 rounded-lg shadow-lg w-[80vw] max-w-lg relative z-60">

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

                <h2 className="text-center mb-4 text-2xl">Please select your area</h2>
                <LoadScriptNext googleMapsApiKey="Key">
                    <GoogleMap mapContainerStyle={containerStyle}
                               center={center}
                               zoom={11}
                               options={{
                                   gestureHandling: "greedy",
                               }}
                                >
                        <Marker position={center} />
                        <CircleF
                            center={center}
                            radius={5000}
                            options={{
                                fillColor: "#FF0000",
                                fillOpacity: 0.2,
                                strokeColor: "#FF0000",
                                strokeOpacity: 0.5,
                                strokeWeight: 2,
                            }}
                        />
                    </GoogleMap>
                </LoadScriptNext>
            </div>
        </div>
    );
};

export default MapPopup;
