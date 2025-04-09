import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { forgotPassword } from "../API/Auth";
import ShadowButton from "../Shadow-Button";
const RecoverPassword = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm();
    const [email, setEmail] = useState("");
    const [emailSent, setEmailSent] = useState(false);
    const onSubmit = async (data, event) => {
        try {
            //this prevents the page from reloading when submitting
            console.log(`${email}`);
            event.preventDefault();
            await forgotPassword(email);
            setEmailSent(true);
            //clear the form inputs after successful registration
            setEmail("");
        }
        catch (error) {
            // Display error when api fails
            setError("email", {
                message: "Invalid email"
            });
        }
    };
    return (_jsxs("div", { className: "flex items-center justify-center bg-primary h-screen ", children: [_jsx("h1", { className: "absolute top-0 left-0 logo", children: "Roommate Link" }), _jsx("div", { className: "w-3/5 md:w-2/5 xl:w-1/4", children: _jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsxs("div", { className: "flex flex-col", children: [_jsx("h2", { className: "header-text text-center", children: "Recover Password" }), _jsx("p", { className: "text-md font-bold text-center", children: "Enter your email and we will send you a password reset link." }), _jsx("input", { type: "email", ...register("email", {
                                        required: "Email is required",
                                        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    }), id: "email", className: "input-style", placeholder: "example@email.com", autoComplete: "on", value: email, onChange: (event) => setEmail(event.target.value), required: true }), errors.email &&
                                    _jsx("div", { className: "text-xl font-bold text-red-500", children: errors.email.message })] }), _jsxs("div", { className: "text-center", children: [_jsx(ShadowButton, { value: "Send reset link", width: "2/3" }), emailSent &&
                                    _jsx("p", { className: "text-md text-text font-bold text-center w-full pt-12", children: "We've sent a password reset link to your email. Please check your inbox. Wait a minute before resubmitting." })] })] }) })] }));
};
export default RecoverPassword;
