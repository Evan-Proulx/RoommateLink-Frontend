import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const InterestedPeople = ({ interestedPeople }) => {
    const imgUrl = import.meta.env.VITE_ROOT_URL + "/storage/";
    const maxDisplay = 7;
    const navigate = useNavigate();
    // const displayedUsers = users.slice(0, maxDisplay);
    // const remainingUsers = users.length - displayedUsers.length;
    useEffect(() => {
        console.log("FjdkslFJKLDS", interestedPeople);
    }, [interestedPeople]);
    const navigateToProfile = (profile) => {
        //This refreshes the page. Without it the /profile navigation
        // doesn't work since you're already on the profile page
        navigate(0);
        //Navigate back to the profile page with the profile
        navigate('/profile', { state: { profile: profile, myProfileDisplayed: false } });
    };
    return (_jsxs("div", { className: "p-2", children: [_jsx("h1", { className: "text-xl font-bold", children: "Interested Users" }), _jsx("div", { className: "bg-gray-200 p-1 m-2 max-w-[500px] rounded-3xl shadow-lg", children: _jsx("div", { className: "flex flex-wrap gap-4 ", children: interestedPeople && interestedPeople.length > 0 ? (interestedPeople.slice(0, maxDisplay).map((user) => (_jsx("div", { title: user.profileData.first_name + " " + user.profileData.last_name, onClick: () => navigateToProfile(user), className: "flex flex-col items-center gap-2 cursor-pointer", children: _jsx("img", { className: "w-10 h-10 rounded-full", src: imgUrl + user.profileData.profile_picture || '/default-profile.png', alt: user.personalData.first_name || 'Interested user' }) }, user.personalData.account_id)))) : (_jsx("p", { className: "text-gray-500 p-2", children: "No interested users yet" })) }) })] }));
};
export default InterestedPeople;
