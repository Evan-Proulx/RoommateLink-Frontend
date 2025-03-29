import axios from "axios";

//create new user
export const registerUser = async (email: string, phone: string, password: string, passwordConfirmation: string) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/register',
            { email, phone, password, password_confirmation: passwordConfirmation }, // Data object
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }
        );
        console.log(response.data);
        const token = response.data.token;
        localStorage.setItem("token", token);
    } catch (err) {
        throw new Error(err.response?.data?.message || "Registration failed");
    }
};

// Authenticate user
export const authenticateUser = async (email: string) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/login',
            {email}, // Data object
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
        console.log(response.data);

        // TODO: This isn't the safest option
        //Store token in local storage
        const token = response.data.token;
        localStorage.setItem("token", token);
    } catch (err) {
        throw new Error(err.response?.data?.message || "authentication failed");
    }
};

export const resetPassword = async (token: string, email: string, password: string, passwordConfirmation: string) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/reset-password',
            {token, email, password, password_confirmation: passwordConfirmation}, // Data object
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
        console.log(response.data);

        // TODO: This isn't the safest option
        //Store token in local storage
    } catch (err) {
        throw new Error(err.response?.data?.message || "authentication failed");
    }
};


export const forgotPassword = async (email: string) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/forgot-password',
            {email}, // Data object
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
        console.log(response.data);
    } catch (err) {
        throw new Error(err.response?.data?.message || "authentication failed");
    }
};


