import axios from "axios";
const rootUrl = import.meta.env.VITE_ROOT_URL;

export const getBookmarks = async () => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.get(`${rootUrl}/api/bookmarks`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            }
        );
        console.log(response.data);
        return response.data;
    } catch (err) {
        throw new Error(err.response?.data?.message || "Failed to fetch bookmarks");
    }
}
export const bookmarkUser = async (id) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.post(`${rootUrl}/api/bookmark/${id}`, {},
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            }
        );
        console.log(response.data);
    } catch (err) {
        throw new Error(err.response?.data?.message || "Failed to create bookmark");
    }
}

export const unbookmarkUser = async (id) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.delete(`${rootUrl}/api/bookmark/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            }
        );
        console.log(response.data);
    } catch (err) {
        throw new Error(err.response?.data?.message || "Failed to delete bookmark");
    }
}

export const getInterestedUsers = async (id) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.get(`${rootUrl}/api/interested/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            }
        );
        console.log(response.data);
    } catch (err) {
        throw new Error(err.response?.data?.message || "Failed to get interested users");
    }
}