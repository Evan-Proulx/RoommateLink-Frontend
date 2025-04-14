import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom";

function TermsOfUse() {
    const navigate = useNavigate();

    const termsData = [
        {
            question: "1. Introduction",
            answer:
                "RoommateLink where service appears. These terms and conditions ('Terms') dictate our website and services. Usage of our service implies that you agree to comply with them.",
        },
        {
            question: "2. Use of Services",
            answer:
                "You agree to use our services in accordance with laws and for legal purposes. You may not attempt unauthorized breaches of our website.",
        },
        {
            question: "3. Account Registration",
            answer:
                "You are responsible for providing accurate information during registration. Unauthorized use of your account must be notified with due notice.",
        },
        {
            question: "4. User Content",
            answer:
                "The media you upload to the website remains your property. You also grant RoommateLink a transferable, royalty-free license to use, display, and distribute the media on our platform.",
        },
        {
            question: "5. Prohibited Activities",
            answer:
                "The following actions are prohibited uses of our service:\n\n- Violation of laws and set regulations.\n- Posting offensive or offensive information.\n- Engaging in spam or scam-related activities.",
        },
        {
            question: "6. Termination of Service",
            answer:
                "We can suspend your account, without notice, for any reason in violation of these Terms.",
        },
        {
            question: "7. Liability",
            answer:
                "Our liability is limited to the maximum extent permitted by law. We are not responsible for any loss, damage, or data breach that may occur while using our services.",
        },
        {
            question: "8. Modifications to Terms",
            answer:
                "We reserve the right to modify these Terms at any time, and will provide notice of updates. Continued use bounds you to the updated Terms.",
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gradient-to-r from-white to-yellow-50 w-full px-4 sm:px-6 md:px-12 lg:px-24 py-6 space-y-8">
            <h1 className="font-supermercado sm:p-6 text-red-600 mt-[-10px] md:mt-[-30px] text-4xl sm:text-5xl md:text-6xl text-center">
                Roommate Link - Terms of Use
            </h1>

            {termsData.map((faq, index) => (
                <div
                    key={index}
                    className="bg-yellow-100 p-4 rounded-lg shadow-2xl m-3 md:m-5 text-left transition-transform duration-300 hover:scale-105"
                >
                    <div className="p-2">
                        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-red-600">
                            {faq.question}
                        </p>
                        <p className="text-sm sm:text-base md:text-lg pt-2 text-gray-800 whitespace-pre-line">
                            {faq.answer}
                        </p>
                    </div>
                </div>
            ))}

            <footer className="text-center py-4 md:py-6 bg-red-600 text-white">
                <div className="mb-4 md:mb-5 flex flex-row md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 lg:space-x-16">
                    <button
                        className="px-5 py-3 text-xs text-white font-semibold transition-transform duration-300 hover:scale-110 lg:px-12 lg:py-4 lg:text-lg"
                        onClick={() => navigate("/termsOfUse")}
                    >
                        Terms of Use
                    </button>
                    <button
                        className="px-5 py-3 text-xs text-white font-semibold transition-transform duration-300 hover:scale-110 lg:px-12 lg:py-4 lg:text-lg"
                        onClick={() => navigate("/faq")}
                    >
                        FAQ
                    </button>
                    <button
                        className="px-5 py-3 text-xs text-white font-semibold transition-transform duration-300 hover:scale-110 lg:px-12 lg:py-4 lg:text-lg"
                        onClick={() => navigate("/privacyPolicy")}
                    >
                        Privacy Policy
                    </button>
                </div>
                <p className="pt-2 text-sm md:text-base lg:text-lg">
                    RoommateLink &copy; 2025
                </p>
            </footer>
        </div>
    );
}

export default TermsOfUse;
