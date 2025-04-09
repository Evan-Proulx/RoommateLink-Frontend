import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Bookmark, BookmarkBorder, } from "@mui/icons-material";
function FavoriteBtn({ onFavoriteClicked, bookmarked }) {
    return (_jsxs("button", { onClick: onFavoriteClicked, className: "flex items-center text-white bg-text hover:bg-red-600 font-medium rounded-lg text-sm px-6 py-3 text-center min-w-[160px] w-full m-5 transition-all duration-300", children: [!bookmarked ? _jsx(BookmarkBorder, { className: "me-4" }) : _jsx(Bookmark, { className: "me-4" }), !bookmarked ? "Bookmark" : "Unbookmark"] }));
}
export default FavoriteBtn;
