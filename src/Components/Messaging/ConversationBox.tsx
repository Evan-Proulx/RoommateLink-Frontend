import React, {useEffect, useRef, useState} from 'react';
import MessageInput from "./MessageInput";
import echo from "../../../echo.js"
import {deleteConversation, getConversationMessages} from "../API/Messaging";
import Message from "./Message";
import {Delete, More, MoreVert} from "@mui/icons-material";
import {getProfile} from "../API/Profile";
import {UserProfile} from "../../ProfileData";
import {useNavigate} from "react-router-dom";
import CardSkeletonLoader from "../CardComponents/CardSkeletonLoader";
import ProfileCard from "../CardComponents/ProfileCard";
import MessageSkeleton from "./MessageSkeleton";

const ConversationBox = ({user, conversation, receiver}) => {
    const rootUrl = import.meta.env.VITE_ROOT_URL;
    //Channel name for chat.
    const webSocketChannel = `private-chat.${conversation.id}`;
    const [receiverData, setReceiverData] = useState<UserProfile>();
    const [messages, setMessages] = useState([]);
    const [userTyping, setUserTyping] = useState(false);

    const scroll = useRef(null);
    const messageRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    //Check if user id against user1 and 2 to find recipient
    // const connectWebSocket = () => {
    //     const channel = echo.private(webSocketChannel);
    //     channel.listen('GotMessage', async (e) => {
    //         console.log("Message received")
    //         await getMessages();
    //     });
    //
    //     channel.listen('UserTyping', (e) => {
    //         //If the receiver is the connected user set typing to true
    //         if (parseInt(e.receiver_id) === parseInt(user.id)) {
    //             console.log("Type event received")
    //             setUserTyping(e.isTyping);
    //         }
    //     });
    // }

    // Retrieve messages every 30 seconds as an alternative to websockets.
    // This could be increased.
    useEffect(() => {
        //set interval runs after the delay in milliseconds
        const interval = setInterval(() => {
            console.log('Retrieving messages');
            getMessages()
        }, 30000);

        // Cleanup by preventing continuous reruns when the component is unused
        return () => clearInterval(interval);
    }, []);

    const getMessages = async () => {
        try{
            setLoading(true);
            const response = await getConversationMessages(conversation.id);
            setMessages(response);
            setTimeout(scrollToBottom, 0);
            console.log(...messages)
        } catch (err) {
            console.error("Error fetching messages:", err);
        }finally {
            setLoading(false);
        }
    }

    //Scrolls to bottom of component
    const scrollToBottom = () => {
            if (messageRef.current) {
                messageRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'end',
                        inline: 'nearest'
                    })
            }
    };

    const retrieveReceiverProfile = async () => {
        console.log("test")
        if (receiver.id){
            try{
                const response = await getProfile(receiver.id);
                setReceiverData(response);
                console.log(response)
            }catch (err) {
                console.error("Error fetching messages:", err);
            }
        }
    }

    const deleteConvo = async () => {
        try{
            const response = await deleteConversation(conversation.id);
            console.log(response)
            navigate(0)
        }catch (err) {
            console.error("Error fetching messages:", err);
        }


    }

    //Get messages from conversation and connect to new channel when conversation is selected
    useEffect(() => {
        getMessages();
        retrieveReceiverProfile();
        console.log("test")

        // connectWebSocket();
        //
        // return () => {
        //     echo.leave(webSocketChannel);
        // }
    }, [conversation]);


    return (
        <div className={"h-screen flex flex-col relative"}>
            <div className="flex justify-between w-full h-20 border-2 border-b-gray-400 bg-primary items-center p-4 absolute top-0 left-0 right-0 z-10">
                {/*Navigate to message recipient's profile when clicked*/}
                <div onClick={() => navigate('/profile', {state: {profile: receiverData, myProfileDisplayed: false}})}
                     className="flex items-center cursor-pointer" title={"Visit Profile"}>

                    <img src={receiver?.avatar}
                         alt="Profile"
                         className={`w-12 h-12 m-2 rounded-full`}/>

                    {/*Display property image on top of avatar*/}
                    {receiverData ? (receiverData.personalData.has_housing ?
                            <img src={rootUrl + "/storage/" + receiverData.propertyData.property_photos[0].image_path}
                         alt="Profile"
                         className={`w-8 h-8 m-0 rounded-full -translate-x-8 translate-y-3`}/> : ""
                    ) : null}

                    <div>
                        <p className="font-extrabold text-xl hover:underline hover:text-gray-700">{receiver.name}</p>
                        {receiverData ? (
                            receiverData.personalData.has_housing ?
                                <h4 className="text-gray-600 sm:font-semibold text-sm sm:text-md">{receiverData.propertyData.bedroom_count} bedrooms
                                    + {receiverData.propertyData.bathroom_count} Bathroom
                                    · {receiverData.propertyData.square_feet} Square
                                    Feet</h4> : ""
                        ) : null}
                    </div>
                </div>

                {/*Conversation action buttons*/}
                <div className={"space-x-2"}>
                    <button onClick={deleteConvo}><Delete/></button>
                    <button><MoreVert/></button>
                </div>
            </div>
            <div className="flex-grow overflow-auto p-6 mt-20 mb-40 justify-center">
                    <div className="h-auto" ref={messageRef}>
                        {loading ? (
                            // Show skeleton messages while loading
                            [...Array(1)].map((_, i) => (
                                <MessageSkeleton/>
                            ))
                        ) : messages && messages.length > 0 ? (
                            // Show profile cards when there are users
                            messages?.map((message, index) => (
                                <Message key={message.id}
                                         userId={user.id}
                                         message={message}
                                         username={user.id === message.sender_id ? user.name : receiver.name}
                                />
                            ))
                        ) : (
                            // Show message when there are no users
                            <div className="flex items-center justify-center text-gray-500 pt-20">
                                <p>Conversation is empty! Send a message using the text input below.</p>
                            </div>
                        )}
                    </div>
                    <div className={`text-center ${userTyping ? "typing" : ""}`}>
                        {userTyping ? `User is typing...` : ""}
                    </div>
                <div className=" fixed bottom-0 w-3/4 p-4 z-10 mt-60">
                    <MessageInput conversation={conversation} receiverId={receiver.id} onMessageSent={() => getMessages()}/>
                </div>
            </div>
        </div>
    );
};

export default ConversationBox;