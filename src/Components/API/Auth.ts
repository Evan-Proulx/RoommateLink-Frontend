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
    } catch (err) {
        throw new Error(err.response?.data?.message || "Registration failed");
    }
};

// Authenticate user
export const authenticateUser = async (email: string, password: string) => {
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

        // TODO: This isn't the safest option
        //Store token in local storage
        const token = response.data.token;
        localStorage.setItem("token", token);
    } catch (err) {
        throw new Error(err.response?.data?.message || "authentication failed");
    }
};


