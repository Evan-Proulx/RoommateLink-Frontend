import React, {FormEvent, useState} from "react";
import ShadowButton from "../Shadow-Button.tsx";
import {register} from "../API/Auth.ts";
import InputComponent from "../InputComponent.tsx";

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
                    {/* Email and Phone Inputs */}
                    <div className="flex flex-row space-x-4 mb-6">
                        <InputComponent
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="example@email.com"
                        />
                        <InputComponent
                            label="Phone"
                            type="tel"
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                            placeholder="222-222-2222"
                        />
                    </div>

                    {/* Password Fields */}
                    <div className="flex flex-row space-x-4 max-w-3xl mx-auto mt-4">
                        <InputComponent
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <InputComponent
                            label="Confirm Password"
                            type="password"
                            value={confirmPassword}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                        />
                    </div>

                {/* Sign Up Button */}
                <div className={"flex justify-center"}>
                    <ShadowButton value={"Sign Up"} onClick={handleRegistration}/>
                </div>
            </div>
        </div>
</div>
)
    ;
}

export default Register;
