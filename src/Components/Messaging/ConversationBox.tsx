import React, {useEffect, useRef, useState} from 'react';
import MessageInput from "./MessageInput.tsx";
import echo from "../../../echo.js"
import {getConversationMessages} from "../API/Messaging.ts";
import Message from "./Message.tsx";


const ConversationBox = ({user, conversation}) => {
    //Channel name for chat.
    const webSocketChannel = `private-chat.${conversation.id}`;

    const [messages, setMessages] = useState([]);
    const [userTyping, setUserTyping] = useState(false);
    const scroll = useRef();

    //Check if user id against user1 and 2 to find recipient
    const receiverId = conversation.user_one.id === user.id ? conversation.user_two : conversation.user_one;
    const receiverName = conversation.user_one.email === user.email ? conversation.user_two.email : conversation.user_one.email

    const connectWebSocket = () => {
        const channel = echo.private(webSocketChannel);
        channel.listen('GotMessage', async (e) => {
            console.log("Message received")
            await getMessages();
        });

        channel.listen('UserTyping', (e) => {
            //If the receiver is the connected user set typing to true
            if (parseInt(e.receiver_id) === parseInt(user.id)) {
                console.log("Type event received")
                setUserTyping(e.isTyping);
            }
        });
    }

    const getMessages = async () => {
        try{
            const response = await getConversationMessages(conversation.id);
            setMessages(response);
            console.log(...messages)
        } catch (err) {
            console.error("Error fetching messages:", err);
        }
    }

    useEffect(() => {
        getMessages();
        connectWebSocket();

        return () => {
            echo.leave(webSocketChannel);
        }
    }, [conversation]);

    return (
        <div className="flex justify-center">
            <div className="w-3/4">
                <div className="border border-gray-300 rounded-lg">
                    <div className="bg-gray-100 p-4">Chat Box</div>
                    <div className="p-4 h-auto overflow-auto">
                        {
                            messages?.map((message) => (
                                <Message key={message.id}
                                         userId={user.id}
                                         message={message}
                                         username={user.id === message.sender_id ? user.email : receiverName}
                                />
                            ))
                        }
                        {/*<span ref={scroll}></span>*/}
                    </div>
                    {/*<div className={`text-center ${userTyping ? "typing" : ""}`}>*/}
                    {/*    {userTyping ? `User is typing...` : ""}*/}
                    {/*</div>*/}
                    <div className="card-footer">
                        <MessageInput conversation={conversation} receiver={receiverId}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConversationBox;