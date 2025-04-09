import React from "react";
interface MapPopupProps {
    isOpen: boolean;
    onClose: () => void;
    latitude?: number;
    longitude?: number;
    onLocationChange?: (lat: number, lng: number) => void;
    onRadiusChange?: (radius: number) => void;
    onProfileMap?: boolean;
}
declare const MapPopup: React.FC<MapPopupProps>;
export default MapPopup;
