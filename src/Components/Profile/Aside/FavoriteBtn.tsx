import {
    Bookmark,
    BookmarkBorder,
} from "@mui/icons-material";

interface FavoriteBtnProps {
    onFavoriteClicked: () => void;
    bookmarked: boolean;
}

function FavoriteBtn({onFavoriteClicked, bookmarked}: FavoriteBtnProps) {
    return (
        <button
            onClick={onFavoriteClicked}
            className="flex items-center justify-center w-8 h-8 text-white bg-text hover:bg-red-600 font-medium rounded-lg text-sm px-3 py-2 text-center sm:w-12 sm:h-12 sm:px-6 sm:py-3 sm:min-w-[160px] sm:m-5 transition-all duration-300"
        >
            {!bookmarked ? <BookmarkBorder className={"me-0 sm:me-4"}/> : <Bookmark className={"me-0 sm:me-4"}/>}
            <span className="hidden sm:inline">{!bookmarked ? "Bookmark" : "Unbookmark"}</span>
        </button>

    )
}

export default FavoriteBtn;

