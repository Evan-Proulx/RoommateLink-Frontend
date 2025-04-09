import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { BookmarkBorder, ExploreOutlined, FeedOutlined, ForumOutlined, PersonOutline } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
    //Allows for tracking the current path of the application
    const location = useLocation();
    const [dropdownDisplayed, setDropdownDisplayed] = useState(false);
    //Holds navigation path, icon with size and display name
    const links = [
        { to: "/feed", icon: (size) => _jsx(FeedOutlined, { sx: { fontSize: size } }), name: "Feed" },
        { to: "/discovery", icon: (size) => _jsx(ExploreOutlined, { sx: { fontSize: size } }), name: "Discovery" },
        { to: "/chats", icon: (size) => _jsx(ForumOutlined, { sx: { fontSize: size } }), name: "Chats" },
        { to: "/bookmarks", icon: (size) => _jsx(BookmarkBorder, { sx: { fontSize: size } }), name: "Bookmarks" },
        { to: "/profile", icon: (size) => _jsx(PersonOutline, { sx: { fontSize: size } }), name: "Profile" },
    ];
    return (_jsx("div", { className: "sticky top-0 z-50", children: _jsxs("div", { className: "flex justify-between items-center bg-white border-8 border-black p-2 md:px-6 md:py-2", children: [_jsx("div", { className: "flex ", children: _jsx(Link, { to: "/home", className: "logo-navbar p-0 text-2xl lg:text-4xl", children: "Roommate Link" }) }), _jsx("div", { className: "hidden md:flex items-center space-x-8", children: links.map(({ to, icon, name }) => (_jsx(Link, { to: to, className: location.pathname === to ? "rounded-underline" : "", title: name, children: icon(28) }, to))) }), _jsxs("nav", { className: "md:hidden", children: [_jsxs("button", { onClick: () => setDropdownDisplayed(!dropdownDisplayed), "data-collapse-toggle": "navbar-hamburger", type: "button", className: "inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400", "aria-controls": "navbar-hamburger", "aria-expanded": "false", children: [_jsx("span", { className: "sr-only", children: "Open main menu" }), _jsx("svg", { className: "w-5 h-5", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 17 14", children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M1 1h15M1 7h15M1 13h15" }) })] }), dropdownDisplayed &&
                            _jsx("div", { className: "absolute top-16 right-4 rounded-lg", id: "navbar-hamburger", children: _jsx("ul", { className: "flex z-30 flex-col rounded-xl font-medium bg-gray-50 dark:bg-gray-800 dark:border-gray-700", children: links.map(({ to, icon, name }) => (_jsxs(Link, { to: to, className: "block py-2 px-3 text-white hover:bg-blue-600", children: [icon(20), " ", name] }, to))) }) })] })] }) }));
};
export default Navbar;
