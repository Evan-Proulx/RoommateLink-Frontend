import axios from 'axios';
const rootUrl = import.meta.env.VITE_ROOT_URL;
export const discoverySearch = async (parameters) => {
    //Passing boolean values through the url converts them to strings
    //We have to manually convert them to integers before
    const convertedParams = {};
    // Process each parameter
    Object.entries(parameters).forEach(([key, value]) => {
        // Skip null, undefined, and empty string values
        if (value === null || value === undefined || value === '') {
            return;
        }
        // Convert boolean fields to 1 or 0
        if (['has_housing', 'pet_free', 'smokes', 'verified'].includes(key)) {
            convertedParams[key] = value ? 1 : 0;
        }
        else {
            // Keep string values the same
            convertedParams[key] = value;
        }
    });
    console.log("PARAMS", convertedParams);
    const token = localStorage.getItem("token");
    try {
        const response = await axios.get(`${rootUrl}/api/search`, {
            params: convertedParams,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        });
        console.log(response.data);
        return response.data;
    }
    catch (err) {
        throw new Error(err.response?.data?.message || "Failed to create profile");
    }
};
