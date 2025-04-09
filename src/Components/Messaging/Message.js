import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
const Message = ({ userId, message, username }) => {
    const [delivered, setDelivered] = useState(true);
    //Full date with time. Visible when message is hovered
    const [fullDate, setFullDate] = useState("");
    const [isSender, setIsSender] = useState(false);
    const getReadableTime = (time) => {
        //Current time in milliseconds since epoch
        const now = Date.now();
        //Time difference in seconds since epoch between now and time
        const diffInSeconds = Math.floor((now - new Date(time).getTime()) / 1000);
        //Check less than minute
        if (diffInSeconds < 60) {
            return "Just Now";
        }
        //Check less than hour
        if (diffInSeconds < 3600) {
            return `${Math.floor(diffInSeconds / 60)} minutes ago`;
        }
        //Check less than day
        if (diffInSeconds < 86400) {
            return `${Math.floor(diffInSeconds / 3600)} hours ago`;
        }
        //Check less than two days
        if (diffInSeconds < 172800) {
            return `Yesterday`;
        }
        //Check less than month
        if (diffInSeconds < 2592000) {
            return `${Math.floor(diffInSeconds / 86400)} days ago`;
        }
        //Check less than year
        if (diffInSeconds < 31536000) {
            return `${Math.floor(diffInSeconds / 2592000)} months ago`;
        }
        return "Over a year";
    };
    //Get full date and time from created_at
    //This can't be done in getReadableTime because it causes an infinite loop
    useEffect(() => {
        if (!message.created_at)
            return;
        const date = new Date(message.created_at);
        const readableFullDate = date.toUTCString(); //Looks like Tue, 12 May 2020 23:50:21 GMT
        setFullDate(readableFullDate);
        setIsSender(userId === message.sender_id);
    }, [message.created_at]);
    return (_jsx("div", { className: `flex ${isSender ? "justify-end" : "justify-start"} mb-4`, children: _jsx("div", { className: "flex items-start gap-2.5", children: _jsxs("div", { className: "flex flex-col gap-1 w-full max-w-[320px]", title: `Sent: ${fullDate}`, children: [_jsxs("div", { className: "flex items-center space-x-2 rtl:space-x-reverse", children: [_jsx("span", { className: "text-sm font-semibold text-gray-900", children: isSender ? "You" : username }), _jsx("span", { className: "w-1 h-1 rounded-full bg-gray-500" }), _jsx("span", { className: "text-sm font-normal text-gray-500", children: getReadableTime(message.created_at) })] }), _jsx("div", { className: `flex flex-col leading-1.5 p-4 ${isSender //display differently based on sender and recipient
                            ? "bg-blue-500 text-white rounded-2xl rounded-tr-none" //Does not round top right
                            : "bg-gray-500 text-white rounded-2xl rounded-tl-none" //Does not round top left
                        }`, children: _jsx("p", { className: "text-sm font-normal text-white break-words overflow-wrap-anywhere ", children: message.text }) }), _jsx("span", { className: "text-sm font-normal text-gray-500 dark:text-gray-400", children: isSender ? "Delivered" : "" })] }) }) }));
};
export default Message;
