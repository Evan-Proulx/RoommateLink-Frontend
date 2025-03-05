import axios from "axios";

export const createProfile = async (profileData) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/profile', profileData,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            }
        );
        console.log(response.data);
    } catch (err) {
        throw new Error(err.response?.data?.message || "Failed to create profile");
    }
}
export const getProfileData = async (token) => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/profile',
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            }
        );
        return response.data
    } catch (err) {
        throw new Error(err.response?.data?.message || "Failed to create profile");
    }
}