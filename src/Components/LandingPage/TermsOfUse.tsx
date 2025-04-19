import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

//Translations for TermsOfUse page
const termsTranslations = {
    en: {
        termsPageTitle: "Roommate Link - Terms of Use",
        termsData: [
            { question: "1. Introduction", answer: "Welcome to RoommateLink ('Service'). These terms and conditions ('Terms') govern your use of our website and services. By accessing or using the Service, you agree to comply with and be bound by these Terms." },
            { question: "2. Use of Services", answer: "You agree to use our services only for lawful purposes and in accordance with all applicable laws and regulations. You may not use our services to engage in any activity that interferes with or disrupts the Service or attempts unauthorized access." },
            { question: "3. Account Registration", answer: "To access certain features, you may need to register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate. You are responsible for safeguarding your password and notifying us immediately of any unauthorized use of your account." },
            { question: "4. User Content", answer: "Any content you upload, post, or otherwise make available on the Service ('User Content') remains your property. However, by providing User Content, you grant RoommateLink a worldwide, non-exclusive, royalty-free, transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform the User Content in connection with the Service." },
            { question: "5. Prohibited Activities", answer: "You agree not to engage in any of the following prohibited activities:\n\n- Violating any laws or regulations.\n- Posting infringing, defamatory, obscene, or otherwise unlawful material.\n- Engaging in spamming, phishing, or other fraudulent activities.\n- Impersonating any person or entity." },
            { question: "6. Termination of Service", answer: "We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach these Terms." },
            { question: "7. Limitation of Liability", answer: "To the maximum extent permitted by applicable law, RoommateLink shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use of the Service." },
            { question: "8. Modifications to Terms", answer: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on the Service. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms." },
        ],
        // Footer text
        terms: "Terms of Use",
        faq: "FAQ",
        privacy: "Privacy Policy",
        copyright: "RoommateLink © 2025",
    },
    fr: {
        termsPageTitle: "Roommate Link - Conditions d'Utilisation",
        termsData: [
            { question: "1. Introduction", answer: "Bienvenue sur RoommateLink ('Service'). Ces termes et conditions ('Conditions') régissent votre utilisation de notre site web et de nos services. En accédant ou en utilisant le Service, vous acceptez de vous conformer et d'être lié par ces Conditions." },
            { question: "2. Utilisation des Services", answer: "Vous acceptez d'utiliser nos services uniquement à des fins légales et conformément à toutes les lois et réglementations applicables. Vous ne pouvez pas utiliser nos services pour vous engager dans une activité qui interfère avec ou perturbe le Service ou tente un accès non autorisé." },
            { question: "3. Enregistrement de Compte", answer: "Pour accéder à certaines fonctionnalités, vous devrez peut-être créer un compte. Vous acceptez de fournir des informations exactes, à jour et complètes lors de l'enregistrement et de mettre à jour ces informations pour les maintenir exactes. Vous êtes responsable de la protection de votre mot de passe et de nous informer immédiatement de toute utilisation non autorisée de votre compte." },
            { question: "4. Contenu Utilisateur", answer: "Tout contenu que vous téléchargez, publiez ou rendez autrement disponible sur le Service ('Contenu Utilisateur') reste votre propriété. Cependant, en fournissant du Contenu Utilisateur, vous accordez à RoommateLink une licence mondiale, non exclusive, libre de droits et transférable pour utiliser, reproduire, distribuer, préparer des œuvres dérivées, afficher et exécuter le Contenu Utilisateur en relation avec le Service." },
            { question: "5. Activités Interdites", answer: "Vous acceptez de ne pas vous engager dans l'une des activités interdites suivantes :\n\n- Violation des lois ou réglementations.\n- Publication de matériel contrefaisant, diffamatoire, obscène ou autrement illégal.\n- S'engager dans le spamming, le phishing ou d'autres activités frauduleuses.\n- Usurper l'identité d'une personne ou d'une entité." },
            { question: "6. Résiliation du Service", answer: "Nous pouvons résilier ou suspendre votre accès au Service immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, y compris, sans limitation, si vous enfreignez ces Conditions." },
            { question: "7. Limitation de Responsabilité", answer: "Dans la mesure maximale permise par la loi applicable, RoommateLink ne sera pas responsable des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs, ni de toute perte de profits ou de revenus, qu'ils soient encourus directement ou indirectement, ni de toute perte de données, d'utilisation, de clientèle ou d'autres pertes intangibles, résultant de votre utilisation du Service." },
            { question: "8. Modifications des Conditions", answer: "Nous nous réservons le droit, à notre seule discrétion, de modifier ou de remplacer ces Conditions à tout moment. Nous fournirons un avis de tout changement en publiant les nouvelles Conditions sur le Service. Votre utilisation continue du Service après de tels changements constitue votre acceptation des nouvelles Conditions." },
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


function TermsOfUse() {
    const navigate = useNavigate();
    const location = useLocation();

    const language = location.state?.language === 'fr' || (!location.state?.language && getStoredLanguage() === 'fr')
        ? 'fr'
        : 'en';

    // Get translations based on the determined language
    const t = termsTranslations[language];

    // Extract page-specific translations
    const pageTitle = t.termsPageTitle as string || "Terms of Use";
    const currentTermsData = t.termsData as { question: string; answer: string }[] || [];

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
            console.error("LS write error on TermsOfUse load:", error);
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

                {currentTermsData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-yellow-100 p-4 rounded-lg shadow-2xl m-3 md:m-5 text-left transition-transform duration-300 hover:scale-105"
                    >
                        <div className="p-2">
                            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-red-600">
                                {item.question}
                            </p>
                            <p className="text-sm sm:text-base md:text-lg pt-2 text-gray-800 whitespace-pre-line">
                                {item.answer}
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
                        disabled // Disable clicking the current page link
                        style={{ cursor: 'default', opacity: 0.7 }} // Style disabled button
                    >
                        {t.terms}
                    </button>
                    <button
                        className="px-4 py-2 sm:px-8 sm:py-3 text-sm text-white font-semibold transition-transform duration-300 hover:scale-110 lg:px-12 lg:py-4 lg:text-lg"
                        onClick={() => navigateTo("/faq")}
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

export default TermsOfUse;