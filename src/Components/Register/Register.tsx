import React, {FormEvent, useState} from "react";
import ShadowButton from "../Shadow-Button.tsx";
import {register} from "../API/Auth.ts";

function Register() {
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleRegistration = async (event: React.FormEvent) => {
        //this prevents the page from reloading when submitting
        event.preventDefault();
        await register(email, phone, password, confirmPassword)
        //clear the form inputs after successful registration
        setEmail("")
        setPhone("")
        setPassword("")
        setConfirmPassword("")
    }

    return (
        <div className={"flex items-center justify-center h-screen bg-[var(--color-primary)]"}>
            {/* Main Form Container */}
            <div className="max-w-3xl mx-auto p-6 mt-8 justify-center bg-[var(--color-secfdsafsaondry)]">

                {/* Sign Up Heading */}
                <h2 className="header-text text-center mb-8 ">Sign Up</h2>
                <div>
                    {/*name inputs were here*/}

                    {/* Email and Phone inputs fields */}
                    <div className="flex flex-row space-x-4 mb-6">
                        {/*Email Field*/}
                        <div className="flex flex-col space-y-4 flex-1 mt-2">
                            <label className="block mb-2 header3-text inter">Email</label>
                            <input value={email} onChange={(event) => setEmail(event.target.value)} type="email"
                                   placeholder={"example@email.com"}
                                   className="p-2 mt-1 bg-white border-2 border-black text-gray-900 rounded-lg block w-full"/>
                        </div>

                        {/*Phone field*/}
                        <div className="flex flex-col space-y-4 flex-1 mt-2">
                            <label className="block mb-2 header3-text inter">Phone</label>
                            <input value={phone} onChange={(event) => setPhone(event.target.value)}
                                   placeholder={"222-222-2222"} type="tel"
                                   className="p-2 mt-1 bg-white border-2 border-black text-gray-900 rounded-lg block w-full"/>
                        </div>
                    </div>


                    {/* Password Input Field */}
                    <div className="flex flex-row space-x-4 max-w-3xl mx-auto mt-4">
                        <div className="flex flex-col space-y-4 flex-1">
                            <label className="block mb-2 header3-text inter">Password</label>
                            <input value={password} onChange={(event) => setPassword(event.target.value)}
                                   type="password"
                                   className="p-2 mt-1 bg-white border-2 border-black text-gray-900 rounded-lg block w-full"/>
                        </div>

                        <div className="flex flex-col space-y-4 flex-1">
                            <label className="block mb-2 header3-text inter">Confirm Password</label>
                            <input value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}
                                   type="password"
                                   className="p-2 mt-1 bg-white border-2 border-black text-gray-900 rounded-lg block w-full"/>
                        </div>
                    </div>

                    {/* If the user already has an account link to Login page */}
                    <div className="mt-4">
                        <p className="text-sm text-center">
                            Already have an account?{" "}
                            <a href="" className="text-blue-500 font-bold hover:underline">
                                Login Here
                            </a>
                        </p>
                    </div>


                    {/* Sign Up Button */}
                    <div className={"flex justify-center"}>
                        <ShadowButton value={"Sign Up"} onClick={handleRegistration}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
