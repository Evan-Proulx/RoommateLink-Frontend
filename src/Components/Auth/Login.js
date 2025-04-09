import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import ShadowButton from "../Shadow-Button";
import { authenticateUser } from "../API/Auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SSOButton from "./SSOButton";
const Login = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    // Handle form submission and validation
    const onSubmit = async (data, event) => {
        try {
            //this prevents the page from reloading when submitting
            event.preventDefault();
            await authenticateUser(email);
            //clear the form inputs after successful registration
            setEmail("");
            setPassword("");
        }
        catch (error) {
            // Display error when api fails
            setError("password", {
                message: "Invalid email or password"
            });
        }
        console.log(data);
    };
    return (_jsxs("div", { className: "flex items-center justify-center h-screen bg-primary", children: [_jsx("h1", { className: "absolute top-0 left-0 logo", children: "Roommate Link" }), _jsx("div", { className: "content-center w-3/5 md:w-2/5 xl:w-1/4", children: _jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsx("h2", { className: "header-text text-center mb-8 ", children: "Login" }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block mb-2 header2-text inter", children: "Email" }), _jsx("input", { type: "email", ...register("email", {
                                        required: "Email is required",
                                        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    }), id: "email", className: "input-style", value: email, onChange: (event) => setEmail(event.target.value), placeholder: "example@email.com", autoComplete: "on", required: true }), errors.email && _jsx("div", { className: "text-xl font-bold text-red-500", children: errors.email.message }), _jsxs("div", { className: "flex place-content-between text-sm font-medium", children: [_jsxs("p", { children: ["New User? ", _jsx(Link, { to: "/register", className: "text-blue-500 hover:underline", children: "Sign Up" })] }), _jsx("p", { children: _jsx(Link, { to: "/forgot-password", className: "text-blue-500 hover:underline", children: "Forgot Password?" }) })] }), _jsxs("div", { className: "flex flex-col items-center space-y-2", children: [_jsx(ShadowButton, { disabled: isSubmitting, type: "submit", value: isSubmitting ? "Logging in..." : "Sign up", width: "64" }), _jsx("p", { className: "text-gray-600", children: "or" }), _jsx(SSOButton, {})] })] })] }) })] }));
};
export default Login;
