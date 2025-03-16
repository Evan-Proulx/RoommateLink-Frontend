import axios from "axios";
const rootUrl = import.meta.env.VITE_ROOT_URL;

export const createProfile = async (profileData) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.post(`${rootUrl}/api/profile`, profileData,
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
        const response = await axios.get(`${rootUrl}/api/profile`,
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
export const uploadImage = async (imageFile) => {
    try {
        const formData = new FormData();
        formData.append("file", imageFile);

        const response = await axios.post(`${rootUrl}/api/image`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        console.log(response.data); // Log the response to check the file URL
        return response.data; // Return the uploaded image data
    } catch (err) {
        console.error("Upload failed:", err.response?.data?.message || err.message);
        throw new Error(err.response?.data?.message || "Failed to upload image");
    }
};

export const getAuthenticatedUser = async () => {
    const token = localStorage.getItem("token");

    try{
        const response = await axios.get(`${rootUrl}/api/account`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        console.log(response.data)
        return response.data;
    }catch (err) {
        console.log(err)
    }
}

