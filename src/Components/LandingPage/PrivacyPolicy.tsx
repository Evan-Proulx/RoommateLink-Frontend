import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

//Translations for PrivacyPolicy
const privacyPolicyTranslations = {
    en: {
        privacyPageTitle: "Roommate Link - Privacy Policy",
        privacyData: [
            { question: "1. Information We Collect", answer: "We collect the following types of information:\n\nPersonal Information: When you register or use our services, we collect personal information such as your name, email address, and account details.\n\nUsage Data: We collect data about how you interact with our website and services." },
            { question: "2. How We Use Your Information", answer: "We use the information we collect to:\n\n- Provide and improve our services.\n- Personalize your experience." },
            { question: "3. Sharing Your Information", answer: "We do not sell your info to third parties. We may share information:\n\n- With trusted service providers to assist with our operations, including Stripe." },
            { question: "4. Data Security", answer: "We safeguard your data from unauthorized access. However, there is no way to 100% safeguard online data." },
            { question: "5. Your Rights", answer: "You can modify or delete your data. Please contact RoommateLink for account deletion." },
            { question: "6. Changes to This Policy", answer: "We reserve the right to modify the Privacy Policy at any time, and will provide notice of updates. Continued use bounds you to the updated Policy." },
            { question: "7. Contact Us", answer: "Please contact RoommateLink for any questions on data usage and privacy measures." },
        ],
        terms: "Terms of Use", faq: "FAQ", privacy: "Privacy Policy", copyright: "RoommateLink © 2025",
    },
    fr: {
        privacyPageTitle: "Roommate Link - Politique de Confidentialité",
        privacyData: [
            { question: "1. Informations que Nous Collectons", answer: "Nous collectons les types d'informations suivants :\n\nInformations Personnelles : Lorsque vous vous inscrivez ou utilisez nos services, nous collectons des informations personnelles telles que votre nom, votre adresse e-mail et les détails de votre compte.\n\nDonnées d'Utilisation : Nous collectons des données sur la manière dont vous interagissez avec notre site web et nos services." },
            { question: "2. Comment Nous Utilisons Vos Informations", answer: "Nous utilisons les informations que nous collectons pour :\n\n- Fournir et améliorer nos services.\n- Personnaliser votre expérience." },
            { question: "3. Partage de Vos Informations", answer: "Nous ne vendons pas vos informations à des tiers. Nous pouvons partager des informations :\n\n- Avec des fournisseurs de services de confiance pour nous aider dans nos opérations, y compris Stripe." },
            { question: "4. Sécurité des Données", answer: "Nous protégeons vos données contre l'accès non autorisé. Cependant, il n'existe aucun moyen de protéger à 100% les données en ligne." },
            { question: "5. Vos Droits", answer: "Vous pouvez modifier ou supprimer vos données. Veuillez contacter RoommateLink pour la suppression de votre compte." },
            { question: "6. Modifications de Cette Politique", answer: "Nous nous réservons le droit de modifier la Politique de Confidentialité à tout moment et fournirons un avis des mises à jour. L'utilisation continue vous lie à la Politique mise à jour." },
            { question: "7. Contactez-Nous", answer: "Veuillez contacter RoommateLink pour toute question sur l'utilisation des données et les mesures de confidentialité." },
        ],
        terms: "Conditions d'Utilisation", faq: "FAQ", privacy: "Politique de Confidentialité", copyright: "RoommateLink © 2025",
    }
};

const getStoredLanguage = (): 'en' | 'fr' => {
    try {
        const savedLanguage = localStorage.getItem('preferredLanguage');
        if (savedLanguage === 'en' || savedLanguage === 'fr') {
            return savedLanguage;
        }
    } catch (error) {
        console.error("LS read error:", error);
    }
    return 'en'; // Default
};

function PrivacyPolicy() {
    const navigate = useNavigate();
    const location = useLocation();

    const language = location.state?.language === 'fr' || (!location.state?.language && getStoredLanguage() === 'fr')
        ? 'fr'
        : 'en';

    // Get translations based on the determined language
    const t = privacyPolicyTranslations[language];

    // Extract page-specific translations
    const pageTitle = t.privacyPageTitle as string || "Privacy Policy";
    const currentPrivacyData = t.privacyData as { question: string; answer: string }[] || [];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        try {
            const currentlyStored = getStoredLanguage();
            if (language !== currentlyStored) {
                localStorage.setItem('preferredLanguage', language);
            }
        } catch (error) {
            console.error("LS write error on PrivacyPolicy load:", error);
        }
    }, [language]); // Run when 'language' is determined


    const navigateTo = (path: string) => {
        navigate(path);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-white to-yellow-50 w-full">
            <main className="flex-grow px-4 sm:px-6 md:px-12 lg:px-24 py-6 space-y-8">

                <h1 className="font-supermercado sm:pt-6 pt-4 text-red-600 text-3xl sm:text-4xl md:text-5xl text-center">
                    {pageTitle}
                </h1>

                {/* Privacy Sections */}
                {currentPrivacyData.map((item, index) => (
                    <div key={index} className="bg-yellow-100 p-4 rounded-lg shadow-2xl m-3 md:m-5 text-left transition-transform duration-300 hover:scale-105">
                        <div className="p-2">
                            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-red-600">{item.question}</p>
                            <p className="text-sm sm:text-base md:text-lg pt-2 text-gray-800 whitespace-pre-line">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </main>

            {/* Footer */}
            <footer className="text-center py-4 md:py-6 bg-red-600 text-white mt-auto">
                <div className="mb-4 md:mb-5 flex flex-row sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 lg:space-x-16">
                    <button className="px-4 py-2 sm:px-8 sm:py-3 text-sm text-white font-semibold transition-transform duration-300 hover:scale-110 lg:px-12 lg:py-4 lg:text-lg" onClick={() => navigateTo("/termsOfUse")}>{t.terms}</button>
                    <button className="px-4 py-2 sm:px-8 sm:py-3 text-sm text-white font-semibold transition-transform duration-300 hover:scale-110 lg:px-12 lg:py-4 lg:text-lg" onClick={() => navigateTo("/faq")}>{t.faq}</button>
                    <button className="px-4 py-2 sm:px-8 sm:py-3 text-sm text-white font-semibold transition-transform duration-300 hover:scale-110 lg:px-12 lg:py-4 lg:text-lg" onClick={() => navigateTo("/privacyPolicy")} disabled style={{ cursor: 'default', opacity: 0.7 }}>{t.privacy}</button>
                </div>
                <p className="pt-2 text-sm md:text-base lg:text-lg">{t.copyright}</p>
            </footer>
        </div>
    );
}

export default PrivacyPolicy;