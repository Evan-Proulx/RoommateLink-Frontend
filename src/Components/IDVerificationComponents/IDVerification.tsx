import { Tooltip } from "@mui/material";
import PaymentBtn from "./PaymentBtn.tsx";
import VerificationBtn from "./VerificationBtn.tsx";

function IDVerificationPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 to-white px-4">
            <div className="bg-white rounded-3xl shadow-lg p-10 max-w-lg w-full text-center space-y-8">
                {/* Main title */}
                <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
                    ID Verification
                </h1>

                {/* Description text */}
                <p className="text-lg text-gray-700">
                    Secure your account and help other users trust you by verifying your identity.
                </p>

                <div className="space-y-4">
                    {/* Badge Icon with Tooltip */}
                    <Tooltip title="User verified their account with ID" arrow>
                        <svg
                            className="w-16 h-16 mx-auto text-blue-600"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Tooltip>

                    {/* Verification Instructions */}
                    <p className="text-md text-gray-600 leading-relaxed">
                        To gain the trust of others, verify your identity and get an official badge. This will show others that you've successfully verified your account through ID verification.
                    </p>
                    <p className="text-md text-gray-600 leading-relaxed">
                        Before we start you need to know the following:
                    </p>
                </div>

                {/* Buttons Section */}
                <div className="space-y-4">
                    <PaymentBtn />
                    <VerificationBtn />
                </div>

                {/* Footer Text */}
                <p className="text-sm text-gray-500">
                    By verifying your account, you help create a more trusted environment for everyone.
                </p>
            </div>
        </div>
    );
}

export default IDVerificationPage;
