import axios from "axios";
import {forEach} from "@react-google-maps/api/dist/utils/foreach";
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

//Gets matching users for the feed.
export const getMatchingUsers = async () => {
    const token = localStorage.getItem("token");

    try{
        const response = await axios.get(`${rootUrl}/api/matchingUsers`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        console.log(response.data)
        return response.data;
    }catch (err) {
        console.log(err)
    }
}

export const uploadProfileMedia = async (image, video) => {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    if (image) formData.append("profilePicture", image);
    if (video) formData.append("introductoryVideo", video);


    try {
        const response = await axios.post(`${rootUrl}/api/uploadProfileMedia`, formData, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        console.log(response.data)
    } catch (err) {
        console.error("Upload error:", err.response?.data || err.message);
        throw err;
    }
}

export const uploadPropertyImages = async (images) => {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    if (images) images.forEach((image) => formData.append("images[]", image));


    try {
        const response = await axios.post(`${rootUrl}/api/uploadPropertyMedia`, formData, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        console.log(response.data)
    } catch (err) {
        console.error("Upload error:", err.response?.data || err.message);
        throw err;
    }
}

export const retrievePropertyImages = async (propertyId) => {
    const token = localStorage.getItem("token");

    try {
        const response = await axios.get(`${rootUrl}/api/propertyImages/${propertyId}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        console.log(response.data)
        return response.data;
    } catch (err) {
        console.error("Upload error:", err.response?.data || err.message);
        throw err;
    }
}

