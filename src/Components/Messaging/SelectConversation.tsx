import React, {useEffect, useState} from 'react';
import {fetchConversations, getConversationsProfiles} from "../API/Messaging";

const SelectConversation = ({user, onSetConversation}) => {
    const imgUrl = import.meta.env.VITE_ROOT_URL + "/storage/";

    const [users, setUsers] = useState([]);
    const [userConversations, setUserConversations] = useState([]);
    const [conversationProfiles, setConversationProfiles] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // getUsers();
        getUserConversations();

        getConversationProfiles();
    }, []);


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

    const getConversationProfiles = async () => {
        try {
            setLoading(true)
            const response = await getConversationsProfiles();
            //Only get id and name from the profile. //Todo add avatar to this
            const profileInfo = response.map(profile => ({
                id: profile.profileData.account_id,
                name: `${profile.profileData.first_name} ${profile.profileData.last_name}`,
                avatar: imgUrl + profile.profileData.profile_picture,
            }));
            setConversationProfiles(profileInfo);
        } catch (error) {
            console.error("Error fetching conversation profiles:", error);
        } finally {
            setLoading(false)
        }
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

    //Sent to the chatBox component and searches for messages in conversation.
    //Receiver profile is passed so their name and id can easily be accessed in the conversation box.
    //This is easier to pass once than getting the user info by their id in the conversation each time
    const handleSetConversation = (conversation, receiverProfile) => {
        //get the conversation from array of user's conversations
        const selectedConversation = userConversations.find(convo => convo.id === parseInt(conversation));
        //send conversation to chatBox and pass receiver profile
        onSetConversation(selectedConversation, receiverProfile);
    }

    //Checks whether the first or second user in the conversation is the logged in user and returns the other
    const checkProfile = (userOneId, userTwoId) => {
        //Finds the user in the list of profiles
        //user.id is the id of the current user
        if(user.id === userOneId) {return conversationProfiles.find(profile => profile.id === userTwoId)
        }else{return conversationProfiles.find(profile => profile.id === userOneId)}
    }

    return (
        <div className="mb-4">
            <h1 className={" sm:p-2 sm:text-2xl text-xs font-black"}>Your Chats</h1>
            {loading ? (
                <p>Loading users...</p>
            ) : (
            <ul className={"w-full"}>
                {userConversations.map(convo => {
                    //Get the conversation recipient's profile
                    const userProfile = checkProfile(convo.user_one.id, convo.user_two.id);
                    return (
                        <li key={convo.id} value={convo.id} className={"w-full p-1 border-t-2 border-gray-400 cursor-pointer hover:bg-gray-400"}
                            onClick={() => handleSetConversation(convo.id, userProfile)}>
                            {/*Change to img*/}
                            <div className={"flex"}>
                                <img src={userProfile?.avatar}
                                     alt="Profile"
                                     className={`w-10 h-10 m-2 rounded-full`}/>
                                <div>
                                    <p className={"hidden md:block font-extrabold text-xl mt-1"}>{userProfile ? userProfile.name : "Username"}</p>
                                    <p className={"hidden md:block font-bold text-md text-gray-600 truncate pr-2 "}>
                                        {convo.last_message ? (
                                            convo.last_message.length > 20 ? convo.last_message.substring(0, 20) + "..." : convo.last_message
                                        ):(
                                            "No messages..."
                                        )}
                                    </p>
                                </div>
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