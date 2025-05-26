import React from 'react';

const MessageSkeleton = () => {
    const count = 5
    const messages = Array.from({ length: count }, (_, i) => ({
        id: i,
        isSender: Math.random() < 0.5, // randomly true or false
        width: Math.random()
    }));

    return (
        <>
            {messages.map(({ id, isSender }) => (
                <div key={id} className={`flex ${isSender ? "justify-end" : "justify-start"} mb-4`}>
                    <div className={`flex flex-col leading-1.5 p-4 0 text-white rounded-2xl`}>
                        <div className={`flex flex-col leading-1.5 p-4 bg-gray-900 text-white h-14 animate-pulse ${
                            isSender //display differently based on sender and recipient
                                ? "rounded-2xl rounded-tr-none" //Does not round top right
                                : "rounded-2xl rounded-tl-none" //Does not round top left
                        }`}>
                            <p className="text-sm f ont-normal text-white break-words overflow-wrap-anywhere w-40"></p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default MessageSkeleton;