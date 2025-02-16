import React, {useState} from "react";
import ShadowButton from "../../Shadow-Button.tsx";
import {registerUser} from "../../API/Auth.ts";
import InputComponent from "../../InputComponent.tsx";
import {SubmitHandler, useForm} from "react-hook-form"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEyeSlash, faHouse, } from "@fortawesome/free-solid-svg-icons";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom"; // Import the Google icon

type FormFields = {
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}
function Register() {
    const {register, handleSubmit, formState: {errors, isSubmitting}, setError} = useForm<FormFields>();

    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const onSubmit: SubmitHandler<FormFields> = async (data, event: React.FormEvent) => {
        try{
            //this prevents the page from reloading when submitting
            event.preventDefault();
            await registerUser(email, phone, password, confirmPassword)
            //clear the form inputs after successful registration
            setEmail("")
            setPhone("")
            setPassword("")
            setConfirmPassword("")
        }catch (error){
            // Display error when api fails
            setError("password", {
                message: "Invalid email or password"
            });
        }
    }

    return (
        <div className={"flex items-center justify-center h-screen bg-primary"}>
            <h1 className={"absolute top-0 left-0 logo"}>Roommate Link</h1>
            <div className={"w-3/5 "}>
                {/* Sign Up Heading */}
                <h2 className="header-text text-center mb-8 ">Sign Up</h2>

                <form onSubmit={handleSubmit(onSubmit)} className={" w-full items-center"}>
                    {/* Email and Phone Inputs */}
                    <div className="flex flex-col justify-center md:flex-row space-x-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 header2-text">Email</label>
                            <input type="email"
                                   {...register<"email">("email", {
                                       required: "Email is required",
                                       pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                   })}
                                   id="email"
                                   value={email}
                                   onChange={(event) => setEmail(event.target.value)}
                                   className="input-style w-full"
                                   placeholder="example@email.com"
                                   autoComplete="on"
                                   required/>
                        </div>
                        <div>
                            <label htmlFor="tel" className="block mb-2 header2-text">Phone</label>
                            <input type="tel"
                                   {...register<"phone">("phone", {
                                       required: "Phone is required",
                                       minLength: {value: 10, message: "Please input a valid phone number"}
                                   })}
                                   id="tel"
                                   value={phone}
                                   onChange={(event) => setPhone(event.target.value)}
                                   className={"input-style w-full"}
                                   placeholder="222-222-2222"
                                   autoComplete="on"
                                   required/>
                        </div>
                    </div>

                    {/* Password Fields */}
                    <div className="flex flex-col justify-center md:flex-row space-x-4">
                        <div>
                            <label className="block mb-2 mt-4 header2-text inter">Password</label>
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
                    {/*Other options*/}
                    <div className={"text-center text-sm font-medium "}>
                        <p>Already have an account? <Link to={"/login"} className={"text-blue-500 hover:underline"}>Login here</Link></p>
                    </div>

                    {/*Error messages*/}
                    {errors.email &&
                        <div className={"text-xl font-bold text-red-500 text-center"}>{errors.email.message}</div>}
                    {errors.phone &&
                        <div className={"text-xl font-bold text-red-500 text-center"}>{errors.phone.message}</div>}
                    {errors.password &&
                        <div className={"text-xl font-bold text-red-500 text-center"}>{errors.password.message}</div>}
                    {errors.confirmPassword &&
                        <div
                            className={"text-xl font-bold text-red-500 text-center"}>{errors.confirmPassword.message}</div>}

                    {/* Sign Up Button */}
                    <div className={"flex flex-col items-center space-y-2"}>
                        <ShadowButton disabled={isSubmitting} type="submit"
                                      value={isSubmitting ? "Logging in..." : "Sign up"}/>

                        <p className={"text-gray-600"}>or</p>

                        {/*Google sso button*/}
                        <button type="button"
                                className="w-fit text-white bg-secondary hover:bg-blue-800/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 ">
                            <FontAwesomeIcon className="w-4 h-4 me-2" icon={faGoogle}/>
                            Sign in with Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
        ;
}

export default Register;
