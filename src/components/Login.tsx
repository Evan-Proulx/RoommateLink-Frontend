import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import ShadowButton from "./Shadow-Button.tsx";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className={"w-2/5 xl:w-1/4"}>
            <form>
                <h2 className={"header-text text-center mb-8 "}>Login</h2>
                <div>
                    {/*Email input*/}
                    <label className="block mb-2 header2-text inter">Email</label>
                    <input type="email" id="first_name"
                           className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg block w-full p-4"
                           placeholder="example@email.com" required/>
                    <label className="block mb-2 mt-4 header2-text inter">Password</label>

                    {/*Password Input with password visibility toggle*/}
                    <div className="relative">
                        <input type={showPassword ? "text" : "password"} className="block w-full p-4 bg-white border-2 border-black text-gray-900 text-sm rounded-lg" required/>
                        <button onClick={() => setShowPassword((prev) => !prev)} className="absolute end-0.5 bottom-2.5 text-sm px-4 py-1 hover:cursor-pointer">
                            <FontAwesomeIcon className={"fa-xl"} icon={showPassword ? faEyeSlash : faEye} />
                        </button>
                    </div>


                    {/*Other options*/}
                    <div className={"flex place-content-between text-sm font-medium"}>
                        <p>New User? <a className={"text-blue-500 hover:underline"}>Sign Up</a></p>
                        <p><a href="" className={"text-blue-500 hover:underline"}>Forgot Password?</a></p>
                    </div>

                    {/*Submit button*/}
                    <div className={"flex flex-col items-center"}>
                        <ShadowButton value={"Login"}/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;