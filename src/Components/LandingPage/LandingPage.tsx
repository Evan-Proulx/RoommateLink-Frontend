import React, { useEffect, useState, createContext, useContext, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faMagnifyingGlassPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import LoginPopup from "./LoginPopup.tsx";
import { useNavigate } from "react-router-dom";

const translations = {
    en: {
        // First Section
        langEn: "En",
        langFr: "Fr",
        login: "Log in",
        mainTitle: "Roommate Link",
        subTitle: "Find the Perfect Roommate or Place with Ease!",
        feature1: "Easily find a like-minded roommate or the perfect place with our smart matching system. Hassle-free, fast, and tailored to your lifestyle.",
        feature2: "Stay safe with verified listings and secure chats. Join thousands who found their ideal living situation—quick, easy, and stress-free!",
        feature3: "Find your next home effortlessly and start living comfortably with a roommate who truly matches your vibe!",
        // How It Works
        howItWorksTitle: "How It Works",
        step1Title: "Create Your Profile",
        step1Desc: "Tell us about yourself and what you're looking for.",
        step2Title: "Discover Matches",
        step2Desc: "Get matched with compatible roommates or listings.",
        step3Title: "Connect & Move In",
        step3Desc: "Chat securely, schedule visits, and finalize your plans.",
        imgAltCreateProfile: "How roommate link works",
        imgAltFindRoommate: "Find roommate illustration",
        // Why Choose Us
        whyChooseUsTitle: "Why Choose Us?",
        reason1Title: "Smart Matching",
        reason1Desc: "Algorithm that connects you with ideal roommates.",
        reason2Title: "Budget-Friendly",
        reason2Desc: "Filter by rent, location, and amenities.",
        reason3Title: "Verified Listings",
        reason3Desc: "No scams, only real people & places.",
        ctaPrompt: "So, What are you waiting for?",
        joinNow: "Join Now",
        // Footer
        terms: "Terms of Use",
        faq: "FAQ",
        privacy: "Privacy Policy",
        copyright: "RoommateLink © 2025",
    },
    fr: {
        // First Section
        langEn: "En",
        langFr: "Fr",
        login: "Connexion",
        mainTitle: "Roommate Link",
        subTitle: "Trouvez le Colocataire ou le Logement Idéal Facilement !",
        feature1: "Trouvez facilement un colocataire partageant les mêmes idées ou le logement parfait grâce à notre système de correspondance intelligent. Sans tracas, rapide et adapté à votre style de vie.",
        feature2: "Restez en sécurité avec des annonces vérifiées et des discussions sécurisées. Rejoignez des milliers de personnes qui ont trouvé leur situation de vie idéale - rapide, facile et sans stress !",
        feature3: "Trouvez votre prochain chez-vous sans effort et commencez à vivre confortablement avec un colocataire qui correspond vraiment à votre ambiance !",
        // How It Works
        howItWorksTitle: "Comment Ça Marche",
        step1Title: "Créez Votre Profil",
        step1Desc: "Parlez-nous de vous et de ce que vous recherchez.",
        step2Title: "Découvrez des Correspondances",
        step2Desc: "Recevez des correspondances avec des colocataires ou des annonces compatibles.",
        step3Title: "Connectez-vous et Emménagez",
        step3Desc: "Discutez en toute sécurité, planifiez des visites et finalisez vos plans.",
        imgAltCreateProfile: "Comment fonctionne roommate link",
        imgAltFindRoommate: "Illustration trouver colocataire",
        // Why Choose Us
        whyChooseUsTitle: "Pourquoi Nous Choisir ?",
        reason1Title: "Correspondance Intelligente",
        reason1Desc: "Algorithme qui vous connecte avec les colocataires idéaux.",
        reason2Title: "Adapté au Budget",
        reason2Desc: "Filtrez par loyer, emplacement et commodités.",
        reason3Title: "Annonces Vérifiées",
        reason3Desc: "Pas d'arnaques, seulement de vraies personnes et de vrais lieux.",
        ctaPrompt: "Alors, Qu'attendez-vous ?",
        joinNow: "Inscrivez-vous Maintenant",
        // Footer
        terms: "Conditions d'Utilisation",
        faq: "FAQ",
        privacy: "Politique de Confidentialité",
        copyright: "RoommateLink © 2025",
    }
};

interface LanguageContextType {
    language: 'en' | 'fr';
    setLanguage: (language: 'en' | 'fr') => void;
    translations: typeof translations['en']; // Use one language as the shape
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// --- 3. Create Custom Hook for easy access ---
const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider (inside LandingPage)');
    }
    return context;
};




