import { useState } from 'react';
import axios from 'axios';
import PaymentBtn from "./PaymentBtn.tsx";
import VerificationBtn from "./VerificationBtn.tsx";

const rootUrl = import.meta.env.VITE_ROOT_URL;

function IDVerificationPage() {


    return (
        <div className="flex items-center justify-center min-h-screen bg-yellow-100">
            <div className="flex flex-col items-center justify-center space-y-6 p-6 bg-white rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to ID Verification</h1>
                <h2 className="text-lg text-gray-600 text-center mb-6">Before you start, make sure you understand the following important information:</h2>

                <PaymentBtn />
                <VerificationBtn />
            </div>
        </div>


    );
}

export default IDVerificationPage;