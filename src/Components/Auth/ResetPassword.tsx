import React, {useState} from 'react';
import ShadowButton from "../Shadow-Button";
import {resetPassword} from "../API/Auth";
import {SubmitHandler, useForm} from "react-hook-form"
import {useNavigate, useSearchParams} from "react-router-dom"
type FormFields = {
    password: string;
    confirmPassword: string;
}
const Login = () => {
    const { register, handleSubmit, formState: {errors, isSubmitting}, setError } = useForm<FormFields>();

    //email and token should be passed to this component
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    //Get token and email from url
    const [searchParams] = useSearchParams();
    const email = searchParams.get("email")
    const token = searchParams.get("token")

    //Navigate to survey page after successful password reset
    const navigate = useNavigate()



    // Handle form submission and validation
    const onSubmit: SubmitHandler<FormFields> = async (data, event: React.FormEvent) => {
        try{
            //this prevents the page from reloading when submitting
            event.preventDefault();
            await resetPassword(token, email, password, confirmPassword)
            //clear the form inputs after successful registration
            setPassword("")
            setConfirmPassword("")
            navigate("/login")
        }catch (error){
            // Display error when api fails
            setError("password", {
                message: "Invalid email or password"
            });
        }
        console.log(data);
    }

    return (
        <>
            <div className={"flex items-center justify-center h-screen bg-primary"}>
                <h1 className={"absolute top-0 left-0 logo"}>Roommate Link</h1>
                <div className={"w-3/5 md:w-2/5 xl:w-1/4"}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className={"header-text text-center mb-8 "}>Reset Password</h2>
                        <div>

                            {/* Password Fields */}
                            <div>
                                <label className="block mb-2 mt-4 header2-text inter">New Password</label>
                                <input type={"password"}
                                       {...register<"password">("password", {
                                           required: "Password is required",
                                           minLength: {value: 8, message: "Password must have at least 8 characters"}
                                       })}
                                       value={password}
                                       onChange={(event) => setPassword(event.target.value)}
                                       className="input-style"
                                       required/>
                            </div>
                            <div>
                                <label className="block mb-2 mt-4 header2-text inter">Confirm Password</label>
                                <input type={"password"}
                                       {...register<"confirmPassword">("confirmPassword", {
                                           required: "Password is required",
                                           validate: (value) => value === password || "Passwords do not match"
                                       })}
                                       value={confirmPassword}
                                       onChange={(event) => setConfirmPassword(event.target.value)}
                                       className="input-style"
                                       required/>
                            </div>
                        </div>

                        {/*Password error message*/}
                        {errors.password &&
                            <div className={"text-xl font-bold text-red-500"}>{errors.password.message}</div>}
                        {errors.confirmPassword &&
                            <div className={"text-xl font-bold text-red-500"}>{errors.confirmPassword.message}</div>}


                        {/* Sign Up Button */}
                        <div className={"flex flex-col items-center space-y-2"}>
                            <ShadowButton disabled={isSubmitting}
                                          value={isSubmitting ? "Resetting" : "Reset"}/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;