'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { Popover } from 'flowbite';
import { Help } from "@mui/icons-material";
import { grey } from '@mui/material/colors';
import { Link } from "react-router-dom";
const PopoverButton = () => {
    const triggerRef = useRef(null);
    const contentRef = useRef(null);
    let popoverInstance = null;
    useEffect(() => {
        if (contentRef.current && triggerRef.current) {
            const options = {
                placement: 'top',
                triggerType: 'hover',
                offset: 10,
                onHide: () => console.log('Popover is hidden'),
                onShow: () => console.log('Popover is shown'),
                onToggle: () => console.log('Popover is toggled'),
            };
            const instanceOptions = {
                id: 'popoverContent',
                override: true,
            };
            popoverInstance = new Popover(contentRef.current, triggerRef.current, options, instanceOptions);
        }
        return () => {
            popoverInstance?.hide();
        };
    }, []);
    return (_jsxs("div", { className: "", children: [_jsx("button", { ref: triggerRef, type: "button", children: _jsx(Help, { sx: { color: grey[500] } }) }), _jsxs("div", { ref: contentRef, id: "popover-description", role: "tooltip", className: "absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400", children: [_jsxs("div", { className: "p-3 space-y-2", children: [_jsx("h3", { className: "font-semibold text-gray-900 dark:text-white", children: "What are links?" }), _jsx("p", { children: "Links are users who most closely match your roommate preferences. These links are selected by a matching algorithm that takes the information you gave in the survey, and finds users with similar data." }), _jsx("h3", { className: "font-semibold text-gray-900 dark:text-white", children: "Links not good enough?" }), _jsx("p", { children: "Try refining your roommate search on the discover tab!" }), _jsxs(Link, { to: "/discovery", className: "flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:underline", children: ["Discovery ", _jsx("svg", { className: "w-2 h-2 ms-1.5 rtl:rotate-180", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 6 10", children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", "stroke-line-join": "round", strokeWidth: "2", d: "m1 9 4-4-4-4" }) })] })] }), _jsx("div", { "data-popper-arrow": "" })] })] }));
};
export default PopoverButton;
