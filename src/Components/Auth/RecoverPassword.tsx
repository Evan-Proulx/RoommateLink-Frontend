import React, {useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {forgotPassword, registerUser, resetPassword} from "../API/Auth.ts";
import ShadowButton from "../Shadow-Button.tsx";

type FormFields = {
    email: string;
}
const RecoverPassword = () => {
    const {register, handleSubmit, formState: {errors, isSubmitting}, setError} = useForm<FormFields>();
    const [email, setEmail] = useState("")
    const [emailSent, setEmailSent] = useState(false)

    const onSubmit: SubmitHandler<FormFields> = async (data, event: React.FormEvent) => {
        try {
            //this prevents the page from reloading when submitting
            console.log(`${email}`)
            event.preventDefault();
            await forgotPassword(email);
            setEmailSent(true);
            //clear the form inputs after successful registration
            setEmail("")
        } catch (error) {
            // Display error when api fails
            setError("email", {
                message: "Invalid email"
            });
        }
    }
    return (
        <div className={"flex items-center justify-center bg-primary h-screen "}>
            <h1 className={"absolute top-0 left-0 logo"}>Roommate Link</h1>
            <div className={"w-3/5 md:w-2/5 xl:w-1/4"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={"flex flex-col"}>
                        <h2 className={"header-text text-center"}>Recover Password</h2>
                        <p className={"text-md font-bold text-center"}>Enter your email and we will send you a password
                            reset
                            link.</p>
                        <input type="email"
                               {...register<"email">("email", {
                                   required: "Email is required",
                                   pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                               })}
                               id="email"
                               className="input-style"
                               placeholder="example@email.com"
                               autoComplete="on"
                               value={email}
                               onChange={(event) => setEmail(event.target.value)}
                               required/>

                        {errors.email &&
                            <div className={"text-xl font-bold text-red-500"}>{errors.email.message}</div>}
                    </div>

                    <div className={"text-center"}>
                        <ShadowButton value={"Send reset link"} type={"submit"} width={"2/3"}/>
                        {/*Display after email is sent*/}
                        {emailSent &&
                        <p className="text-md text-text font-bold text-center w-full pt-12">We've sent a password reset link to your email. Please check your inbox. Wait a minute before resubmitting.</p>}
                    </div>
                </form>
            </div>

        </div>
    );
};

export default RecoverPassword;