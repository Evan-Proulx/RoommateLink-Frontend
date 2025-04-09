import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { InfoOutlined } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
const RatingInfoPopover = ({ ratingScore }) => {
    const [isHovered, setIsHovered] = useState(false);
    useEffect(() => {
        if (ratingScore) {
            console.log("RATING", ratingScore);
        }
    }, []);
    const checkScore = (score) => {
        if (score === 0) {
            return { text: "Unrated", color: "bg-white" };
        }
        else if (score >= 4.5) {
            return { text: "Excellent", color: "bg-blue-200" };
        }
        else if (score >= 4) {
            return { text: "Very Good", color: "bg-green-200" };
        }
        else if (score >= 2) {
            return { text: "Ok", color: "bg-orange-200" };
        }
        else {
            return { text: "Not Great", color: "bg-red-200" };
        }
    };
    const { text, color } = checkScore(ratingScore.overallAverage);
    return (_jsxs("div", { children: [_jsx("button", { type: "button", onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: _jsx(InfoOutlined, { sx: { color: grey[500] } }) }), isHovered && (_jsxs("div", { className: "absolute bg-black w-128 p-4 rounded-lg z-50", children: [_jsx("p", { className: " text-xl font-extrabold text-gray-900 dark:text-white text-center mb-4", children: "User Rating" }), _jsxs("div", { className: "flex items-center mb-5", children: [_jsx("p", { className: `text-md font-semibold inline-flex items-center justify-center p-1.5 rounded-sm ${color} text-black w-10 h-10`, children: ratingScore.overallAverage }), _jsx("p", { className: "ms-2 font-medium text-gray-900 dark:text-white", children: text }), _jsx("span", { className: "w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500" }), _jsx("p", { className: " font-sm text-gray-900 dark:text-gray-200", children: "Overall Average" })] }), _jsxs("div", { className: "gap-8 sm:grid sm:grid-cols-2", children: [_jsxs("div", { children: [_jsxs("dl", { children: [_jsx("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: "Respectfulness" }), _jsxs("dd", { className: "flex items-center mb-3", children: [_jsx("div", { className: "w-full bg-gray-200 rounded-sm h-2.5 dark:bg-gray-700 me-2", children: _jsx("div", { className: "bg-blue-600 h-2.5 rounded-sm dark:bg-yellow-200", style: { width: `${(ratingScore.singleTraitAverages.averageRespectful / 5) * 100}%` } }) }), _jsx("span", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: ratingScore.singleTraitAverages.averageRespectful })] })] }), _jsxs("dl", { children: [_jsx("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: "Communication" }), _jsxs("dd", { className: "flex items-center mb-3", children: [_jsx("div", { className: "w-full bg-gray-200 rounded-sm h-2.5 dark:bg-gray-700 me-2", children: _jsx("div", { className: "bg-blue-600 h-2.5 rounded-sm dark:bg-yellow-200", style: { width: `${(ratingScore.singleTraitAverages.averageCommunicative / 5) * 100}%` } }) }), _jsx("span", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: ratingScore.singleTraitAverages.averageRespectful })] })] }), _jsxs("dl", { children: [_jsx("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: "Friendliness" }), _jsxs("dd", { className: "flex items-center mb-3", children: [_jsx("div", { className: "w-full bg-gray-200 rounded-sm h-2.5 dark:bg-gray-700 me-2", children: _jsx("div", { className: "bg-blue-600 h-2.5 rounded-sm dark:bg-yellow-200", style: { width: `${(ratingScore.singleTraitAverages.averageFriendly / 5) * 100}%` } }) }), _jsx("span", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: ratingScore.singleTraitAverages.averageFriendly })] })] }), _jsxs("dl", { children: [_jsx("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: "Honesty" }), _jsxs("dd", { className: "flex items-center", children: [_jsx("div", { className: "w-full bg-gray-200 rounded-sm h-2.5 dark:bg-gray-700 me-2", children: _jsx("div", { className: "bg-blue-600 h-2.5 rounded-sm dark:bg-yellow-200", style: { width: `${(ratingScore.singleTraitAverages.averageHonest / 5) * 100}%` } }) }), _jsx("span", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: ratingScore.singleTraitAverages.averageHonest })] })] })] }), _jsx("div", { children: _jsxs("dl", { children: [_jsx("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: "Responsiveness" }), _jsxs("dd", { className: "flex items-center mb-3", children: [_jsx("div", { className: "w-full bg-gray-200 rounded-sm h-2.5 dark:bg-gray-700 me-2", children: _jsx("div", { className: "bg-blue-600 h-2.5 rounded-sm dark:bg-yellow-200", style: { width: `${(ratingScore.singleTraitAverages.averageResponsive / 5) * 100}%` } }) }), _jsx("span", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: ratingScore.singleTraitAverages.averageResponsive })] })] }) })] })] })), _jsx("div", { "data-popper-arrow": "" })] }));
};
export default RatingInfoPopover;
