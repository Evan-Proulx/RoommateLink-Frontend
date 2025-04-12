import React, { useEffect } from "react";

function PrivacyPolicy() {
    const privacyData = [
        {
            question: "1. Information We Collect",
            answer:
                "We collect the following types of information:\n\nPersonal Information: When you register or use our services, we collect personal information such as your name, email address, and account details.\n\nUsage Data: We collect data about how you interact with our website and services.",
        },
        {
            question: "2. How We Use Your Information",
            answer:
                "We use the information we collect to:\n\n- Provide and improve our services.\n- Personalize your experience.",
        },
        {
            question: "3. Sharing Your Information",
            answer:
                "We do not sell your info to third parties. We may share information:\n\n- With trusted service providers to assist with our operations, including Stripe.",
        },
        {
            question: "4. Data Security",
            answer:
                "We safeguard your data from unauthorized access. However, there is no way to 100% safeguard online data.",
        },
        {
            question: "5. Your Rights",
            answer:
                "You can modify or delete your data. Please contact RoommateLink for account deletion.",
        },
        {
            question: "6. Changes to This Policy",
            answer:
                "We reserve the right to modify the Privacy Policy at any time, and will provide notice of updates. Continued use bounds you to the updated Policy.",
        },
        {
            question: "7. Contact Us",
            answer:
                "Please contact RoommateLink for any questions on data usage and privacy measures.",
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gradient-to-r from-white to-yellow-50 w-full px-4 sm:px-6 md:px-12 lg:px-24 py-6 space-y-8">
            <h1 className="font-supermercado sm:p-6 text-red-600 mt-[-10px] md:mt-[-30px] text-4xl sm:text-5xl md:text-6xl text-center">
                Roommate Link - Privacy Policy
            </h1>

            {privacyData.map((faq, index) => (
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
        </div>
    );
}

export default PrivacyPolicy;
