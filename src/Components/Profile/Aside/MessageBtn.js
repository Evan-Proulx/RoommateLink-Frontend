import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Mail } from "@mui/icons-material";
function MessageBtn({ onMessageClicked }) {
    return (_jsxs("button", { onClick: onMessageClicked, className: "flex items-center text-white bg-blue-500\r\n                hover:text-white hover:bg-blue-600\r\n                font-medium rounded-lg text-sm px-6 py-3 text-center\r\n                min-w-[165px] m-5 dark:border-black dark:text-white\r\n                dark:hover:text-white dark:hover:bg-blue-600 w-full transition-all duration-300", children: [_jsx(Mail, { className: "me-4" }), "Send Message"] }));
}
export default MessageBtn;
