import React, {useState} from 'react';

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
                            <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px"
                                 fill="#000000">
                                <path
                                    d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/>
                            </svg>
                        </button>
                    </div>

                    {/*Other options*/}
                    <div className={"flex place-content-between text-sm font-medium"}>
                        <p>New User? <a className={"text-blue-600"}>Sign Up</a></p>
                        <p><a href="" className={"text-blue-600"}>Forgot Password?</a></p>
                    </div>

                    {/*Submit button*/}
                    <div className={"flex flex-col items-center"}>
                        <button type="submit" className={"items-center w-1/2 p-2 mt-12 text-white text-3xl font-bold bg-[var(--color-secondary)] cursor-pointer shadow-btn"}>Login</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;