import React, {useEffect, useState} from 'react';
import SelectConversation from "./SelectConversation.tsx";
import ConversationBox from "./ConversationBox.tsx";
import {getAuthenticatedUser} from "../API/Profile.ts";

const Conversation = () => {
    const [conversation, setConversation] = useState(null);
    const [user, setUser] = useState("");

    //Retrieve user information on page load
    useEffect(() => {
       getUser()
    }, []);

    //set conversation and send to chat box
    const handleConversationSelect = (conversation) => {
        console.log(conversation)
        setConversation(conversation);
    };

    //Get authenticated user information
    const getUser = async () => {
        try{
            const response = await getAuthenticatedUser();
            setUser(response);
        }catch(err){console.log("Could not retrieve user: " + err);}
    }


    return (
        <div>
            <SelectConversation onSetConversation={handleConversationSelect}/>

            {conversation ? (
                <ConversationBox user={user} conversation={conversation}/>
            ) : (
                <div className="alert alert-info">
                    Please select a user to start a conversation.
                </div>
            )}
        </div>
    );
};

export default Conversation;