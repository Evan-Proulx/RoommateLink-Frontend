import React, {useEffect, useState} from 'react';
import {
    BookmarkBorder,
    ExploreOutlined,
    FeedOutlined,
    ForumOutlined,
    PersonOutline
} from "@mui/icons-material";
import {Link, useNavigate, useLocation} from "react-router-dom";
const Navbar = () => {
    //Allows for tracking the current path of the application
    const location = useLocation();
    const [dropdownDisplayed, setDropdownDisplayed] = useState(false);


    //Holds navigation path, icon with size and display name
    const links = [
            {to: "/feed", icon: (size) => <FeedOutlined sx={{fontSize: size}}/>, name: "Feed"},
            {to: "/discovery", icon: (size) => <ExploreOutlined sx={{fontSize: size}}/>, name: "Discovery"},
            {to: "/chats", icon: (size) => <ForumOutlined sx={{fontSize: size}}/>, name: "Chats"},
            {to: "/bookmarks", icon: (size) => <BookmarkBorder sx={{fontSize: size}}/>, name: "Bookmarks"},
            {to: "/profile", icon: (size) => <PersonOutline sx={{fontSize: size}}/>, name: "Profile"},
        ]


    return (
        <div className={"sticky top-0 z-50"}>
            <div className="flex justify-between items-center bg-white border-8 border-black p-2 md:px-6 md:py-2">
                <div className={"flex "}><Link to={"/home"} className="logo-navbar p-0 text-2xl lg:text-4xl">Roommate Link</Link></div>
                <div className="hidden md:flex items-center space-x-8">
                    {/*Loop through icon list. Set respective navigation path and icon. Set underline style on current path's icon*/}
                    {links.map(({to, icon, name}) => (
                        <Link key={to} to={to} className={location.pathname === to ? "rounded-underline" : ""} title={name}>
                            {/*set icon with specified icon and size*/}
                            {icon(28)}
                        </Link>
                    ))}
                </div>

                <nav className={"md:hidden"}>
                    <button onClick={() => setDropdownDisplayed(!dropdownDisplayed)} data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400" aria-controls="navbar-hamburger" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    {dropdownDisplayed &&
                        <div className="absolute top-16 right-4 rounded-lg" id="navbar-hamburger">
                            <ul className="flex z-30 flex-col rounded-xl font-medium bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                {/*Loop through icon list. Set respective navigation path and icon.*/}
                                {links.map(({to, icon, name}) => (
                                    <Link key={to} to={to} className={"block py-2 px-3 text-white hover:bg-blue-600"}>
                                        {/*set icon with specified icon and size*/}
                                        {icon(20)} {name}
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    }
                </nav>
            </div>
        </div>




    );
};

export default Navbar;