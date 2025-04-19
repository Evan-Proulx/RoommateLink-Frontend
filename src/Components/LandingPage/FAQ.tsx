import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

//Translations for FAQ page
const faqTranslations = {
    en: {
        faqPageTitle: "Roommate Link - FAQ",
        faqData: [
            { question: "1. What's RoommateLink?", answer: "RoommateLink is an online platform that helps people find their perfect roommate! The app allows you to create a detailed profile about yourself and matches you automatically with the best individuals." },
            { question: "2. How do I create an account?", answer: 'To create an account, simply click on the "Sign Up" button on the homepage and choose your preferred partner. We use Google, LinkedIn or GitHub to provide authentication.' },
            { question: "3. How can I update my profile information?", answer: "You can update your profile by navigating to your profile and editing your information where needed." },
            { question: "4. How do I report a user?", answer: 'If you need to report a user, visit their profile page and click on the "Report User" button. A pop-up will allow you to report them for various reasons. You can only report a user once.' },
            { question: "5. How do I rate a user?", answer: 'If you need to rate a user, visit their profile page and click on the "Rate User" button. A pop-up will allow you to rate them based on different values. You can only rate a user once.' },
            { question: "6. How do I delete my account?", answer: "If you wish to delete your account, please contact our support team at RoommateLink." },
            { question: "7. How do I chat with someone?", answer: 'Click on the "Send Message" button on their profile or the message icon on their profile card in the feed or discovery page. This will open up a chat log with them.' },
            { question: "8. How does the feed work?", answer: "The feed uses the information gathered from your profile and uses a score algorithm to compute a compatibility score with that user. The results are then returned in descending order." },
            { question: "9. Can I upload property information?", answer: "Yes! You can upload information on your property like a tour video, accommodation information, pricing, etc. This information can be added later on if needed and updated as well." },
        ],
        // Footer text
        terms: "Terms of Use",
        faq: "FAQ",
        privacy: "Privacy Policy",
        copyright: "RoommateLink © 2025",
    },
    fr: {
        faqPageTitle: "Roommate Link - FAQ",
        faqData: [
            { question: "1. Qu'est-ce que RoommateLink ?", answer: "RoommateLink est une plateforme en ligne qui aide les gens à trouver leur colocataire idéal ! L'application vous permet de créer un profil détaillé sur vous-même et vous met automatiquement en relation avec les meilleures personnes." },
            { question: "2. Comment créer un compte ?", answer: 'Pour créer un compte, cliquez simplement sur le bouton "S\'inscrire" sur la page d\'accueil et choisissez votre partenaire préféré. Nous utilisons Google, LinkedIn ou GitHub pour fournir l\'authentification.' },
            { question: "3. Comment puis-je mettre à jour les informations de mon profil ?", answer: "Vous pouvez mettre à jour votre profil en accédant à votre profil et en modifiant vos informations si nécessaire." },
            { question: "4. Comment signaler un utilisateur ?", answer: 'Si vous devez signaler un utilisateur, visitez sa page de profil et cliquez sur le bouton "Signaler l\'utilisateur". Une fenêtre contextuelle vous permettra de le signaler pour diverses raisons. Vous ne pouvez signaler un utilisateur qu\'une seule fois.' },
            { question: "5. Comment évaluer un utilisateur ?", answer: 'Si vous devez évaluer un utilisateur, visitez sa page de profil et cliquez sur le bouton "Évaluer l\'utilisateur". Une fenêtre contextuelle vous permettra de l\'évaluer en fonction de différentes valeurs. Vous ne pouvez évaluer un utilisateur qu\'une seule fois.' },
            { question: "6. Comment supprimer mon compte ?", answer: "Si vous souhaitez supprimer votre compte, veuillez contacter notre équipe de support chez RoommateLink." },
            { question: "7. Comment discuter avec quelqu'un ?", answer: 'Cliquez sur le bouton "Envoyer un message" sur son profil ou sur l\'icône de message sur sa carte de profil dans le fil d\'actualité ou la page de découverte. Cela ouvrira un journal de discussion avec lui.' },
            { question: "8. Comment fonctionne le fil d'actualité ?", answer: "Le fil d'actualité utilise les informations recueillies sur votre profil et utilise un algorithme de score pour calculer un score de compatibilité avec cet utilisateur. Les résultats sont ensuite renvoyés par ordre décroissant." },
            { question: "9. Puis-je télécharger des informations sur une propriété ?", answer: "Oui ! Vous pouvez télécharger des informations sur votre propriété comme une vidéo de visite, des informations sur l'hébergement, les prix, etc. Ces informations peuvent être ajoutées ultérieurement si nécessaire et mises à jour également." },
        ],
        // Footer text
        terms: "Conditions d'Utilisation",
        faq: "FAQ",
        privacy: "Politique de Confidentialité",
        copyright: "RoommateLink © 2025",
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


function FAQ() {
    const navigate = useNavigate();
    const location = useLocation();

    const language = location.state?.language === 'fr' || (!location.state?.language && getStoredLanguage() === 'fr')
        ? 'fr'
        : 'en';

    // Get translations based on the determined language
    const t = faqTranslations[language];

    // Extract page-specific translations
    const pageTitle = t.faqPageTitle as string || "FAQ"; // Fallback title
    const currentFaqData = t.faqData as { question: string; answer: string }[] || [];

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
            console.error("LS write error on FAQ load:", error);
        }
    }, [language]);

    // Simple navigation function
    const navigateTo = (path: string) => {
        navigate(path);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-white to-yellow-50 w-full">
            <main className="flex-grow px-4 sm:px-6 md:px-12 lg:px-24 py-6 space-y-8">
                {/* Simple Centered Header */}
                <h1 className="font-supermercado sm:pt-6 pt-4 text-red-600 text-3xl sm:text-4xl md:text-5xl text-center">
                    {pageTitle}
                </h1>

                {currentFaqData.map((faq, index) => (
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
            </main>

            {/* Footer */}
            <footer className="text-center py-4 md:py-6 bg-red-600 text-white mt-auto">
                <div className="mb-4 md:mb-5 flex flex-row sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 lg:space-x-16">
                    <button
                        className="px-4 py-2 sm:px-8 sm:py-3 text-sm text-white font-semibold transition-transform duration-300 hover:scale-110 lg:px-12 lg:py-4 lg:text-lg"
                        onClick={() => navigateTo("/termsOfUse")}
                    >
                        {t.terms}
                    </button>
                    <button
                        className="px-4 py-2 sm:px-8 sm:py-3 text-sm text-white font-semibold transition-transform duration-300 hover:scale-110 lg:px-12 lg:py-4 lg:text-lg"
                        onClick={() => navigateTo("/faq")}
                        disabled // Disable clicking the current page link
                        style={{ cursor: 'default', opacity: 0.7 }} // Style disabled button
                    >
                        {t.faq}
                    </button>
                    <button
                        className="px-4 py-2 sm:px-8 sm:py-3 text-sm text-white font-semibold transition-transform duration-300 hover:scale-110 lg:px-12 lg:py-4 lg:text-lg"
                        onClick={() => navigateTo("/privacyPolicy")}
                    >
                        {t.privacy}
                    </button>
                </div>
                <p className="pt-2 text-sm md:text-base lg:text-lg">
                    {t.copyright}
                </p>
            </footer>
        </div>
    );
}

export default FAQ;