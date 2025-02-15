import React, {useState} from 'react';
import ShadowButton from "../Shadow-Button.tsx";
import {authenticateUser} from "../API/Auth.ts";
import {SubmitHandler, useForm} from "react-hook-form"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";

type FormFields = {
    email: string;
    password: string;
}
const Login = () => {
    const { register, handleSubmit, formState: {errors, isSubmitting}, setError } = useForm<FormFields>();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);


    // Handle form submission and validation
    const onSubmit: SubmitHandler<FormFields> = async (data, event: React.FormEvent) => {
        try{
            //this prevents the page from reloading when submitting
            event.preventDefault();
            await authenticateUser(email, password)
            //clear the form inputs after successful registration
            setEmail("")
            setPassword("")
        }catch (error){
            // Display error when api fails
            setError("password", {
                message: "Invalid email or password"
            });
        }
        console.log(data);
    }

    return (
        <div className={"flex items-center justify-center h-screen bg-primary"}>
            <h1 className={"absolute top-0 left-0 logo"}>Roommate Link</h1>
            <div className={"content-center w-3/5 md:w-2/5 xl:w-1/4"}>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className={"header-text text-center mb-8 "}>Login</h2>
                    <div>

                        {/*Email input*/}
                        <label htmlFor="email" className="block mb-2 header2-text inter">Email</label>
                        <input type="email"
                               {...register<"email">("email", {
                                   required: "Email is required",
                                   pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                               })}
                               id="email"
                               className="input-style"
                               value={email}
                               onChange={(event) => setEmail(event.target.value)}
                               placeholder="example@email.com"
                               autoComplete="on"
                               required/>

                        {/*Password Input with password visibility toggle*/}
                        <label htmlFor="password" className="block mb-2 mt-4 header2-text inter">Password</label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"}
                                   {...register<"password">("password", {
                                       required: "Password is required",
                                       minLength: {value: 8, message: "Password must have at least 8 characters"}
                                   })}
                                   id="password"
                                   className="input-style"
                                   value={password}
                                   onChange={(event) => setPassword(event.target.value)}
                                   autoComplete="on"
                                   required/>
                            {/*<button onClick={() => setShowPassword((prev) => !prev)}*/}
                            {/*        className="absolute end-0.5 bottom-2.5 text-sm px-4 py-1 hover:cursor-pointer">*/}
                            {/*    <FontAwesomeIcon className={"fa-xl"} icon={showPassword ? faEyeSlash : faEye}/>*/}
                            {/*</button>*/}
                        </div>

                        {/*email error message*/}
                        {errors.email && <div className={"text-xl font-bold text-red-500"}>{errors.email.message}</div>}
                        {/*Password error message*/}
                        {errors.password &&
                            <div className={"text-xl font-bold text-red-500"}>{errors.password.message}</div>}

                        {/*Other options*/}
                        <div className={"flex place-content-between text-sm font-medium"}>
                            <p>New User? <a className={"text-blue-500 hover:underline"}>Sign Up</a></p>
                            <p><a href="" className={"text-blue-500 hover:underline"}>Forgot Password?</a></p>
                        </div>

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
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;