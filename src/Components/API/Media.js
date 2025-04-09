import axios from "axios";
const rootUrl = import.meta.env.VITE_ROOT_URL;
export const uploadProfileMedia = async (image, video) => {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    if (image)
        formData.append("profilePicture", image);
    if (video)
        formData.append("introductoryVideo", video);
    try {
        const response = await axios.post(`${rootUrl}/api/uploadProfileMedia`, formData, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        console.log(response.data);
    }
    catch (err) {
        console.error("Upload error:", err.response?.data || err.message);
        throw err;
    }
};
export const uploadPropertyImages = async (images) => {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    if (images)
        images.forEach((image) => formData.append("images[]", image));
    try {
        const response = await axios.post(`${rootUrl}/api/uploadPropertyMedia`, formData, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        console.log(response.data);
    }
    catch (err) {
        console.error("Upload error:", err.response?.data || err.message);
        throw err;
    }
};
export const uploadHouseTour = async (video) => {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    if (video)
        formData.append("houseTour", video);
    try {
        const response = await axios.post(`${rootUrl}/api/uploadPropertyTour`, formData, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        console.log(response.data);
    }
    catch (err) {
        console.error("Upload error:", err.response?.data || err.message);
        throw err;
    }
};
export const retrievePropertyImages = async (propertyId) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.get(`${rootUrl}/api/propertyImages/${propertyId}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        return response.data;
    }
    catch (err) {
        console.error("Upload error:", err.response?.data || err.message);
        throw err;
    }
};
