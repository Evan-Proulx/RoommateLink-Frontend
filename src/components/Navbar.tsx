import React, {useEffect, useState} from 'react';
import {
    BookmarkBorder,
    ExploreOutlined,
    FeedOutlined,
    ForumOutlined, Logout, Menu,
    PersonOutline
} from "@mui/icons-material";
import {Link, useNavigate, useLocation} from "react-router-dom";
import Modal from "./Modal";

interface NavItem {
    to?: string;
    action?: () => void;
    icon: (size: number) => React.ReactNode;
    name: string;
}

const Navbar = () => {
    //Allows for tracking the current path of the application
    const location = useLocation();
    const navigate = useNavigate();
    const [dropdownDisplayed, setDropdownDisplayed] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleLogout = () => {
        console.log("Logging out...");
        localStorage.removeItem("token");
        navigate("/home");
    };

    const handleNavProfile = () => {
        if (location.pathname === '/profile'){
            navigate(0);
        }

        navigate("/profile");
    }

    //Holds navigation path, icon with size and display name
    const links: NavItem[]  = [
        {to: "/feed", icon: (size) => <FeedOutlined sx={{fontSize: size}}/>, name: "Feed"},
        {to: "/discovery", icon: (size) => <ExploreOutlined sx={{fontSize: size}}/>, name: "Discovery"},
        {to: "/chats", icon: (size) => <ForumOutlined sx={{fontSize: size}}/>, name: "Chats"},
        {to: "/bookmarks", icon: (size) => <BookmarkBorder sx={{fontSize: size}}/>, name: "Bookmarks"},
        {action: () => handleNavProfile(), icon: (size) => <PersonOutline sx={{fontSize: size}}/>, name: "Profile"},
        //Logout has action property to call logout method
        {action: () => setModalIsOpen(true), icon: (size) => <Logout sx={{fontSize: size}}/>, name: "Logout"}
    ]

    //Loop through icon list. Set respective navigation path and icon. Set underline style on current path's icon
    //If the item has an action property treat it as a button
    const displayNavbarItems = (item, isMobile = false) => {
        // Create object from link item properties
        const {to, action, icon, name} = item;

        // If it has a "to" property, it's a navigation link
        if (to) {
            return (
                <Link
                    key={to}
                    to={to} //Url button navigates to
                    className={isMobile
                        ? "block py-2 px-3 text-white hover:bg-blue-600"
                        : location.pathname === to ?
                            "rounded-underline hover:text-text transition ease-in duration-100"//Underline current page
                            : "hover:text-text transition ease-in duration-100"}
                    title={name}>
                    {/*Display icon name and change size on mobile*/}
                    {icon(isMobile ? 20 : 32)}
                    {isMobile && name}
                </Link>
            );
        }

        // If it has an "action" property, use as a button
        return (
            <button
                key={name}
                onClick={action}
                className={isMobile
                    ? "block py-2 px-3 text-white hover:bg-gray-600 text-left w-full"
                    : name === "Profile" ?  location.pathname === "/profile" ?
                        "rounded-underline hover:text-text transition ease-in duration-100" :
                        "hover:text-text transition ease-in duration-100" : "pl-9 hover:text-gray-400 transition ease-in duration-100"}
                title={name}>
                {/*Display icon name and change size on mobile*/}
                {icon(isMobile ? 20 : 32)}
                {isMobile && name}
            </button>
        );
    };

    return (
        <div className={"sticky top-0 z-50"}>
            <div className="flex justify-between items-center bg-white border-8 border-black p-2 md:px-6 md:py-2">
                <div className={"flex "}><Link to={"/home"} className="logo-navbar p-0 text-2xl lg:text-4xl">Roommate
                    Link</Link></div>
                <div className="hidden md:flex items-center space-x-6">
                    {links.map(item => displayNavbarItems(item))}
                </div>

                <nav className={"md:hidden"}>
                    <button onClick={() => setDropdownDisplayed(!dropdownDisplayed)}
                            data-collapse-toggle="navbar-hamburger" type="button"
                            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
                            aria-controls="navbar-hamburger" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <Menu sx={{fontSize: 30}}/>
                    </button>
                    {dropdownDisplayed &&
                        <div className="absolute top-16 right-4 rounded-lg" id="navbar-hamburger">
                            <ul className="flex z-30 flex-col rounded-xl font-medium bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                {/*Loop through icon list. Set respective navigation path and icon.*/}
                                {links.map(item => (
                                    <li key={item.name || item.to}>
                                        {displayNavbarItems(item, true)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                </nav>
            </div>

            <Modal open={modalIsOpen} close={() => setModalIsOpen(false)}>
                    {/*Logout confirmation modal */}
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                            <h2 className="text-xl font-semibold mb-4">Confirm Logout</h2>
                            <p className="mb-6">Are you sure you want to log out?</p>
                            <div className="flex justify-end space-x-7">
                                <button onClick={() => setModalIsOpen(false)}
                                    className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
                                    Cancel
                                </button>
                                <button
                                    onClick={handleLogout}
                                    className="px-4 py-2 bg-text text-white rounded hover:bg-red-600">
                                    Yes, Log Out
                                </button>
                            </div>
                    </div>
            </Modal>
        </div>

    );
};

export default Navbar;