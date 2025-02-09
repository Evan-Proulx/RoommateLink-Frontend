import Password from "./RegisterPassword.tsx";
import Name from "./RegisterName.tsx";
import Email from "./RegisterEmail.tsx";
import Phone from "./RegisterPhone.tsx";
import React from "react";
import ShadowButton from "../Shadow-Button.tsx";

function Register() {
    return (
        <div className={"flex items-center justify-center h-screen bg-[var(--color-primary)]"}>
            {/* Main Form Container */}
            <div className="max-w-3xl mx-auto p-6 mt-8 justify-center bg-[var(--color-secfdsafsaondry)]">

            {/* Sign Up Heading */}
            <h2 className="header-text text-center mb-8 ">Sign Up</h2>
            <div>

                {/* Name Input Field */}
                <Name/>

                {/* Email and Phone inputs fields */}
                <div className="flex flex-row space-x-4 mb-6">
                    <Email/>
                    <Phone/>
                </div>


                {/* Password Input Field */}
                <Password/>


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
                <div className={"flex flex-col items-center"}>
                    <ShadowButton value={"Sign Up"}/>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Register;
