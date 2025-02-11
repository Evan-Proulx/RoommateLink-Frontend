import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import ShadowButton from "./Shadow-Button.tsx";
import {auth} from "./API/Auth.ts";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (event: React.FormEvent) => {
        //this prevents the page from reloading when submitting
        event.preventDefault();
        await auth(email, password)
        //clear the form inputs after successful registration
        setEmail("")
        setPassword("")
    }
    return (
        <div className={"flex items-center justify-center h-screen bg-[var(--color-primary)]"}>
            <div className={"content-center w-2/5 xl:w-1/4"}>
                <form>
                    <h2 className={"header-text text-center mb-8 "}>Login</h2>
                    <div>
                        {/*Email input*/}
                        <label className="block mb-2 header2-text inter">Email</label>
                        <input type="email" id="first_name" value={email} onChange={(event) => setEmail(event.target.value)}
                               className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-full p-4"
                               placeholder="example@email.com" required/>
                        <label className="block mb-2 mt-4 header2-text inter">Password</label>

                        {/*Password Input with password visibility toggle*/}
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} value={password} onChange={(event) => setPassword(event.target.value)}
                                   className="block w-full p-4 bg-white border-2 border-black text-gray-900 text-sm rounded-lg"
                                   required/>
                            {/*<button onClick={() => setShowPassword((prev) => !prev)}*/}
                            {/*        className="absolute end-0.5 bottom-2.5 text-sm px-4 py-1 hover:cursor-pointer">*/}
                            {/*    <FontAwesomeIcon className={"fa-xl"} icon={showPassword ? faEyeSlash : faEye}/>*/}
                            {/*</button>*/}
                        </div>


                        {/*Other options*/}
                        <div className={"flex place-content-between text-sm font-medium"}>
                            <p>New User? <a className={"text-blue-500 hover:underline"}>Sign Up</a></p>
                            <p><a href="" className={"text-blue-500 hover:underline"}>Forgot Password?</a></p>
                        </div>

                        {/*Submit button*/}
                        <div className={"flex flex-col items-center"}>
                            <ShadowButton value={"Login"} onClick={handleLogin}/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;