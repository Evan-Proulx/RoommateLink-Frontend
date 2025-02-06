import Password from "./RegisterPassword.tsx";
import Name from "./RegisterName.tsx";
import Email from "./RegisterEmail.tsx";
import Phone from "./RegisterPhone.tsx";

function Register() {

    return (
        <div>
            <h1 className="text-6xl text-red-400 text-left">Roommate Link</h1>

            <div className="align-middle m-0">
                <h2>Sign Up</h2>
                    <Name/>
                <div className="flex flex-row space-x-4 max-w-3xl mx-auto mt-2">
                    <Email />
                    <Phone />
                </div>

                <Password/>
            </div>

        </div>
    )
}

export default Register