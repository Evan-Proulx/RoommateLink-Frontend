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
        getConversationProfiles();
    },[]);

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
        try{
            setLoading(true)
            const response = await fetchConversations();
            setUserConversations(response)
        }catch (error) {
            console.error("Error fetching conversations:", error);
        } finally {setLoading(false)}
    }

    const getConversationProfiles = async () => {
        try{
            setLoading(true)
            const response = await getConversationsProfiles();
            setConversationProfiles(response);
        }catch (error) {
            console.error("Error fetching conversation profiles:", error);
        } finally {setLoading(false)}
    }

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
        <div className=" user-selector mb-4">
            <h1 className={" p-2 text-2xl font-black"}>Your Chats</h1>
            {loading ? (
                <p>Loading users...</p>
            ) : (
                <select
                    className="form-control"
                    onChange={(e) => handleSetConversation(e.target.value)}
                    defaultValue="">
                    <option value="" disabled>Select a Chat</option>
                    {userConversations.map(convo => {
                        return (
                            //fix this since one user is the current user [random]
                            <option key={convo.id} value={convo.id}>
                                Chat with {convo.user_two.email}
                            </option>
                        );
                    })}
                </select>
            )}

            <ul className={"w-full"}>
                <li className={"w-full p-1 border-y-2 border-gray-400"}>
                    {/*Change to img*/}
                    <div className={"flex"}>
                        <div className={"w-10 h-10 bg-red-800 rounded-full m-2"}></div>
                        <div><p className={"font-extrabold text-xl mt-1"}>Name</p>
                            <p className={"font-bold text-md text-gray-600 "}>Last sent message...</p></div>
                    </div>

                </li>
            </ul>
        </div>
    );
};

export default SelectConversation;