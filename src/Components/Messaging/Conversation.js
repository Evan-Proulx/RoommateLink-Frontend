import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import SelectConversation from "./SelectConversation";
import ConversationBox from "./ConversationBox";
import { getAuthenticatedUser } from "../API/Profile";
import Navbar from "../Navbar";
const Conversation = () => {
    const [conversation, setConversation] = useState(null);
    const [receiver, setReceiver] = useState(null);
    const [user, setUser] = useState("");
    //Retrieve user information on page load
    useEffect(() => {
        getUser();
    }, []);
    //set conversation and send to chat box
    const handleConversationSelect = (conversation, receiver) => {
        console.log(conversation);
        setReceiver(receiver);
        setConversation(conversation);
    };
    //Get authenticated user information
    const getUser = async () => {
        try {
            const response = await getAuthenticatedUser();
            setUser(response);
        }
        catch (err) {
            console.log("Could not retrieve user: " + err);
        }
    };
    return (_jsxs("div", { className: "h-screen flex flex-col overflow-y-hidden", children: [_jsx(Navbar, {}), user ? (_jsxs("div", { className: "flex w-full bg-primary h-screen", children: [_jsx("div", { className: "w-1/4 max-w-80 border-2 border-r-gray-400 bg-gray-300 ease-in truncate", children: _jsx(SelectConversation, { user: user, onSetConversation: handleConversationSelect }) }), _jsx("div", { className: "w-full", children: conversation ? (_jsx(ConversationBox, { user: user, conversation: conversation, receiver: receiver })) : (_jsx("div", { className: "flex w-full h-full text-lg font-bold items-center justify-center", children: "Please select a user to start a conversation." })) })] })) : (_jsx("div", { className: "loader" }))] }));
};
export default Conversation;
