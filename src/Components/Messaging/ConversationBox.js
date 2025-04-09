import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import MessageInput from "./MessageInput";
import echo from "../../../echo.js";
import { getConversationMessages } from "../API/Messaging";
import Message from "./Message";
import { MoreVert } from "@mui/icons-material";
const ConversationBox = ({ user, conversation, receiver }) => {
    //Channel name for chat.
    const webSocketChannel = `private-chat.${conversation.id}`;
    const [messages, setMessages] = useState([]);
    const [userTyping, setUserTyping] = useState(false);
    const scroll = useRef(null);
    const messageRef = useRef(null);
    //Check if user id against user1 and 2 to find recipient
    const connectWebSocket = () => {
        const channel = echo.private(webSocketChannel);
        channel.listen('GotMessage', async (e) => {
            console.log("Message received");
            await getMessages();
        });
        channel.listen('UserTyping', (e) => {
            //If the receiver is the connected user set typing to true
            if (parseInt(e.receiver_id) === parseInt(user.id)) {
                console.log("Type event received");
                setUserTyping(e.isTyping);
            }
        });
    };
    const getMessages = async () => {
        try {
            const response = await getConversationMessages(conversation.id);
            setMessages(response);
            setTimeout(scrollToBottom, 0);
            console.log(...messages);
        }
        catch (err) {
            console.error("Error fetching messages:", err);
        }
    };
    //Scrolls to bottom of component
    const scrollToBottom = () => {
        if (messageRef.current) {
            messageRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest'
            });
        }
    };
    //Get messages from conversation and connect to new channel when conversation is selected
    useEffect(() => {
        getMessages();
        connectWebSocket();
        return () => {
            echo.leave(webSocketChannel);
        };
    }, [conversation]);
    return (_jsxs("div", { className: "h-screen flex flex-col relative", children: [_jsxs("div", { className: "flex justify-between w-full h-20 border-2 border-b-gray-400 bg-primary items-center p-4 absolute top-0 left-0 right-0 z-10", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("img", { src: receiver?.avatar, alt: "Profile", className: `w-10 h-10 m-2 rounded-full` }), _jsx("div", { children: _jsx("p", { className: "font-extrabold text-xl", children: receiver.name }) })] }), _jsx("div", { children: _jsx(MoreVert, {}) })] }), _jsxs("div", { className: "flex-grow overflow-auto p-6 mt-20 mb-40 justify-center", children: [_jsx("div", { className: "h-auto", ref: messageRef, children: 
                        //Display messages in message array
                        messages?.map((message, index) => (_jsx(Message, { userId: user.id, message: message, username: user.id === message.sender_id ? user.name : receiver.name }, message.id))) }), _jsx("div", { className: `text-center ${userTyping ? "typing" : ""}`, children: userTyping ? `User is typing...` : "" }), _jsx("div", { className: "fixed bottom-0 right-0 w-3/4 p-4 z-10 mt-60", children: _jsx(MessageInput, { conversation: conversation, receiverId: receiver.id }) })] })] }));
};
export default ConversationBox;
