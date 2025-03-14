import React, {useState} from 'react';
import SelectConversation from "./SelectConversation.tsx";
import ConversationBox from "./ConversationBox.tsx";

const Conversation = () => {
    const rootUrl = import.meta.env.ROOT_URL;

    const [conversation, setConversation] = useState(null);
//set conversation and send to chat box
    const handleConversationSelect = (conversation) => {
        console.log(conversation)
        setConversation(conversation);
    };

    return (
        <div>
            <SelectConversation onSetConversation={handleConversationSelect}/>

            {conversation ? (
                <ConversationBox conversation={conversation}/>
            ) : (
                <div className="alert alert-info">
                    Please select a user to start a conversation.
                </div>
            )}
        </div>
    );
};

export default Conversation;