import axios from "axios";
const rootUrl = import.meta.env.VITE_ROOT_URL;
export const reportUser = async (reportData) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.post(`${rootUrl}/api/reports/report`, reportData, {
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
export const checkReportEligibility = async (userId) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.post(`${rootUrl}/api/report/eligibility`, { reported_id: userId }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        console.log(response.data);
        return response.data;
    }
    catch (err) {
        console.error("Check report eligibility error:", err.response?.data || err.message);
        throw err;
    }
};
