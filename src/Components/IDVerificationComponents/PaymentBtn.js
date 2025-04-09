import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { isPaymentComplete } from "../API/Verification";
const rootUrl = import.meta.env.VITE_ROOT_URL;
function PaymentBtn() {
    const [paymentLink, setPaymentLink] = useState(null);
    const [isPaid, setIsPaid] = useState(false);
    const [checkingStatus, setCheckingStatus] = useState(true);
    useEffect(() => {
        const checkPaymentStatus = async () => {
            const paid = await isPaymentComplete();
            setIsPaid(paid);
            setCheckingStatus(false);
        };
        checkPaymentStatus();
    }, []);
    const handlePaymentClick = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("Authentication token not found.");
            return;
        }
        try {
            const response = await axios.post(`${rootUrl}/api/payment-link`, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (response.data.url) {
                setPaymentLink(response.data.url);
            }
            else {
                console.log('Error: No URL returned', response.data);
            }
        }
        catch (error) {
            console.error('Error fetching payment link:', error);
        }
    };
    if (paymentLink) {
        window.location.href = paymentLink;
    }
    return (_jsxs("div", { className: "text-center p-6", children: [_jsx("p", { className: "text-lg mb-4", children: "You will need to pay 10 Canadian dollars." }), _jsx("p", { className: "text-sm text-gray-600 mb-6", children: "Click the button below to start the payment process." }), checkingStatus ? (_jsx("div", { className: "flex items-center justify-center space-x-2", children: _jsx("p", { className: "text-lg text-green-700 font-medium ", children: "Checking Your payment status..." }) })) : (_jsx("button", { onClick: handlePaymentClick, disabled: isPaid, className: `p-3 font-semibold rounded-lg transition-all duration-300
                        ${isPaid ? "bg-white text-green-600 cursor-not-allowed border-2 border-green-700" : "bg-green-600 text-white border-2 border-green-700 hover:bg-green-700"}`, children: isPaid ? "Paid Successfully" : "Start Payment" }))] }));
}
export default PaymentBtn;
