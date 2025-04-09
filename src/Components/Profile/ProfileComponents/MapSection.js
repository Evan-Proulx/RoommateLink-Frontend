import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CircleF, GoogleMap, LoadScript } from "@react-google-maps/api";
import { useContext } from "react";
import { ProfileContext } from "../ProfilePage";
import { LocationOn } from "@mui/icons-material";
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
    //Get user data
    const userProfile = useContext(ProfileContext);
    const user = userProfile;
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    return (_jsxs("div", { className: "p-6", children: [_jsxs("h1", { className: "text-lg font-bold mb-2 flex items-center", children: [_jsx(LocationOn, {}), "Location"] }), _jsx("h2", { className: "text-gray-600 flex items-center ml-2", children: user.personalData.city }), _jsx("div", { className: "bg-white p-4 m-2 border border-black", children: _jsx(LoadScript, { googleMapsApiKey: apiKey, children: _jsx(GoogleMap, { options: {
                            //Allowing the user only to zoom in & out
                            disableDefaultUI: false,
                            draggable: false,
                            scrollwheel: false,
                            keyboardShortcuts: false,
                        }, mapContainerStyle: containerStyle, center: center, zoom: 12, children: _jsx(CircleF, { center: center, options: circleOptions }) }) }) })] }));
}
export default MapSection;
