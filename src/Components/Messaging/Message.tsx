import React, {useState} from "react";

const Message = ({ userId, message, username }) => {
    const [delivered, setDelivered] = useState(true)
    const time = "11:22"
    return (
        <div className={`flex ${userId === message.sender_id ? "justify-end" : "justify-start"} mb-4`}>
            {/*<div className="">*/}
            {/*    <div className="flex justify-between text-sm text-gray-500">*/}
            {/*        <small>*/}
            {/*            <strong>{username}</strong>*/}
            {/*        </small>*/}
            {/*    </div>*/}
            {/*    <div*/}
            {/*        className={`p-3 rounded-lg ${*/}
            {/*            userId === message.sender_id*/}
            {/*                ? "bg-blue-500 text-white"*/}
            {/*                : "bg-gray-500 text-white"*/}
            {/*        } mt-1`}*/}
            {/*    >*/}
            {/*        {message.text}*/}
            {/*    </div>*/}
            {/*    /!*<small className="ml-2 text-right">*!/*/}
            {/*    /!*    {message.created_at}*!/*/}
            {/*    /!*</small>*!/*/}
            {/*</div>*/}

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
                            userId === message.sender_id
                            ? "bg-blue-500 text-white"
                            : "bg-gray-500 text-white"
                        } rounded-e-xl rounded-es-xl`}>
                        <p className="text-sm font-normal text-gray-900 dark:text-white">{message.text}</p>
                    </div>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{time}</span>
                </div>
            </div>
        </div>
    );
};

export default Message;
