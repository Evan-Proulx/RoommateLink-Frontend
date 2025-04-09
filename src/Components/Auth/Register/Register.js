import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import ShadowButton from "../../Shadow-Button";
import { registerUser } from "../../API/Auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SSOButton from "../SSOButton"; // Import the Google icon
function Register() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm();
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const onSubmit = async (data, event) => {
        try {
            //this prevents the page from reloading when submitting
            event.preventDefault();
            await registerUser(email, phone, password, confirmPassword);
            //clear the form inputs after successful registration
            setEmail("");
            setPhone("");
            setPassword("");
            setConfirmPassword("");
        }
        catch (error) {
            // Display error when api fails
            setError("password", {
                message: "Invalid email or password"
            });
        }
    };
    return (_jsxs("div", { className: "flex items-center justify-center h-screen bg-primary", children: [_jsx("h1", { className: "absolute top-0 left-0 logo", children: "Roommate Link" }), _jsxs("div", { className: "w-3/5 ", children: [_jsx("h2", { className: "header-text text-center mb-8 ", children: "Sign Up" }), _jsxs("form", { onSubmit: handleSubmit(onSubmit), className: " w-full items-center", children: [_jsxs("div", { className: "flex flex-col justify-center md:flex-row space-x-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block mb-2 header2-text", children: "Email" }), _jsx("input", { type: "email", ...register("email", {
                                                    required: "Email is required",
                                                    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                                }), id: "email", value: email, onChange: (event) => setEmail(event.target.value), className: "input-style w-full", placeholder: "example@email.com", autoComplete: "on", required: true })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "tel", className: "block mb-2 header2-text", children: "Phone" }), _jsx("input", { type: "tel", ...register("phone", {
                                                    minLength: { value: 10, message: "Please input a valid phone number" }
                                                }), id: "tel", value: phone, onChange: (event) => setPhone(event.target.value), className: "input-style w-full", placeholder: "222-222-2222", autoComplete: "on" })] })] }), _jsxs("div", { className: "flex flex-col justify-center md:flex-row space-x-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block mb-2 mt-4 header2-text inter", children: "Password" }), _jsx("input", { type: "password", ...register("password", {
                                                    required: "Password is required",
                                                    minLength: { value: 8, message: "Password must have at least 8 characters" }
                                                }), value: password, onChange: (event) => setPassword(event.target.value), className: "input-style", required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block mb-2 mt-4 header2-text inter", children: "Confirm Password" }), _jsx("input", { type: "password", ...register("confirmPassword", {
                                                    required: "Password is required",
                                                    validate: (value) => value === password || "Passwords do not match"
                                                }), value: confirmPassword, onChange: (event) => setConfirmPassword(event.target.value), className: "input-style", required: true })] })] }), _jsx("div", { className: "text-center text-sm font-medium ", children: _jsxs("p", { children: ["Already have an account? ", _jsx(Link, { to: "/login", className: "text-blue-500 hover:underline", children: "Login here" })] }) }), errors.email &&
                                _jsx("div", { className: "text-xl font-bold text-red-500 text-center", children: errors.email.message }), errors.phone &&
                                _jsx("div", { className: "text-xl font-bold text-red-500 text-center", children: errors.phone.message }), errors.password &&
                                _jsx("div", { className: "text-xl font-bold text-red-500 text-center", children: errors.password.message }), errors.confirmPassword &&
                                _jsx("div", { className: "text-xl font-bold text-red-500 text-center", children: errors.confirmPassword.message }), _jsxs("div", { className: "flex flex-col items-center space-y-2 ", children: [_jsx(ShadowButton, { disabled: isSubmitting, value: isSubmitting ? "Logging in..." : "Sign up", width: "64" }), _jsx("p", { className: "text-gray-600", children: "or" }), _jsx(SSOButton, {})] })] })] })] }));
}
export default Register;
