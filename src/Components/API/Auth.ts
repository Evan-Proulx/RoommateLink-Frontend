import axios from "axios";

//create new user
export const register = async (email: string, phone: string, password: string, passwordConfirmation: string) => {
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
    } catch (err) {
        console.error("Error getting token:", err);
    }
};

// Authenticate user
export const auth = async (email: string, password: string) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/login',
            {email, password}, // Data object
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
        console.log(response.data);
    } catch (err) {
        console.error("Error getting token:", err);
    }
};


