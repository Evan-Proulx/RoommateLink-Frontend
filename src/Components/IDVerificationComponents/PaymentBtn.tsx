import { useState, useEffect } from 'react';
import axios from 'axios';
import { isPaymentComplete } from "../API/Verification";

const rootUrl = import.meta.env.VITE_ROOT_URL;

function PaymentBtn() {
    const [paymentLink, setPaymentLink] = useState<string | null>(null);
    const [isPaid, setIsPaid] = useState<boolean>(false);
    const [checkingStatus, setCheckingStatus] = useState<boolean>(true);

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
            } else {
                console.log('Error: No URL returned', response.data);
            }
        } catch (error) {
            console.error('Error fetching payment link:', error);
        }
    };

    if (paymentLink) {
        window.location.href = paymentLink;
    }

    return (
        <div className="text-center p-6">
            <p className="text-lg mb-4">You will need to pay 10 Canadian dollars.</p>
            <p className="text-sm text-gray-600 mb-6">Click the button below to start the payment process.</p>

            {/* Conditionally render loading state */}
            {checkingStatus ? (
                <div className="flex items-center justify-center space-x-2">
                    <p className="text-lg text-green-700 font-medium ">Checking Your payment status...</p>
                </div>
            ) : (
                <button
                    onClick={handlePaymentClick}
                    disabled={isPaid} // Disable the button if the user is already paid
                    className={`p-3 font-semibold rounded-lg transition-all duration-300
                        ${isPaid ? "bg-white text-green-600 cursor-not-allowed border-2 border-green-700" : "bg-green-600 text-white border-2 border-green-700 hover:bg-green-700"}`}
                >
                    {isPaid ? "Paid Successfully" : "Start Payment"}
                </button>
            )}
        </div>
    );
}

export default PaymentBtn;