const FirstSection = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const { language, setLanguage, translations: t } = useLanguage(); // Use hook

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleOpenPopup = () => setPopupOpen(true);
    const handleClosePopup = () => setPopupOpen(false);

    const handleLanguageToggle = () => {
        setLanguage(language === 'en' ? 'fr' : 'en'); // Update context state
    };

    return (
        <section className="bg-gradient-to-r from-white to-yellow-100 text-center pb-10 pl-5 pr-5 md:pl-10 md:pr-10 lg:pl-20 lg:pr-20">
            <div className="flex justify-between items-center w-full py-4 px-5 md:px-10 lg:px-20">
                {/* Language Toggle */}
                <div className="flex items-center space-x-3">
                    <span className="text-gray-700 font-semibold text-lg md:text-xl">{t.langEn}</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={language === 'fr'} // Driven by context
                            onChange={handleLanguageToggle} // Update context
                        />
                        <div className="w-12 md:w-14 h-6 md:h-7 bg-red-500 rounded-full peer-checked:bg-blue-400 transition-colors duration-300">
                            <div
                                className={`absolute top-0.5 md:top-1 left-0.5 md:left-1 h-5 md:h-5 w-5 md:w-5 bg-white rounded-full transition-all duration-300 ${
                                    language === 'fr' ? "translate-x-6 md:translate-x-7" : "" // Driven by context
                                }`}
                            ></div>
                        </div>
                    </label>
                    <span className="text-gray-700 font-semibold text-lg md:text-xl">{t.langFr}</span>
                </div>

                {/* Account Section */}
                <div className="flex items-center space-x-4 md:space-x-6" onClick={handleOpenPopup}>
                    <button className="px-3 py-1.5 md:px-4 md:py-2 bg-red-500 text-white font-semibold text-lg md:text-xl rounded-full
                        hover:bg-red-600 transition-transform duration-300 hover:scale-110"
                    >
                        {t.login} {/* Use translation */}
                    </button>
                    <LoginPopup isOpen={isPopupOpen} onClose={handleClosePopup}/>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center text-center mt-6 md:mt-0">
                <h1 className="font-supermercado text-red-600 mt-[-10px] md:p-8 md:mt-[-30px] text-4xl sm:text-5xl md:text-6xl">
                    {t.mainTitle}
                </h1>
                <h1 className="text-xl md:text-3xl font-bold text-red-600 mt-2 md:mt-[-20px] lg:text-4xl">
                    {t.subTitle}
                </h1>

                <div className="flex flex-col lg:flex-row items-center justify-between mt-6 md:mt-8 max-w-6xl mx-auto">
                    {/* Image for Phone Mode */}
                    <div className="lg:hidden mb-4 p-3 md:p-5">
                        <img src="/src/Components/LandingPage/img4.jpg" alt={t.imgAltFindRoommate} className="mx-auto" style={{ width: '90%', maxWidth: '500px'}} />
                    </div>
                    {/* Text Content */}
                    <div className="max-w-md md:max-w-2xl">
                        <div className="bg-yellow-100 p-4 rounded-lg shadow-2xl m-3 md:m-5 text-left transition-transform duration-300 hover:scale-105">
                            <div className="p-2">
                                <p className="text-lg md:text-xl font-normal text-red-600 lg:text-1xl">
                                    {t.feature1}
                                </p>
                            </div>
                        </div>
                        <div className="bg-yellow-100 p-4 rounded-lg shadow-2xl m-3 md:m-5 text-left transition-transform duration-300 hover:scale-105">
                            <div className="p-2">
                                <p className="text-lg md:text-xl font-normal text-red-600 lg:text-1xl">
                                    {t.feature2}
                                </p>
                            </div>
                        </div>
                        <div className="bg-yellow-100 p-4 rounded-lg shadow-2xl m-3 md:m-5 text-left transition-transform duration-300 hover:scale-105">
                            <div className="p-2">
                                <p className="text-lg md:text-xl font-normal text-red-600 lg:text-1xl">
                                    {t.feature3}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Image for Normal Mode */}
                    <div className="hidden lg:block mt-4 lg:mt-0">
                        <img src="/src/Components/LandingPage/img4.jpg" alt={t.imgAltFindRoommate} className="mx-auto mb-4 p-3 md:p-5" style={{ width: '500px'}} />
                    </div>
                </div>
            </div>
        </section>
    );
};


