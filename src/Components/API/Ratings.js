import axios from 'axios';
const rootUrl = import.meta.env.VITE_ROOT_URL;
export const getRating = async (userId) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.get(`${rootUrl}/api/rating/${userId}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        console.log(response.data);
        return response.data;
    }
    catch (err) {
        console.error("Upload error:", err.response?.data || err.message);
        throw err;
    }
};
export const setUserRating = async (rating) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.post(`${rootUrl}/api/rating/rate`, rating, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        console.log(response.data);
        return response.data;
    }
    catch (err) {
        console.error("Upload error:", err.response?.data || err.message);
        throw err;
    }
};
