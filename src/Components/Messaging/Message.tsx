import React, {useEffect, useState} from "react";

const Message = ({ userId, message, username}) => {
    const [delivered, setDelivered] = useState(true)
    //Full date with time. Visible when message is hovered
    const [fullDate, setFullDate] = useState("");
    const [isSender, setIsSender] = useState(false);
    const getReadableTime = (time) => {
        //Current time in milliseconds since epoch
        const now = Date.now();
        //Time difference in seconds since epoch between now and time
        const diffInSeconds = Math.floor((now - new Date(time).getTime()) / 1000);

        //Check less than minute
        if (diffInSeconds < 60) {return "Just Now"}
        //Check less than hour
        if (diffInSeconds < 3600) {return `${Math.floor(diffInSeconds / 60)} minutes ago`}
        //Check less than day
        if (diffInSeconds < 86400) {return `${Math.floor(diffInSeconds / 3600)} hours ago`}
        //Check less than two days
        if (diffInSeconds < 172800 ) {return `Yesterday`}
        //Check less than month
        if (diffInSeconds < 2592000) {return `${Math.floor(diffInSeconds / 86400)} days ago`}
        //Check less than year
        if (diffInSeconds < 31536000) {return `${Math.floor(diffInSeconds / 2592000)} months ago`}

        return "Over a year"
    }

    //Get full date and time from created_at
    //This can't be done in getReadableTime because it causes an infinite loop
    useEffect(() => {
        if (!message.created_at) return

        const date = new Date(message.created_at);
        const readableFullDate = date.toUTCString(); //Looks like Tue, 12 May 2020 23:50:21 GMT
        setFullDate(readableFullDate);
        setIsSender(userId === message.sender_id);
    }, [message.created_at])

    return (
        <div className={`flex ${isSender ? "justify-end" : "justify-start"} mb-4`}>
            <div className="flex items-start gap-2.5">
                <div className="flex flex-col gap-1 w-full max-w-[320px]" title={`Sent: ${fullDate}`}>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-semibold text-gray-900">{isSender ? "You" : username}</span>
                        {/*This is a separator*/}
                        <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                        <span className="text-sm font-normal text-gray-500">{getReadableTime(message.created_at)}</span>
                    </div>
                    <div className={`flex flex-col leading-1.5 p-4 ${
                        isSender //display differently based on sender and recipient
                            ? "bg-blue-500 text-white rounded-2xl rounded-tr-none" //Does not round top right
                            : "bg-gray-500 text-white rounded-2xl rounded-tl-none" //Does not round top left
                    }`}>
                        <p className="text-sm font-normal text-white break-words overflow-wrap-anywhere ">{message.text}</p>
                    </div>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                {isSender ? "Delivered" : ""}
            </span>
                </div>

            </div>
        </div>
    );
};

export default Message;
