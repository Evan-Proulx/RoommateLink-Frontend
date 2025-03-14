import React from 'react';
import MessageInput from "./MessageInput.tsx";

const ConversationBox = (conversation) => {


    return (
        <div>
            <MessageInput conversation={conversation}/>
        </div>
    );
};

export default ConversationBox;