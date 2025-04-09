import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { StarRounded } from "@mui/icons-material";
const RatingStars = ({ onSetRating }) => {
    const [rating, setRating] = useState(1);
    const [hover, setHover] = useState(0);
    // Set rating to index of the star clicked
    const handleClick = (index) => {
        setRating(index);
        onSetRating(index);
    };
    // Temporarily set index of hovered star to yellow
    const handleMouseOver = (index) => { setHover(index); };
    const handleMouseOut = () => { setHover(0); };
    return (_jsxs("div", { className: "flex w-fit", children: [
            // Create an array with 5 values and map through
            [...Array(5)].map((star, index) => {
                const starIndex = index + 1;
                // Determine star color based on hover state first, then rating if not hovering
                const isYellow = hover ? hover >= starIndex : rating >= starIndex;
                return (
                // Star icon. If the current rating is >= the star's index set to yellow
                _jsx(StarRounded, { className: `w-8 h-8 ms-1 cursor-pointer 
                        ${isYellow ? "text-yellow-300" : "text-gray-300"}`, onClick: () => handleClick(starIndex), onMouseEnter: () => handleMouseOver(starIndex), onMouseLeave: () => handleMouseOut() }, starIndex));
            }), _jsxs("p", { className: "text-sm pl-4 font-bold w-2", children: ["(", rating, "/5)"] })] }));
};
export default RatingStars;