const HowItWorks = () => {
    const { translations: t } = useLanguage(); // Use hook

    return (
        <section className="bg-gradient-to-r from-white to-yellow-100 text-center py-8 md:py-10 pl-5 pr-5 md:pl-0 md:pr-0 lg:pl-10 lg:pr-10">
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-6 lg:text-4xl">{t.howItWorksTitle}</h2>
            <div className="mt-4 flex flex-col lg:flex-row items-center justify-center gap-6">
                {/* Image for Phone Mode */}
                <div className="md:hidden mb-4">
                    <img src="/src/Components/LandingPage/img3.jpg" alt={t.imgAltCreateProfile} className="mx-auto" style={{ width: '90%', maxWidth: '310px'  }} />
                </div>
                {/* Image for Normal Mode */}
                <div className="hidden md:block lg:order-1">
                    <img src="/src/Components/LandingPage/img3.jpg" alt={t.imgAltCreateProfile} className="mx-auto mb-4" style={{ width: '310px'  }} />
                </div>
                {/* Steps */}
                <div className="flex flex-col gap-4 md:gap-6 max-w-md lg:max-w-lg lg:order-2">
                    <div className="bg-yellow-100 p-4 md:p-6 rounded-lg shadow-2xl bg-gradient-to-r from-yellow-100 to-white transition-transform duration-300 hover:scale-105">
                        <div className="flex items-left gap-2">
                            <FontAwesomeIcon icon={faUser} className="text-xl md:text-2xl text-red-600 lg:text-3xl"/>
                            <h3 className="text-lg md:text-xl font-bold text-left text-red-600 lg:text-2xl">{t.step1Title}</h3>
                        </div>
                        <p className="text-gray-700 mt-2 text-sm md:text-base text-left lg:text-lg">{t.step1Desc}</p>
                    </div>
                    <div className="bg-yellow-100 p-4 md:p-6 rounded-lg shadow-2xl bg-gradient-to-r from-yellow-100 to-white transition-transform duration-300 hover:scale-105">
                        <div className="flex items-left gap-2">
                            <FontAwesomeIcon icon={faMagnifyingGlassPlus} className="text-xl md:text-2xl text-red-600 lg:text-3xl"/>
                            <h3 className="text-lg md:text-xl font-bold text-left text-red-600 lg:text-2xl">{t.step2Title}</h3>
                        </div>
                        <p className="text-gray-700 mt-2 text-sm md:text-base text-left lg:text-lg">{t.step2Desc}</p>
                    </div>
                    <div className="bg-yellow-100 p-4 md:p-6 rounded-lg shadow-2xl bg-gradient-to-r from-yellow-100 to-white transition-transform duration-300 hover:scale-105">
                        <div className="flex items-left gap-2">
                            <FontAwesomeIcon icon={faComments} className="text-xl md:text-2xl text-red-600 lg:text-3xl"/>
                            <h3 className="text-lg md:text-xl font-bold text-left text-red-600 lg:text-2xl">{t.step3Title}</h3>
                        </div>
                        <p className="text-gray-700 mt-2 text-sm md:text-base text-left lg:text-lg">{t.step3Desc}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const WhyChooseUs = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const { translations: t } = useLanguage(); // Use hook

    const handleOpenPopup = () => setPopupOpen(true);
    const handleClosePopup = () => setPopupOpen(false);

    return (
        <section className="py-12 md:py-16 text-center bg-gradient-to-r from-white to-yellow-100">
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-6 lg:text-4xl">{t.whyChooseUsTitle}</h2>
            {/* Reasons */}
            <div className="mt-4 flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-6 max-w-6xl mx-auto lg:gap-8">
                <div className="bg-yellow-100 p-6 md:p-10 rounded-lg shadow-2xl w-full max-w-sm transition-transform duration-300 hover:scale-105 flex flex-col">
                    <h3 className="text-xl md:text-2xl p-2 font-bold text-red-600 lg:text-3xl">{t.reason1Title}</h3>
                    <p className="text-gray-700 mt-2 text-sm md:text-base lg:text-lg flex-grow">{t.reason1Desc}</p>
                </div>
                <div className="bg-white p-6 md:p-10 rounded-lg shadow-2xl w-full max-w-sm bg-gradient-to-r from-yellow-100 to-white transition-transform duration-300 hover:scale-105 flex flex-col">
                    <h3 className="text-xl md:text-2xl p-2 font-bold text-red-600 lg:text-3xl">{t.reason2Title}</h3>
                    <p className="text-gray-700 mt-2 text-sm md:text-base lg:text-lg flex-grow">{t.reason2Desc}</p>
                </div>
                <div className="bg-white p-6 md:p-10 rounded-lg shadow-2xl w-full max-w-sm transition-transform duration-300 hover:scale-105 flex flex-col">
                    <h3 className="text-xl md:text-2xl p-2 font-bold text-red-600 lg:text-3xl">{t.reason3Title}</h3>
                    <p className="text-gray-700 mt-2 text-sm md:text-base lg:text-lg flex-grow">{t.reason3Desc}</p>
                </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col items-center justify-center text-center space-y-4 mt-8 md:mt-10">
                <h2 className="text-lg md:text-xl px-4 py-2 font-bold text-red-600 lg:text-2xl">{t.ctaPrompt}</h2>
                <div onClick={handleOpenPopup}>
                    <button className="px-6 py-3 bg-red-500 text-white font-semibold text-lg md:text-xl rounded-full
                        hover:bg-red-600 transition-transform duration-300 hover:scale-110 lg:px-8 lg:py-4 lg:text-2xl"
                    >
                        {t.joinNow}
                    </button>
                    <LoginPopup isOpen={isPopupOpen} onClose={handleClosePopup}/>
                </div>
            </div>
        </section>
    );
};



const LandingPage = () => {
    const navigate = useNavigate();
    const [language, setLanguage] = useState<'en' | 'fr'>('en'); // State lives here

    // Memoize context value to prevent unnecessary re-renders of consumers
    // if LandingPage re-renders for other reasons.
    const contextValue = React.useMemo(() => ({
        language,
        setLanguage,
        translations: translations[language] // Provide only the translations for the current language
    }), [language]);

    // Get translations for the footer directly from the state
    const t = translations[language];

    return (
        <LanguageContext.Provider value={contextValue}> {/* Provide context */}
            <div>
                <FirstSection />
                <HowItWorks />
                <WhyChooseUs />

                {/* Footer */}
                <footer className="text-center py-4 md:py-6 bg-red-600 text-white">
                    <div className="mb-4 md:mb-5 flex flex-row sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 lg:space-x-16">
                        <button
                            className="px-4 py-2 sm:px-8 sm:py-3 text-sm text-white font-semibold transition-transform duration-300 hover:scale-110 lg:px-12 lg:py-4 lg:text-lg"
                            onClick={() => navigate('/termsOfUse')}
                        >
                            {t.terms}
                        </button>
                        <button
                            onClick={() => navigate('/faq')}
                            className="px-4 py-2 sm:px-8 sm:py-3 text-sm text-white font-semibold transition-transform duration-300 hover:scale-110 lg:px-12 lg:py-4 lg:text-lg"
                        >
                            {t.faq}
                        </button>
                        <button
                            className="px-4 py-2 sm:px-8 sm:py-3 text-sm text-white font-semibold transition-transform duration-300 hover:scale-110 lg:px-12 lg:py-4 lg:text-lg"
                            onClick={() => navigate('/privacyPolicy')}
                        >
                            {t.privacy}
                        </button>
                    </div>
                    <p className="pt-2 text-sm md:text-base lg:text-lg">
                        {t.copyright}
                    </p>
                </footer>
            </div>
        </LanguageContext.Provider>
    );
};

export default LandingPage;