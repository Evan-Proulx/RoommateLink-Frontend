import axios from "axios";
const rootUrl = import.meta.env.VITE_ROOT_URL;

//index all users in the database. this is for testing so we can easily create converesations between users
export const fetchUsers = async () => {
    const token = localStorage.getItem("token");

    try {
        const response = await axios.get(`${rootUrl}/api/users`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        });
        console.log("test");
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

// Get conversations for a specific user
export const fetchConversations = async () => {
    const token = localStorage.getItem("token");

    try{
        const response  = await axios.get(`${rootUrl}/api/conversations`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        });
        console.log(response.data);
        return response.data;
    }catch (error){
        console.error('Error fetching conversations:', error);
    }
}

//Create a new conversation with newUser with userId
export const handleCreateConversation = async (userId) => {
    const token = localStorage.getItem("token");

    try {
        const response = await axios.post(`${rootUrl}/api/conversations`, {user_id: userId}, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        });
        console.log("Conversation created successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating conversation:', error);
    }
}


//Create message in conversation

export const createMessage = async (text, conversationId) => {
    const token = localStorage.getItem("token");

    try {
        const response = await axios.post(`${rootUrl}/api/conversations`,
            {text, conversationId}, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            });
        console.log("Message created successfully:", response.data);
        return response.data;
    }catch (error){console.error('Could not create message: ', error)}
}