import Password from "./RegisterPassword.tsx";
import Name from "./RegisterName.tsx";
import Email from "./RegisterEmail.tsx";
import Phone from "./RegisterPhone.tsx";

function Register() {
    return (
    <div>
        {/* Page Title */}
    <h1 className="text-6xl text-red-500 text-left m-4">Roommate Link</h1>

        {/* Main Form Container */}
        <div className="max-w-3xl mx-auto p-6 mt-8 bg-white justify-center">

            {/* Sign Up Heading */}
            <h2 className="font-bold text-4xl text-red-500 m-6 text-center">Sign Up</h2>
            <div>

                {/* Name Input Field */}
                <Name />

                {/* Email and Phone inputs fields */}
                <div className="flex flex-row space-x-4 mb-6">
                    <Email />
                    <Phone />
                </div>


                {/* Password Input Field */}
                <Password />


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
                <div className="m-6 text-center">
                    <button className="bg-blue-400 text-3xl text-white w-full max-w-xs py-2 shadow-lg font-bold  hover:bg-orange-400 hover:scale-105 transform transition-all">
                        Sign Up
                    </button>

                </div>
            </div>
        </div>
    </div>
    );
}

export default Register;
