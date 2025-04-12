import React, { useEffect } from "react";

function FAQ() {
    const faqData = [
        {
            question: "1. What's RoommateLink?",
            answer:
                "RoommateLink is an online platform that helps people find their perfect roommate! The app allows you to create a detailed profile about yourself and matches you automatically with the best individuals.",
        },
        {
            question: "2. How do I create an account?",
            answer:
                'To create an account, simply click on the "Sign Up" button on the homepage and choose your preferred partner. We use Google, LinkedIn or GitHub to provide authentication.',
        },
        {
            question: "3. How can I update my profile information?",
            answer:
                "You can update your profile by navigating to your profile and editing your information where needed.",
        },
        {
            question: "4. How do I report a user?",
            answer:
                'If you need to report a user, visit their profile page and click on the "Report User" button. A pop-up will allow you to report them for various reasons. You can only report a user once.',
        },
        {
            question: "5. How do I rate a user?",
            answer:
                'If you need to rate a user, visit their profile page and click on the "Rate User" button. A pop-up will allow you to rate them based on different values. You can only rate a user once.',
        },
        {
            question: "6. How do I delete my account?",
            answer:
                "If you wish to delete your account, please contact our support team at RoommateLink.",
        },
        {
            question: "7. How do I chat with someone?",
            answer:
                'Click on the "Send Message" button on their profile or the message icon on their profile card in the feed or discovery page. This will open up a chat log with them.',
        },
        {
            question: "8. How does the feed work?",
            answer:
                "The feed uses the information gathered from your profile and uses a score algorithm to compute a compatibility score with that user. The results are then returned in descending order.",
        },
        {
            question: "9. Can I upload property information?",
            answer:
                "Yes! You can upload information on your property like a tour video, accommodation information, pricing, etc. This information can be added later on if needed and updated as well.",
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gradient-to-r from-white to-yellow-50 w-full px-4 sm:px-6 md:px-12 lg:px-24 py-6 space-y-8 ">
            <h1 className="font-supermercado sm:p-6 text-red-600 mt-[-10px] md:mt-[-30px] text-4xl sm:text-5xl md:text-6xl text-center">
                Roommate Link - FAQ
            </h1>

            {faqData.map((faq, index) => (
                <div
                    key={index}
                    className="bg-yellow-100 p-4 rounded-lg shadow-2xl m-3 md:m-5 text-left transition-transform duration-300 hover:scale-105"
                >
                    <div className="p-2">
                        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-red-600">
                            {faq.question}
                        </p>
                        <p className="text-sm sm:text-base md:text-lg pt-2 text-gray-800">
                            {faq.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FAQ;