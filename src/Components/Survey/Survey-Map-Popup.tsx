import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "500px",
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

    if (!isOpen) return null;

    return (
        <div className="popup-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
            <div className="popup-content bg-white p-6 rounded-lg shadow-lg w-[80vw] max-w-lg relative z-60">

                <h2 className="text-center mb-4">Please select your area</h2>
                <LoadScript googleMapsApiKey="API_KEY">
                    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
                        <Marker position={center} />
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
};

export default MapPopup;
