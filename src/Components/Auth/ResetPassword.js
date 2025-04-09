import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import ShadowButton from "../Shadow-Button";
import { resetPassword } from "../API/Auth";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
const Login = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm();
    //email and token should be passed to this component
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    //Get token and email from url
    const [searchParams] = useSearchParams();
    const email = searchParams.get("email");
    const token = searchParams.get("token");
    //Navigate to survey page after successful password reset
    const navigate = useNavigate();
    // Handle form submission and validation
    const onSubmit = async (data, event) => {
        try {
            //this prevents the page from reloading when submitting
            event.preventDefault();
            await resetPassword(token, email, password, confirmPassword);
            //clear the form inputs after successful registration
            setPassword("");
            setConfirmPassword("");
            navigate("/login");
        }
        catch (error) {
            // Display error when api fails
            setError("password", {
                message: "Invalid email or password"
            });
        }
        console.log(data);
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "flex items-center justify-center h-screen bg-primary", children: [_jsx("h1", { className: "absolute top-0 left-0 logo", children: "Roommate Link" }), _jsx("div", { className: "w-3/5 md:w-2/5 xl:w-1/4", children: _jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsx("h2", { className: "header-text text-center mb-8 ", children: "Reset Password" }), _jsxs("div", { children: [_jsxs("div", { children: [_jsx("label", { className: "block mb-2 mt-4 header2-text inter", children: "New Password" }), _jsx("input", { type: "password", ...register("password", {
                                                    required: "Password is required",
                                                    minLength: { value: 8, message: "Password must have at least 8 characters" }
                                                }), value: password, onChange: (event) => setPassword(event.target.value), className: "input-style", required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block mb-2 mt-4 header2-text inter", children: "Confirm Password" }), _jsx("input", { type: "password", ...register("confirmPassword", {
                                                    required: "Password is required",
                                                    validate: (value) => value === password || "Passwords do not match"
                                                }), value: confirmPassword, onChange: (event) => setConfirmPassword(event.target.value), className: "input-style", required: true })] })] }), errors.password &&
                                _jsx("div", { className: "text-xl font-bold text-red-500", children: errors.password.message }), errors.confirmPassword &&
                                _jsx("div", { className: "text-xl font-bold text-red-500", children: errors.confirmPassword.message }), _jsx("div", { className: "flex flex-col items-center space-y-2", children: _jsx(ShadowButton, { disabled: isSubmitting, value: isSubmitting ? "Resetting" : "Reset" }) })] }) })] }) }));
};
export default Login;
