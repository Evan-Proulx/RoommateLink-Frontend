import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { isPaymentComplete } from "../API/Verification";
const rootUrl = import.meta.env.VITE_ROOT_URL;
function VerificationBtn() {
    const [isEnabled, setIsEnabled] = useState(false);
    const [checking, setChecking] = useState(true);
    useEffect(() => {
        const check = async () => {
            const result = await isPaymentComplete();
            setIsEnabled(result);
            setChecking(false);
        };
        check();
    }, []);
    async function startIDVerification() {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("Authentication token not found.");
            return;
        }
        try {
            const res = await fetch(`${rootUrl}/api/start-id-verification`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });
            const data = await res.json();
            console.log("Response from server:", data);
            if (data.url) {
                window.location.href = data.url;
            }
            else {
                console.error(data.error || "Something went wrong.");
            }
        }
        catch (error) {
            console.error("Error during verification:", error);
        }
    }
    return (_jsxs("div", { className: "text-center p-6", children: [_jsx("p", { className: "text-lg mb-4", children: "Then you will start the verification process." }), _jsx("p", { className: "text-sm text-gray-600 mb-6", children: "Click the button below to begin ID verification." }), _jsx("button", { onClick: startIDVerification, disabled: !isEnabled || checking, className: `p-3 font-semibold rounded-lg border-2 transition-all duration-300 ${isEnabled && !checking
                    ? "bg-blue-600 text-white border-blue-700 hover:bg-blue-700"
                    : "bg-gray-300 text-blue-700 border-blue-500 cursor-not-allowed"}`, children: checking
                    ? "Checking Payment..."
                    : isEnabled
                        ? "Start ID Verification"
                        : "Please Pay First" })] }));
}
export default VerificationBtn;
