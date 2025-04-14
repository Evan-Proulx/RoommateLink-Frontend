import {Mail} from "@mui/icons-material";

function MessageBtn({onMessageClicked}) {
    return (
        <button
            onClick={onMessageClicked}
            className="flex items-center justify-center text-white bg-blue-500
        hover:text-white hover:bg-blue-600
        font-medium rounded-lg text-sm px-3 py-2 text-center
        sm:w-12 sm:h-12 sm:px-3 sm:py-3 sm:min-w-[165px] sm:m-5
        dark:border-black dark:text-white w-8 h-8
        dark:hover:text-white dark:hover:bg-blue-600 transition-all duration-300"
        >
            {/* Green Icon */}
            <Mail className={"me-0 sm:me-4"}/>
            <span className="hidden sm:inline">Send Message</span>
        </button>

    )
}

export default MessageBtn;

