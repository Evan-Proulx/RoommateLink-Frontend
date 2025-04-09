import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { fetchConversations, getConversationsProfiles } from "../API/Messaging";
const SelectConversation = ({ user, onSetConversation }) => {
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
            setLoading(true);
            const response = await fetchConversations();
            setUserConversations(response);
        }
        catch (error) {
            console.error("Error fetching conversations:", error);
        }
        finally {
            setLoading(false);
        }
    };
    const getConversationProfiles = async () => {
        try {
            setLoading(true);
            const response = await getConversationsProfiles();
            //Only get id and name from the profile. //Todo add avatar to this
            const profileInfo = response.map(profile => ({
                id: profile.profileData.account_id,
                name: `${profile.profileData.first_name} ${profile.profileData.last_name}`,
                avatar: imgUrl + profile.profileData.profile_picture,
            }));
            setConversationProfiles(profileInfo);
        }
        catch (error) {
            console.error("Error fetching conversation profiles:", error);
        }
        finally {
            setLoading(false);
        }
    };
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
    };
    //Checks whether the first or second user in the conversation is the logged in user and returns the other
    const checkProfile = (userOneId, userTwoId) => {
        //Finds the user in the list of profiles
        //user.id is the id of the current user
        if (user.id === userOneId) {
            return conversationProfiles.find(profile => profile.id === userTwoId);
        }
        else {
            return conversationProfiles.find(profile => profile.id === userOneId);
        }
    };
    return (_jsxs("div", { className: "mb-4", children: [_jsx("h1", { className: " p-2 text-2xl font-black", children: "Your Chats" }), loading ? (_jsx("p", { children: "Loading users..." })) : (_jsx("ul", { className: "w-full", children: userConversations.map(convo => {
                    //Get the conversation recipient's profile
                    const userProfile = checkProfile(convo.user_one.id, convo.user_two.id);
                    return (_jsx("li", { value: convo.id, className: "w-full p-1 border-t-2 border-gray-400 cursor-pointer hover:bg-gray-400", onClick: () => handleSetConversation(convo.id, userProfile), children: _jsxs("div", { className: "flex", children: [_jsx("img", { src: userProfile?.avatar, alt: "Profile", className: `w-10 h-10 m-2 rounded-full` }), _jsxs("div", { children: [_jsx("p", { className: "font-extrabold text-xl mt-1", children: userProfile ? userProfile.name : "Username" }), _jsx("p", { className: "font-bold text-md text-gray-600 truncate pr-2 ", children: convo.last_message ? (convo.last_message.length > 20 ? convo.last_message.substring(0, 20) + "..." : convo.last_message) : ("No messages...") })] })] }) }, convo.id));
                }) }))] }));
};
export default SelectConversation;
