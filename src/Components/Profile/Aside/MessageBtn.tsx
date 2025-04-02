import {useContext} from "react";
import {Mail} from "@mui/icons-material";

function MessageBtn({onMessageClicked}) {
    return (
        <button onClick={onMessageClicked}
            className="flex items-center text-white bg-blue-500
                hover:text-white hover:bg-blue-600
                font-medium rounded-lg text-sm px-6 py-3 text-center
                min-w-[165px] m-5 dark:border-black dark:text-white
                dark:hover:text-white dark:hover:bg-blue-600 w-full transition-all duration-300"
        >
            {/* Green Icon */}
            <Mail className={"me-4"}/>
            Send Message

        </button>

    )
}

export default MessageBtn;

