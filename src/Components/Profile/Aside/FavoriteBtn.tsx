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
        <button onClick={onFavoriteClicked}
                className="flex items-center text-white bg-text hover:bg-red-600 font-medium rounded-lg text-sm px-6 py-3 text-center min-w-[160px] w-full m-5 transition-all duration-300"
        >
            {!bookmarked ? <BookmarkBorder className={"me-4"}/> : <Bookmark className={"me-4"}/>}
            {!bookmarked ? "Bookmark" : "Unbookmark"}
        </button>

    )
}

export default FavoriteBtn;

