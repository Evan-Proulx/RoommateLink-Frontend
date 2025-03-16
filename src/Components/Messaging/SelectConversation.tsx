import React, {useEffect, useState} from 'react';
import {fetchConversations, fetchUsers} from "../API/Messaging.ts";

const SelectConversation = ({onSetConversation}) => {
    const [users, setUsers] = useState([]);
    const [userConversations, setUserConversations] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUsers();
        getUserConversations();
    },[]);

    const getUsers = async () => {
        try{
            setLoading(true);
            const response = await fetchUsers();
            setUsers(response.data);
        }catch(err){
            console.error(err);
        }finally{setLoading(false)}
    }

    const getUserConversations = async () => {
        try{
            setLoading(true)
            const response = await fetchConversations();
            setUserConversations(response)
        }catch (error) {
            console.error("Error fetching conversations:", error);
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
        <div className="user-selector mb-4">
            <h4>Select a user to chat with:</h4>
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
        </div>
    );
};

export default SelectConversation;