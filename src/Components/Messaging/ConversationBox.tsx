import React, {useEffect, useRef, useState} from 'react';
import MessageInput from "./MessageInput.tsx";
import echo from "../../../echo.js"
import {getConversationMessages} from "../API/Messaging.ts";
import Message from "./Message.tsx";
import {More, MoreVert, Settings} from "@mui/icons-material";


const ConversationBox = ({user, conversation}) => {
    //Channel name for chat.
    const webSocketChannel = `private-chat.${conversation.id}`;

    const [messages, setMessages] = useState([]);
    const [userTyping, setUserTyping] = useState(false);
    const scroll = useRef();

    //Check if user id against user1 and 2 to find recipient
    const receiver = conversation.user_one.id === user.id ? conversation.user_two : conversation.user_one;
    const receiverName = conversation.user_one.email === user.email ? conversation.user_two.email : conversation.user_one.email

    const connectWebSocket = () => {
        const channel = echo.private(webSocketChannel);
        console.log(channel)
        console.log("connected?")
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
        <div className={"h-screen flex flex-col relative"}>
            <div className="flex justify-between w-full h-20 border-2 border-b-gray-400 bg-primary items-center p-4 absolute top-0 left-0 right-0 z-10">
                <div className="flex items-center">
                    <div className="w-10 h-10 bg-red-800 rounded-full m-2"></div>
                    <div>
                        <p className="font-extrabold text-xl">Username</p>
                        <p className="font-bold text-md text-gray-600">Last sent message...</p>
                    </div>
                </div>
                <div>
                    <MoreVert />
                </div>
            </div>
            <div className="flex-grow overflow-auto p-6 mt-20 mb-28 justify-center">
                    <div className="h-auto">
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
                    <div className={`text-center ${userTyping ? "typing" : ""}`}>
                        {userTyping ? `User is typing...` : ""}
                    </div>
                <div className="fixed bottom-0 right-0 w-3/4 p-4 z-10 mt-60">
                    <MessageInput conversation={conversation} receiverId={receiver.id}/>
                    </div>
            </div>
        </div>
    );
};

export default ConversationBox;