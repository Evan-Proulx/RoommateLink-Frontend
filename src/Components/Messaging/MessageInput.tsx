import React, {useRef, useState} from 'react';
import {createMessage, setTyping} from "../API/Messaging"
const MessageInput = ({conversation, receiverId}) => {
    const [message, setMessage] = useState("");
    const [userTyping, setUserTyping] = useState(false);
    const [loading, setLoading] = useState(true);
    const typingTimeout = useRef<number | null>(null);

    //Create message in conversation
    const messageRequest = async (text) => {
        try {
            setLoading(true);
            console.log(conversation.id)
            const response = await createMessage(text, conversation.id);
            console.log(response)
        } catch (err) {console.error(err);}
        finally {setLoading(false);}
    }

    const sendMessage = (e) => {
        e.preventDefault();

        if (message.trim() === "") {
            alert("Please enter a message!");
            return;
        }
        setTypingStatus(false);
        setUserTyping(false);

        messageRequest(message);
        setMessage("");
    };


    //Send typing event to server to indicate user is typing.
    const setTypingStatus = async (typing) => {
        console.log(receiverId, conversation.id, typing)
        const response = await setTyping(receiverId, conversation.id, typing);
    }


    const handleTyping = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const currentText = e.target.value;
        setMessage(currentText);

        //Clear previous timeout when user starts typing
        if (typingTimeout.current !== null){
            clearTimeout(typingTimeout.current as number);
        }

        //Set typing status to true if user types in the input field
        if (!userTyping && currentText.trim() !== ""){
            setUserTyping(true);
            setTypingStatus(true);
        }

        //Set typing status to false after 5 seconds idle
        typingTimeout.current = setTimeout(() => {
            if (userTyping) {
                setUserTyping(false);
                setTypingStatus(false);
            }
        }, 5000) as unknown as number;
    }


    return (
        <div>
            <form>
                <label htmlFor="chat" className="sr-only">Your message</label>
                <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                    <textarea id="chat" rows={1}
                              onChange={handleTyping} value={message}
                              className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Your message..."></textarea>
                    <button type="submit"
                            onClick={(e) => sendMessage(e)}
                            value={message}
                            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                        <svg className="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path
                                d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                        </svg>
                        <span className="sr-only">Send message</span>
                    </button>
                </div>
            </form>

        </div>
    );
};

export default MessageInput;