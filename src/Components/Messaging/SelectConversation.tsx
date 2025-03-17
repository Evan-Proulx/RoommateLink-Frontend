import React, {useEffect, useState} from 'react';
import {fetchConversations, fetchUsers, getConversationsProfiles} from "../API/Messaging.ts";

const SelectConversation = ({onSetConversation}) => {
    const [users, setUsers] = useState([]);
    const [userConversations, setUserConversations] = useState([]);
    const [conversationProfiles, setConversationProfiles] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // getUsers();
        getUserConversations();
        // getConversationProfiles();
    }, []);

    // const getUsers = async () => {
    //     try{
    //         setLoading(true);
    //         const response = await fetchUsers();
    //         setUsers(response.data);
    //     }catch(err){
    //         console.error(err);
    //     }finally{setLoading(false)}
    // }

    const getUserConversations = async () => {
        try {
            setLoading(true)
            const response = await fetchConversations();
            setUserConversations(response)
        } catch (error) {
            console.error("Error fetching conversations:", error);
        } finally {
            setLoading(false)
        }
    }

    // TODO: DELETE if we can get user name stored in the account table
    // const getConversationProfiles = async () => {
    //     try {
    //         setLoading(true)
    //         const response = await getConversationsProfiles();
    //         setConversationProfiles(response);
    //     } catch (error) {
    //         console.error("Error fetching conversation profiles:", error);
    //     } finally {
    //         setLoading(false)
    //     }
    // }

    // const createConversations = async (userId) => {
    //     setSelectedUserId(userId);
    //
    //     try{
    //         const response = await handleCreateConversation(userId);
    //         console.log(response);
    //     }catch (error) {
    //         console.error("Error creating conversation:", error);
    //         setSelectedUserId("");
    //     }finally {setLoading(false)}
    // }

    //Sent to the chatBox component and searches for messages in conversation
    const handleSetConversation = (conversation) => {
        //get the conversation from array of user's conversations
        const selectedConversation = userConversations.find(convo => convo.id === parseInt(conversation));
        //send conversation to chatBox
        onSetConversation(selectedConversation);
    }

    return (
        <div className="mb-4">
            <h1 className={" p-2 text-2xl font-black"}>Your Chats</h1>
            {loading ? (
                <p>Loading users...</p>
            ) : (
            <ul className={"w-full"}>
                {userConversations.map(convo => {
                    return (
                        <li key={convo.id} value={convo.id} className={"w-full p-1 border-t-2 border-gray-400"}
                            onClick={() => handleSetConversation(convo.id)}>
                            {/*Change to img*/}
                            <div className={"flex"}>
                                <div className={"w-10 h-10 bg-red-800 rounded-full m-2"}></div>
                                <div><p className={"font-extrabold text-xl mt-1"}>{convo.user_two.email.slice(0,5)}</p>
                                    <p className={"font-bold text-md text-gray-600 "}>Last sent message...</p></div>
                            </div>

                        </li>
                    );
                })}
            </ul>
            )}
        </div>
    );
};

export default SelectConversation;