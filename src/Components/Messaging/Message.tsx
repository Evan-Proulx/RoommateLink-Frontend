import React, {useState} from "react";

const Message = ({ userId, message, username }) => {
    const [delivered, setDelivered] = useState(true)
    const time = "11:22"
    return (
        <div className={`flex ${userId === message.sender_id ? "justify-end" : "justify-start"} mb-4`}>
            <div className="flex items-start gap-2.5">
                {/*IMG here*/}
                <div className={"w-full"}><div className={"w-8 h-8 rounded-full bg-red-800"}></div></div>
                <div className="flex flex-col gap-1 w-full max-w-[320px]">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-semibold text-gray-500">{username}</span>
                        {/*<span className="text-sm font-normal text-gray-500 dark:text-gray-400">{time}</span>*/}
                    </div>
                    <div
                        className={`flex flex-col leading-1.5 p-4 border-gray-200 ${
                            userId === message.sender_id //display differently based on sender and recipient
                                ? "bg-blue-500 text-white rounded-xl rounded-tr-none" //Does not round top right
                            : "bg-gray-500 text-white rounded-xl rounded-tl-none" //Does not round top left
                        } `}>
                        <p className="text-sm font-normal text-gray-900 dark:text-white">{message.text}</p>
                    </div>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{time}</span>
                </div>
            </div>
        </div>
    );
};

export default Message;
