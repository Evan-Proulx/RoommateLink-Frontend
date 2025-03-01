import React from 'react';
import {
    ExploreOutlined,
    FavoriteOutlined,
    FeedOutlined,
    ForumOutlined,
    PersonOutline
} from "@mui/icons-material";
const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between items-center bg-white border-8 border-black px-9 py-2">
                <div className={"flex "}><h1 className="logo-navbar p-0 text-4xl">Roommate Link</h1></div>

                <div className="flex items-center space-x-8">
                    <FeedOutlined sx={{fontSize: 32}}/>
                    <ExploreOutlined sx={{fontSize: 32}} />
                    <ForumOutlined sx={{fontSize: 32}} />
                    <FavoriteOutlined sx={{fontSize: 32}} />
                    <PersonOutline sx={{fontSize: 32}} />
                </div>
            </div>
        </div>

    );
};

export default Navbar;