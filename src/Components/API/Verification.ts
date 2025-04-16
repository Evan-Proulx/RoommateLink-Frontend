import axios from 'axios';

const rootUrl = import.meta.env.VITE_ROOT_URL;

export async function isPaymentComplete(): Promise<boolean> {
    const token = localStorage.getItem("token");

    if (!token) {
        console.error("No token found.");
        return false;
    }

    try {
        const response = await axios.get(`${rootUrl}/api/payment-status`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data.status === 'paid';
    } catch (error) {
        console.error("Failed to check payment status:", error);
        return false;
    }
}

export async function isUserVerified(): Promise<boolean> {
    const token = localStorage.getItem("token");

    if (!token) {
        console.error("No token found.");
        return false;
    }

    try {
        const response = await axios.get(`${rootUrl}/api/verification-status`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data.status === 'verified';
    } catch (error) {
        console.error("Failed to check verification status:", error);
        return false;
    }
}


export async function checkUserVerificationStatus(userId: number | string | undefined): Promise<boolean> {
    if (!userId) return false;
    const token = localStorage.getItem("token");
    if (!token) return false;
    try {
        const response = await axios.get(`${rootUrl}/api/users/${userId}/verification-status`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data.status === 'verified';
    } catch (error) {
        console.error(`Failed to check verification status for user ID ${userId}:`, error);
        return false;
    }
}