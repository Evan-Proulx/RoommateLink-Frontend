import React, {useEffect, useState} from 'react';
import SelectConversation from "./SelectConversation.tsx";
import ConversationBox from "./ConversationBox.tsx";
import {getAuthenticatedUser} from "../API/Profile.ts";
import Navbar from "../Navbar.tsx";

const Conversation = () => {
    const [conversation, setConversation] = useState(null);
    const [receiver, setReceiver] = useState(null);
    const [user, setUser] = useState("");

    //Retrieve user information on page load
    useEffect(() => {
       getUser()
    }, []);

    //set conversation and send to chat box
    const handleConversationSelect = (conversation, receiver) => {
        console.log(conversation)
        setReceiver(receiver);
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
        <div className={"h-screen flex flex-col overflow-y-hidden"}>
            <Navbar/>
            {user ? (
                <div className={"flex w-full bg-primary h-screen"}>
                    <div className={"w-1/4 border-2 border-r-gray-400 bg-gray-300 ease-in truncate"}><SelectConversation user={user} onSetConversation={handleConversationSelect}/></div>

                    <div className={"w-3/4"}>{conversation? (
                        <ConversationBox user={user} conversation={conversation} receiver={receiver}/>
                    ) : (
                        <div className="flex w-full h-full text-lg font-bold items-center justify-center">
                            Please select a user to start a conversation.
                        </div>
                    )}</div>
                </div>
            ) : (
                <div className={"loader"}></div>
            )}


        </div>
    );
};

export default Conversation;