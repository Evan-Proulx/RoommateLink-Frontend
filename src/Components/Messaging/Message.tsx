import React from "react";

const Message = ({ userId, message, username }) => {
    return (
        <div className={`flex ${userId === message.sender_id ? "justify-end" : "justify-start"} mb-4`}>
            <div className="">
                <div className="flex justify-between text-sm text-gray-500">
                    <small>
                        <strong>{username}</strong>
                    </small>
                </div>
                <div
                    className={`p-3 rounded-lg ${
                        userId === message.sender_id
                            ? "bg-blue-500 text-white"
                            : "bg-gray-500 text-white"
                    } mt-1`}
                >
                    {message.text}
                </div>
                {/*<small className="ml-2 text-right">*/}
                {/*    {message.created_at}*/}
                {/*</small>*/}
            </div>
        </div>
    );
};

export default Message;
